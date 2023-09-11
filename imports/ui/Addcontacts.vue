<template>
  <!-- Sidebar -->
  <div class="grid grid-cols-6 mb-6 mt-6">
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
                href="http://localhost:3000/dashboard"
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
                class="lucide lucide-contact-2"
              >
                <path d="M16 18a4 4 0 0 0-8 0" />
                <circle cx="12" cy="11" r="3" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <line x1="8" x2="8" y1="2" y2="4" />
                <line x1="16" x2="16" y1="2" y2="4" />
              </svg>
              <span class="ml-1">Contacts</span>
            </a>
          </li>
        </ol>
      </nav>
    </div>

    <!-- Organization Name -->
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
        Organization Name
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

  <!-- Add Contact Button with modal -->

  <div class="grid grid-cols-6">
    <div class="col-start-6 justify-self-end">
      <div>
        <!-- Modal toggle button -->
        <button
          data-modal-toggle="authentication-modal"
          class="px-5 py-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          type="button"
          @click="ContactToggleModal"
        >
          Add Contact
        </button>

        <!-- Overlay -->
        <div
          v-if="ContactAddModal"
          class="fixed inset-0 z-40 bg-gray-900 opacity-50 flex items-center justify-center"
        ></div>

        <!-- Main modal -->
        <div
          id="authentication-modal"
          :class="{ hidden: !ContactAddModal }"
          tabindex="-1"
          aria-hidden="true"
          class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center"
        >
          <!-- Modal content -->
          <div class="relative w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                @click="ContactToggleModal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
              <div class="px-6 py-6 lg:px-8">
                <h3
                  class="mb-8 text-xl font-medium text-gray-900 dark:text-white"
                >
                  Add New Contact
                </h3>
                <form class="space-y-6" @submit.prevent="savecontacts">
                  <div>
                    <label
                      for="flname"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Full Name</label
                    >
                    <input
                      type="text"
                      name="flname"
                      id="flname"
                      v-model="contact.fullName"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Primary Email</label
                    >
                    <input
                      type="email"
                      name="email"
                      id="email"
                      v-model="contact.email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      for="phonenumber"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Phone Number</label
                    >
                    <input
                      type="text"
                      name="phonenumber"
                      id="phonenumber"
                      v-model="contact.phoneNumber"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      for="tags"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Tags</label
                    >
                    <input
                      type="text"
                      name="tags"
                      id="tags"
                      v-model="contact.tags"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    class="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact -->
  <div class="grid grid-cols-6 mt-5">
    <div class="col-start-2 col-span-5">
      <div class="relative overflow-x-auto">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Full Name</th>
              <th scope="col" class="px-6 py-3">Primary Email</th>
              <th scope="col" class="px-6 py-3">Phone Number</th>
              <th scope="col" class="px-6 py-3">Tags</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              v-for="contactdetail in showContacts"
              v-bind:key="contactdetail._id"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ contactdetail.fullName }}
              </th>
              <td class="px-6 py-4">{{ contactdetail.email }}</td>
              <td class="px-6 py-4">{{ contactdetail.phoneNumber }}</td>
              <td class="px-6 py-4">{{ contactdetail.tags }}</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="px-5 py-2 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="ml-1 px-5 py-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Meteor } from "meteor/meteor";
import { Contacts } from "../api/Contactcollection";

export default {
  name: "addcontacts",
  data() {
    return {
      contact: {
        fullName: "",
        email: "",
        phoneNumber: "",
        tags: "",
      },
    };
  },

  setup() {
    const ContactAddModal = ref(false);

    function ContactToggleModal() {
      ContactAddModal.value = !ContactAddModal.value;
    }

    return {
      ContactAddModal,
      ContactToggleModal,
    };
  },

  methods: {
    openDropdown() {
      // Use $refs to access the dropdown element and show it
      this.$refs.dropdown.classList.remove("hidden");
    },
    closeDropdown() {
      // Use $refs to access the dropdown element and hide it
      this.$refs.dropdown.classList.add("hidden");
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

    savecontacts() {
      Meteor.call("contacts.insert", this.contact, (error, result) => {
        if (error) {
          console.error("Error saving contact:", error.reason);
        } else {
          console.log("Contact saved with ID:", result);
          this.ContactToggleModal(); //Closes the Add Contact Modal
        }
      });
    },

    // getUser() {
    //   const currentUser = Meteor.user();
    //   if (currentUser) {
    //     this.currentUser = {
    //       org: currentUser.profile.organizationName,
    //       id: currentUser._id,
    //       // orgId: currentUser.profile.organizationId
    //     };
    //   }
    // },
  },

  // created() {
  //       this.getUser();
  //   },

  meteor: {
    $subscribe: {
      contactsPublication: [],
      //users: [],
    },
    showContacts() { 
      const userId = Meteor.userId();
      //const userDetails = Meteor.user();
       //const organization = Meteor.user().profile.organization;
       const organizationid = Meteor.user()._id
      if (userId) {
      return Contacts.find({organizationID:organizationid}).fetch();
     }
    },

  },
};
</script>