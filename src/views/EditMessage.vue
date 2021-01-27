<template>
  <form id="form" @submit="checkForm" method="post">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-4">
            <input
              id="subjectInput"
              v-model="name"
              type="text"
              name="subjectInput"
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
      </div>
      <div class="card-body">
        <div class="card-title">
          <input
            id="subjectInput"
            v-model="subject"
            type="text"
            name="subjectInput"
            class="form-control"
          />
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
        <div class="card-text"></div>
        <input type="submit" value="Modifier" class="btn btn-primary btn-lg" />
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "EditMessage",
  data() {
    return {
      errors: [],
      id: this.$route.params.id,
      name: null,
      city: null,
      country: null,
      subject: null,
      tags: null,
      content: null,
    };
  },
  methods: {
    getMessage() {
      axios
        .get(
          "https://crudcrud.com/api/4bbc5a6a11e247dfabd43c5c58b8afcf/message/" +
            this.id
        )
        .then((response) => {
          let message = response.data;
          this.name = message.name;
          this.city = message.city;
          this.country = message.country;
          this.subject = message.subject;
          this.tags = message.tags;
          this.content = message.content;
        })
        .catch(() => {
          console.log("error");
        });
    },
    checkForm: function(e) {
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
          "https://crudcrud.com/api/5770db48a9244d4c879618d33c4dcd6f/message/" +
            this.$route.params.id,
          message
        )
        .then(() => {
          this.$router.push({ name: 'Message', params: this.$route.params.id });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getMessage();
  },
};
</script>

<style scoped></style>
