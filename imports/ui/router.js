import { createRouter, createWebHistory } from "vue-router";
//import Home from "./Home.vue";
import Addcontacts from "./Addcontacts.vue";
import Tags from "./Tags.vue";
import Users from "./Users.vue";
import Dashboard from "./Dashboard.vue";
import Admin from "./Admin.vue";
import Adminusers from "./Adminusers.vue";
import Userlogin from "./Userslogin.vue";
import Userregister from "./Usersregister.vue";
import Pagenotfound from "./Pagenotfound.vue"

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: Userlogin,
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
      meta: { requiresAuth: true },
    },
    {
      path: "/addcontacts",
      name: "addcontacts",
      component: Addcontacts,
      meta: { requiresAuth: true },
    },
    {
      path: "/tags",
      name: "tags",
      component: Tags,
      meta: { requiresAuth: true },
    },
    {
      path: "/users",
      name: "users",
      component: Users,
      meta: { requiresAuth: true },
    },
    {
      path: "/register",
      name: "register",
      component: Userregister,
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
      path: "/:pathMatch(.*)*",
      name: "pagenotfound",
      component: Pagenotfound,
    },

  ],
});

router.beforeEach((to, from, next) => {
  const userId = Meteor.userId();
  if (to.path === "/" && userId) {
    next("/dashboard");
  } else if (to.path === "/dashboard" && !userId) {
    next("/");
  } else if (to.path === "/addcontacts" && !userId) {
    next("/");
  } else if (to.path === "/tags" && !userId) {
    next("/");
  } else if (to.path === "/users" && !userId) {
    next("/");
  } else {
    next();
  }
});