<template>
<div class="row">

  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">

            <form
              id="form"
              @submit="checkForm"
              method="post"
            >

      <div class="modal-header">
        <input
          id="subjectInput"
          v-model="subjectInput"
          type="text"
          name="subjectInput"
          class="form-control"
          placeholder="Sujet"
        >        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>


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
      v-model="nameInput"
      type="text"
      name="nameInput"
      class="form-control"
      placeholder="Pseudo"
    >
</div>

    <input
      id="cityInput"
      v-model="cityInput"
      type="text"
      name="cityInput"
      class="form-control"
      placeholder="Ville"
    >

    <input
      id="countryInput"
      v-model="countryInput"
      type="text"
      name="countryInput"
      class="form-control"
      placeholder="Pays"
    >

    <textarea
      id="messageInput"
      v-model="messageInput"
      type="text"
      name="messageInput"
      class="form-control"
      placeholder="Message"
    ></textarea>

    <input
      id="tagsInput"
      v-model="tagsInput"
      type="text"
      name="tagsInput"
      class="form-control"
      placeholder="Tags"
    >

    <select
      class="form-select" 
      aria-label="Default select example" 
      id="languageInput"
      v-model="languageInput"
      name="languageInput"
    >
      <option selected>Séléctionnez le language</option>
      <option value="HTML/CSS">HTML/CSS</option>
      <option value="Javascript">Javascript</option>
      <option value="PHP">PHP</option>
    </select>      

    </div>


      <div class="modal-footer">
        <input
      type="submit"
      value="Submit" 
      class="btn btn-danger"
    >
      </div>
          </form>

    </div>
  </div>
</div>

</div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "Form",
  data() {
    return {
      errors: [],
      nameInput: null,
      cityInput: null,
      countryInput: null,
      subjectInput: null,
      tagsInput: null,
      messageInput: null,
      languageInput: null,
    };
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault();

      if (
        this.nameInput &&
        this.cityInput &&
        this.countryInput &&
        this.subjectInput &&
        this.tagsInput &&
        this.messageInput &&
        this.languageInput
      ) {
        this.sendPost();
      }

      this.errors = [];

      if (!this.nameInput) {
        this.errors.push("Pseudo requis.");
      }
      if (!this.cityInput) {
        this.errors.push("Ville requis.");
      }
      if (!this.countryInput) {
        this.errors.push("Pays requis.");
      }
      if (!this.tagsInput) {
        this.errors.push("Tags requis.");
      }
      if (!this.messageInput) {
        this.errors.push("Message requis.");
      }
      if (!this.languageInput) {
        this.errors.push("Language requis.");
      }
    },

    sendPost() {
      let message = {
        name: this.nameInput,
        city: this.cityInput,
        country: this.countryInput,
        subject: this.subjectInput,
        tags: this.tagsInput,
        message: this.messageInput,
        language: this.languageInput,
        date: moment().format("DD/MM/YYYY hh:mm"),
      };
      axios
        .post(
          "https://crudcrud.com/api/8c3fd2029f064dd58dc07ae6819c5ee4/message",
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