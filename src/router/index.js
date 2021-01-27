import { createWebHistory, createRouter } from "vue-router";
import Message from "@/views/Message.vue";
import EditMessage from "@/views/EditMessage.vue";
import App from "@/App.vue";

const routes = [
  {
    path: "/message/:id",
    name: "Message",
    component: Message,
  },
  {
    path: "/editmessage/:id",
    name: "EditMessage",
    component: EditMessage,
  },
  {
    path: "/",
    name: "Home",
    component: App,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;