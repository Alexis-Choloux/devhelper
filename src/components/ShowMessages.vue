<template>
    <h2>{{ message.subject }}<span class="text-muted">{{ message.date }}</span></h2>
    <p>{{ message.message }}</p>
    <p>{{ message.tags }}</p>
</template>

<script>
export default {
    name: "GetMessages",
    props: ["message"]
}
</script>