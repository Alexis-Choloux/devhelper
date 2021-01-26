import { createWebHistory, createRouter } from "vue-router";
import Message from "@/views/Message.vue";

const routes = [
  {
    path: "/message/:id",
    name: "Message",
    component: Message,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;