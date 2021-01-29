import { createWebHistory, createRouter } from "vue-router";
import Message from "@/views/Message.vue";
import EditMessage from "@/views/EditMessage.vue";
import App from "@/App.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import store from "@/store";

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
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { guest: true},
  },
  {
    path: '/login',
    name: "Login",
    component: Login,
    meta: { guest: true },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/posts");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;