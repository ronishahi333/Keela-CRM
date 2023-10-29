<template>
  <div
    id="toast-success"
    class="absolute top-0 right-0 mt-4 mr-4 z-50 flex items-center w-80 p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
    role="alert"
    style="max-width: 500px; display: none"
  >
    <div class="flex items-center">
      <div
        class="inline-flex items-center justify-center flex-shrink-0 ml-5 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
          />
        </svg>
        <span class="sr-only">Check icon</span>
      </div>
      <div class="ml-2 text-sm font-normal">User registered successfully.</div>
    </div>
  </div>

  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          class="w-15 h-8 mr-2"
          src="https://www.keela.co/wp-content/uploads/keela-logo-2.png"
          alt="logo"
        />
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Register your CRM account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="registerUser">
            <div>
              <label
                for="orgname"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Organization Name</label
              >
              <select
                name="orgname"
                id="orgname"
                v-model="selectedOrganization"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              >
                <option
                  v-for="organization in showOrganizations"
                  v-bind:value="organization"
                  v-bind:key="organization._id"
                >
                  {{ organization.organizationName }}
                </option>
              </select>
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
                v-model="email"
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <div class="relative flex">
                <input
                  :type="passwordVisible ? 'text' : 'password'"
                  v-model="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
                <button
                  type="button"
                  class="absolute inset-y-0 right-0 px-2.5 py-2.5 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-white"
                  @click="togglePasswordVisibility()"
                >
                  <svg
                    v-if="passwordVisible"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-eye"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-eye-off"
                  >
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                    <path
                      d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                    />
                    <path
                      d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                    />
                    <line x1="2" x2="22" y1="2" y2="22" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <label
                for="permission"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Permission</label
              >
              <select
                type="text"
                name="permission"
                v-model="permission"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                id="permission"
              >
                <option value="Admin">Admin</option>
                <option value="Coordinator">Coordinator</option>
              </select>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Register
            </button>
            <p class="text-sm font-light text-gray-700 dark:text-gray-400">
              Already have an account?
              <a
                href="http://localhost:3000/"
                class="font-medium text-blue-600 hover:underline dark:text-primary-500"
                >Click me</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { Organizations } from "../api/Orgcollections";
export default {
  data() {
    return {
      selectedOrganization: "",
      email: "",
      password: "",
      permission: "",
      passwordVisible: false,
    };
  },

  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },

    async registerUser(event) {
      event.preventDefault();
      const userData = {
        email: this.email,
        password: this.password,
        profile: {
          organizationName: this.selectedOrganization.organizationName,
          organizationId: this.selectedOrganization._id,
          permission: this.permission,
        },
      };

      try {
        // Call the 'user.register' method defined on the server
        const userId = await new Promise((resolve, reject) => {
          Meteor.call("user.register", userData, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
        });

        // Registration successful
        console.log(`User registered with ID: ${userId}`);
        const toast = document.getElementById("toast-success");
        toast.style.display = "block";

        // Hide the toast after 2 seconds
        setTimeout(() => {
          toast.style.display = "none";
          this.$router.push({ name: "login" });
        }, 1000);
        //the four lines below clears the forms fields after saving
        this.selectedOrganization = "";
        this.email = "";
        this.password = "";
        this.permission = "";
      } catch (error) {
        console.error(error);
        // Handle errors
      }
    },
  },
  meteor: {
    $subscribe: {
      orgPublication: [],
      users: [],
    },
    showOrganizations() {
      return Organizations.find({}).fetch();
    },
  },
};
</script>
  