<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-light btn-sm"
    data-bs-toggle="modal"
    data-bs-target="#editModal"
  >
    <i class="fas fa-edit"></i>
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="editModal"
    tabindex="-1"
    aria-labelledby="editModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">

        <div class="modal-header">
            <input
              id="subjectInput"
              v-model="subject"
              type="text"
              name="subjectInput"
              class="form-control"
            />          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <form id="form" @submit="checkForm" method="post">
          <div class="modal-body">
            <p v-if="errors.length">
              <b>S'il vous plait, corriger les erreurs suivantes :</b>
                <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </p>

            <div class="row mb-2">
              <input
                id="nameInput"
                v-model="name"
                type="text"
                name="nameInput"
                class="form-control"
              />
            </div>

            <input
              id="cityInput"
              v-model="city"
              type="text"
              name="cityInput"
              class="form-control"
            />

            <input
              id="countryInput"
              v-model="country"
              type="text"
              name="countryInput"
              class="form-control"
            />

            <textarea
              id="messageInput"
              v-model="content"
              type="text"
              name="messageInput"
              class="form-control"
            ></textarea>

            <input
              id="tagsInput"
              v-model="tags"
              type="text"
              name="tagsInput"
              class="form-control"
            />

            <select  v-model="languageInput" class="form-select" aria-label="Default select example">
              <option value="HTML/CSS">HTML/CSS</option>
              <option value="Javascript">Javascript</option>
              <option value="PHP">PHP</option>
            </select>
          </div>

          <div class="modal-footer">
            <input type="submit" value="Submit" class="btn btn-danger" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "EditMessage",
  props: ["message"],
  data() {
    return {
      errors: [],
      name: this.message.name,
      city: this.message.city,
      country: this.message.country,
      subject: this.message.subject,
      tags: this.message.tags,
      content: this.message.message,
      languageInput: null,
    };
  },
    methods: {
      checkForm: function (e) {
        e.preventDefault();

        if (
          this.name &&
          this.city &&
          this.country &&
          this.subject &&
          this.tags &&
          this.content &&
          this.languageInput
        ) {
          this.updatePost();
        }

        this.errors = [];

        if (!this.name) {
          this.errors.push("Pseudo requis.");
        }
        if (!this.city) {
          this.errors.push("Ville requis.");
        }
        if (!this.country) {
          this.errors.push("Pays requis.");
        }
        if (!this.tags) {
          this.errors.push("Tags requis.");
        }
        if (!this.content) {
          this.errors.push("Message requis.");
        }
        if (!this.language) {
          this.errors.push("Language requis.");
        }
      },
      updatePost() {
        let message = {
          name: this.name,
          city: this.city,
          country: this.country,
          subject: this.subject,
          tags: this.tags,
          message: this.content,
          language: this.languageInput,
          date: moment().format("DD/MM/YYYY hh:mm"),
        };
        axios
          .put(
            "https://crudcrud.com/api/8c3fd2029f064dd58dc07ae6819c5ee4/message/" + this.message._id,
            message
          )
          .then(() => {
            location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
};
</script>

<style scoped>

</style>
