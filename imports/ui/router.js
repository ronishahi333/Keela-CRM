import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home.vue";
import Addcontacts from "./Addcontacts.vue";
import Tags from "./Tags.vue";
import Users from "./Users.vue";
import Dashboard from "./Dashboard.vue";
import Admin from "./Admin.vue";
import Adminusers from "./Adminusers.vue";
import Userlogin from "./Userslogin.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./About.vue"),
    },
    {
      path: "/dashboard",
      name: "dasboard",
      component: Dashboard,
    },
    {
      path: "/addcontacts",
      name: "addcontact",
      component: Addcontacts,
    },
    {
      path: "/tags",
      name: "tags",
      component: Tags,
    },
    {
      path: "/users",
      name: "users",
      component: Users,
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
    },
    {
      path: "/adminusers",
      name: "adminusers",
      component: Adminusers,
    },
    {
      path: "/login",
      name: "login",
      component: Userlogin,
    },
  ],
});
