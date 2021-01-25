<template>
  <div class="container">
    <Form />

    <div class="row">
      <div class="col-md-6 offset-md-2" v-for="message in messages" :key="message.id">
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
          "https://crudcrud.com/api/2ff714c65afc4a3387344703fb4135cc/message"
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
</style>
