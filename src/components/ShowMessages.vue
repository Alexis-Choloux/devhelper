<template>
  <div class="card text-dark bg-light mb-3">
    <div class="card-body">
      <div class="row text-start">
        <div class="d-flex">
          <router-link
            :to="{ path: '/message/' + message._id }"
            class="routerLink"
          >
            <h2>
              {{ message.subject
              }}<span class="text-muted fs-6">{{ message.date }}</span>
            </h2>
          </router-link>

          <EditMessage :message="message" />
        </div>
        <router-link
          :to="{ path: '/message/' + message._id }"
          class="routerLink"
        >
          <p>{{ message.name }}</p>
          <p>{{ message.message }}</p>
          <p>{{ message.tags }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import EditMessage from "./EditMessage";

export default {
  name: "GetMessages",
  props: ["message"],
  components: {
    EditMessage,
  },
};
</script>
