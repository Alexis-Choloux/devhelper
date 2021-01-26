<template>
  <div class="card text-dark bg-light mb-3">
    <div class="card-body">
      <div class="row text-start">
        <div class="d-flex">
          <h2>
            {{ message.subject
            }}<span class="text-muted fs-6">{{ message.date }}</span>
          </h2>
          <EditMessage :message="message" />
        </div>

        <p>{{ message.language }}</p>
        <p>{{ message.name }}</p>
        <p>{{ message.message }}</p>
        <p>{{ message.tags }}</p>
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
