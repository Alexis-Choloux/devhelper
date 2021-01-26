<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9 offset-md-3">
        <div class="card text-dark bg-light mb-3">
          <div class="card-header text-start">
              <div class="d-flex">
                <h2>
                  {{ message.name }}
                </h2>
                <EditMessage :message="message" />
              </div>
              <p>{{ message.city }}  {{ message.country }}</p>
          </div>
          <div class="card-body">
            <div class="row text-start">

              <p>{{ message.subject }}  {{ message.date }}</p>
              <p>{{ message.message }}</p>
              <p>{{ message.tags }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import EditMessage from "@/components/EditMessage";

export default {
  name: "Message",
  components: {
    EditMessage,
  },
  data() {
    return {
      id: this.$route.params.id,
      message: [],
    };
  },
  methods: {
    getMessage() {
      axios
        .get(
          "https://crudcrud.com/api/874b1e2002ec449b88c0e3b1fa1fb018/message/" +
            this.id
        )
        .then((response) => {
          this.message = response.data;
          console.log(this.message);
        });
    },
  },
  created() {
    this.getMessage();
  },
};
</script>
