<template>
  <div class="container">
    <div v-if="$route.path == '/'">
      <div class="row">
        <div class="col-md-3 text-center">
          <Form />
        </div>
      </div>

      <div class="row">
        <div
          class="col-md-9 offset-md-3"
          v-for="message in messages"
          :key="message.id"
        >
          <ShowMessages :message="message" />
        </div>
      </div>
    </div>
    <div v-else>
      <router-view :key="$route.fullPath"></router-view>
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
          "https://crudcrud.com/api/5b326cc2e0bc4b2abdffca8791049cc9/message"
        )
        .then((response) => {
          this.messages = response.data;
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
  bottom: -30px;
  width: 70%;
}
.modal-dialog input,
.modal-dialog textarea {
  border: none;
}

.routerLink {
  text-decoration: none;
  color: black;
}.routerLink:hover {
  color: black;
}

.return {
  width: 150px;
  font-size: 20px;
}
.return i {
  margin-right: 20px;
  font-size: 30px;
}
</style>
