<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-light btn-sm"
    data-bs-toggle="modal"
    :data-bs-target="'#editModal' + message._id"
  >
    <i class="fas fa-pen fa-2x"></i>
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    :id="'editModal' + message._id"
    tabindex="-1"
    :aria-labelledby="'editModalLabel' + message._id"
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
            />          
            <button
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
              <div class="col-4">
                  <p>{{ name }}</p>

              <input
                id="nameInput"
                v-model="name"
                type="text"
                name="nameInput"
                class="form-control"
              />
              </div>

              <div class="col-4">
            <input
              id="cityInput"
              v-model="city"
              type="text"
              name="cityInput"
              class="form-control"
            />
              </div>

              <div class="col-4">
            <input
              id="countryInput"
              v-model="country"
              type="text"
              name="countryInput"
              class="form-control"
            />
              </div>
            </div>

            <textarea
              id="messageInput"
              v-model="content"
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
            
          </div>

          <div class="modal-footer">
            <input type="submit" value="Modifier" class="btn btn-primary btn-lg" />
          </div>
        </form>
      </div>
    </div>
  </div>


  <!-- Button trigger modal -->
<button type="button" class="btn btn-light btn-sm" data-bs-toggle="modal" :data-bs-target="'#deleteModal' + message._id">
  <i class="fas fa-trash fa-2x"></i>
</button>

<!-- Modal -->
<div class="modal fade" :id="'deleteModal' + message._id" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="deleteModalLabel">Suppression</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Etes-vous sûr de vouloir prosséder à la suppression de ce message ?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Fermer</button>
        <button type="button" class="btn btn-danger" @click="deletePost()">Supprimer</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "EditMessageModal",
  props: ["message"],
  data() {
    return {
      errors: [],
      name: this.message.name,
      city: this.message.city,
      country: this.message.country,
      subject: this.message.subject,
      tags: this.message.tags,
      content: this.message.content,
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
          this.content
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
      },
      updatePost() {
        let message = {
          name: this.name,
          city: this.city,
          country: this.country,
          subject: this.subject,
          tags: this.tags,
          content: this.content,
          date: moment().format("DD/MM/YYYY hh:mm"),
        };
        axios
          .put(
            "https://crudcrud.com/api/5770db48a9244d4c879618d33c4dcd6f/message/" + this.message._id,
            message
          )
          .then(() => {
            location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      },
      deletePost() {
          axios
          .delete(
            "https://crudcrud.com/api/5770db48a9244d4c879618d33c4dcd6f/message/" + this.message._id
          )
          .then(() => {
            location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
      created() {
    console.log(this.message);
    console.log(this.message.name);
  },
};
</script>

<style scoped>

</style>
