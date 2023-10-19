import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home.vue";
import Addcontacts from "./Addcontacts.vue";
import Tags from "./Tags.vue";
import Users from "./Users.vue";
import Dashboard from "./Dashboard.vue";
import Admin from "./Admin.vue";
import Adminusers from "./Adminusers.vue";
import Userlogin from "./Userslogin.vue";
import Test from "./Test.vue";
import Userregister from "./Usersregister.vue"
import Adminlogin from "./Adminlogin.vue"

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
      path: "/dashboard/",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/addcontacts",
      name: "addcontacts",
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
    {
      path: "/register",
      name: "register",
      component: Userregister,
    },
    {
      path: "/adminlogin",
      name: "adminlogin",
      component: Adminlogin,
    },
    {
      path: "/test",
      name: "test",
      component: Test,
    },
  ],
});
