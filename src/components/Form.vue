<template>
<div class="row">
<div class="col-md-4 offset-md-4">
<form
  id="app"
  @submit="checkForm"
  action="https://vuejs.org/"
  method="post"
>

  <p v-if="errors.length">
    <b>S'il vous plait, corriger les erreurs suivantes :</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>

  <p>
    <label for="subjectInput" class="form-label">Sujet</label>
    <input
      id="subjectInput"
      v-model="subjectInput"
      type="text"
      name="subjectInput"
      class="form-control"
    >
  </p>

    <p>
    <label for="tagsInput" class="form-label">Tags</label>
    <input
      id="tagsInput"
      v-model="tagsInput"
      type="text"
      name="tagsInput"
      class="form-control"
    >
  </p>

    <p>
    <label for="messageInput" class="form-label">Message</label>
    <input
      id="messageInput"
      v-model="messageInput"
      type="text"
      name="messageInput"
      class="form-control"
    >
  </p>

  <p>
    <label for="languageInput" class="form-label">Language / Framework</label>
    <select
      id="languageInput"
      v-model="languageInput"
      name="languageInput"
      class="form-select"
    >
      <option>HTML/CSS</option>
      <option>Javascript</option>
      <option>PHP</option>
    </select>
  </p>

  <p>
    <input
      type="submit"
      value="Submit" 
      class="btn btn-danger"
    >
  </p>

</form>
</div>
</div>
</template>

<script>
import axios from "axios";
import moment from 'moment'

export default {
  name: "Form",
  data() {
    return {
      errors: [],
      subjectInput: null,
      tagsInput: null,
      messageInput: null,
      languageInput: null,
    };
  },
  methods: {
    checkForm: function (e) {
      if (
        this.subjectInput &&
        this.tagsInput &&
        this.messageInput &&
        this.languageInput
      ) {
        this.sendPost();
      }

      this.errors = [];

      if (!this.subjectInput) {
        this.errors.push("Sujet requis.");
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
      e.preventDefault();
    },
    sendPost() {
      let message = {          
          subject: this.subjectInput,
          tags: this.tagsInput,
          message: this.messageInput,
          language: this.languageInput,
          date: moment().format('DD/MM/YYYY hh:mm')
          };
      axios
        .post("https://crudcrud.com/api/391a25ba7d4f49afbcf2abf7b654f28a/message", message)
        .then(
          console.log(message)
        )
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>