<template>
  <div class="loading" v-if="!$subReady.users">Loading...</div>
  {{ getUser() }}
  <!-- Sidebar -->
  <div class="grid grid-cols-6 mb-8 mt-6">
    <div class="col-span-1">
      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div
          class="h-full px-3 py-6 overflow-y-auto bg-gray-100 dark:bg-gray-800"
        >
          <a class="flex items-center pl-2.5 mb-5">
            <img
              src="https://www.keela.co/wp-content/uploads/keela-logo-2.png"
              class="h-6 mr-3 sm:h-7"
              alt="Keela Logo"
            />
          </a>
          <ul class="space-y-2 font-medium">
            <li>
              <a
                class="flex items-center p-2 rounded-lg bg-purple-600 text-white dark:text-white group focus:dark:bg-gray-700 active:dark:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-layout-dashboard"
                >
                  <rect width="7" height="9" x="3" y="3" rx="1" />
                  <rect width="7" height="5" x="14" y="3" rx="1" />
                  <rect width="7" height="9" x="14" y="12" rx="1" />
                  <rect width="7" height="5" x="3" y="16" rx="1" />
                </svg>
                <span class="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="http://localhost:3000/addcontacts"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group focus:dark:bg-gray-700 active:dark:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-contact-2"
                >
                  <path d="M16 18a4 4 0 0 0-8 0" />
                  <circle cx="12" cy="11" r="3" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <line x1="8" x2="8" y1="2" y2="4" />
                  <line x1="16" x2="16" y1="2" y2="4" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Contacts</span>
              </a>
            </li>
            <li>
              <a
                href="http://localhost:3000/tags"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-tags"
                >
                  <path
                    d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"
                  />
                  <path d="M6 9.01V9" />
                  <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Tags</span>
              </a>
            </li>
            <li>
              <a
                href="http://localhost:3000/users"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-users"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>

    <!-- Breadcrumb -->

    <div class="col-span-4">
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a
              class="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-layout-dashboard"
              >
                <rect width="7" height="9" x="3" y="3" rx="1" />
                <rect width="7" height="5" x="14" y="3" rx="1" />
                <rect width="7" height="9" x="14" y="12" rx="1" />
                <rect width="7" height="5" x="3" y="16" rx="1" />
              </svg>
              <span class="ml-1">Dashboard</span>
            </a>
          </li>
        </ol>
      </nav>
    </div>

    <!-- Organization Name with Logout-->
    <div
      class="col-span-1 justify-self-end relative text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
    >
      <button
        id="dropdownHoverButton"
        @mouseover="openDropdown"
        @mouseout="closeDropdown"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        class="font-medium rounded-lg text-sm pl-8 text-center inline-flex items-center"
        type="button"
      >
        {{ currentUser.org }}
        <svg
          class="w-2.5 h-2.5 ml-2.5 mt-0.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div
        id="dropdownHover"
        ref="dropdown"
        @mouseover="openDropdown"
        @mouseout="closeDropdown"
        class="z-20 absolute right-0 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-38 dark:bg-gray-700"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHoverButton"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              v-on:click="logout()"
              >Log out</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!--Dashboard Message-->
  <div class="grid grid-cols-6 mb-3">
    <h1
      class="col-start-2 col-span-4 text-4xl font-medium text-gray-700 dark:text-gray-400 dark:hover:text-white"
    >
      Welcome, {{ formatEmail(currentUser.email) }}
    </h1>
  </div>  
  <div class="grid grid-cols-6">
    <h2
      class="col-start-2 col-span-4 text-2xl font-small text-gray-700 dark:text-gray-400 dark:hover:text-white"
    >
      One donation can change other's life.
    </h2>
  </div>

  <!--Jumbotron-->

  <div class="grid grid-cols-6 mt-8">
    <section class="bg-white dark:bg-gray-900 col-span-6 col-start-2 mt-8">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          For it is in giving that we receive
        </h1>
        <p
          class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"
        >
          We can change the world and make it a better place. That's why the
          best way to find yourself is to lose yourself in the service of
          others.
        </p>
        <div
          class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
        >
          <a
            href="http://localhost:3000/addcontacts"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "dashboard",

  data() {
    return {
      user: "",
    };
  },

  created() {
    this.getUser();
  },

  methods: {
    formatEmail(email) {
      const emailWithoutDigits = email.replace(/\d/g, '');

      // Split the email without digits by "@" and get the part before the "@"
      const parts = emailWithoutDigits.split('@');
      const firstPart = parts.length > 0 ? parts[0] : '';

      // Capitalize the first letter
      return firstPart.charAt(0).toUpperCase() + firstPart.slice(1); // Get the part before the "@" symbol
    },

    openDropdown() {
      // Use $refs to access the dropdown element and show it
      this.$refs.dropdown.classList.remove("hidden");
    },
    closeDropdown() {
      // Use $refs to access the dropdown element and hide it
      this.$refs.dropdown.classList.add("hidden");
    },

    getUser() {
      const currentUser = Meteor.user();
      if (currentUser) {
        this.currentUser = currentUser?.profile
          ? {
              org: currentUser.profile?.organizationName,
              orgId: currentUser.profile?.organizationId,
              email: currentUser.emails[0].address,
            }
          : null;
      }
    },

    logout() {
      Meteor.logout((error) => {
        if (error) {
          console.error("Logout Error:", error);
        } else {
          console.log("Logout Sucessful");
          this.$router.push({ name: "login" });
        }
      });
    },
  },

  meteor: {
    $subscribe: {
      users: [],
    },
  },
};
</script>
