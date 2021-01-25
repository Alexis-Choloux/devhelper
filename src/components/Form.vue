<template>
<div class="row">
<div class="col-md-4 offset-md-4">
<form
  id="form"
  @submit="checkForm"
  method="post"
>

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

    <input
      id="subjectInput"
      v-model="subjectInput"
      type="text"
      name="subjectInput"
      class="form-control"
      placeholder="Sujet"
    >

    <input
      id="messageInput"
      v-model="messageInput"
      type="text"
      name="messageInput"
      class="form-control"
      placeholder="Message"
    >

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
      <option value="1">HTML/CSS</option>
      <option value="2">Javascript</option>
      <option value="3">PHP</option>
    </select>

    <input
      type="submit"
      value="Submit" 
      class="btn btn-danger"
    >

</form>
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
          "https://crudcrud.com/api/2ff714c65afc4a3387344703fb4135cc/message",
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