<template>
  <div class="container">
    <Form />

    <div class="row">
      <div class="col-md-6 offset-md-3" v-for="message in messages" :key="message.id">
        <ShowMessages :message="message" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Form from "./components/Form.vue";
import ShowMessages from "./components/ShowMessages.vue";

export default {
  name: "App",
  components: {
    Form,
    ShowMessages,
  },
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    getMessages() {
      axios
        .get(
          "https://crudcrud.com/api/8c3fd2029f064dd58dc07ae6819c5ee4/message"
        )
        .then((response) => {
          this.messages = response.data;
          console.log(this.messages);
        });
    },
  },
  created() {
    this.getMessages();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.modal-dialog {
  position: fixed;
  margin-left: 15%;
  bottom: 0;
  width: 70%;
}
.modal-dialog input, .modal-dialog textarea {
  border: none;
}
</style>
