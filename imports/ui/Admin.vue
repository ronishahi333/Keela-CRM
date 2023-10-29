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
                  class="lucide lucide-building"
                >
                  <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                  <path d="M9 22v-4h6v4" />
                  <path d="M8 6h.01" />
                  <path d="M16 6h.01" />
                  <path d="M12 6h.01" />
                  <path d="M12 10h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 10h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 10h.01" />
                  <path d="M8 14h.01" />
                </svg>
                <span class="ml-3">Organizations</span>
              </a>
            </li>
            <li>
              <a
                href="http://localhost:3000/adminusers"
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
                  class="lucide lucide-user-circle-2"
                >
                  <path d="M18 20a6 6 0 0 0-12 0" />
                  <circle cx="12" cy="10" r="4" />
                  <circle cx="12" cy="12" r="10" />
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
                class="lucide lucide-building"
              >
                <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                <path d="M9 22v-4h6v4" />
                <path d="M8 6h.01" />
                <path d="M16 6h.01" />
                <path d="M12 6h.01" />
                <path d="M12 10h.01" />
                <path d="M12 14h.01" />
                <path d="M16 10h.01" />
                <path d="M16 14h.01" />
                <path d="M8 10h.01" />
                <path d="M8 14h.01" />
              </svg>
              <span class="ml-1">Organizations</span>
            </a>
          </li>
        </ol>
      </nav>
    </div>
  </div>

  <!-- Add ORg Toast Message -->
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
      <div class="ml-2 text-sm font-normal">
        Organization saved successfully.
      </div>
    </div>
  </div>

  <!-- Edit Contact Toast Message -->
  <div
    id="toast-edit"
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
      <div class="ml-2 text-sm font-normal">
        Organization updated successfully
      </div>
    </div>
  </div>

  <!-- Delete Tag Toast Message -->
  <div class="grid grid-cols-6">
    <div class="col-start-6 justify-self-end">
      <div
        id="toast-delete"
        class="absolute top-0 right-0 mt-4 mr-4 z-50 flex items-center w-80 p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert"
        style="max-width: 500px; display: none"
      >
        <div class="flex items-center">
          <div
            class="inline-flex items-center justify-center flex-shrink-0 ml-5 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"
              />
            </svg>
            <span class="sr-only">Error icon</span>
          </div>
          <div class="ml-2 text-sm font-normal">
            Organization deleted successfully
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Add Organizations Button with Modal-->

  <div class="grid grid-cols-6">
    <div class="col-start-6 justify-self-end">
      <div>
        <!-- Modal toggle button -->
        <button
          data-modal-toggle="authentication-modal"
          class="px-5 py-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          type="button"
          @click="toggleModal"
        >
          Add Organization
        </button>

        <!-- Overlay -->
        <div
          v-if="isModalOpen"
          class="fixed inset-0 z-40 bg-gray-900 opacity-40 flex items-center justify-center"
        ></div>

        <!-- Main modal -->
        <div
          id="authentication-modal"
          :class="{ hidden: !isModalOpen }"
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
                @click="addorgcloseModal()"
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
                  Register your Organization
                </h3>
                <form class="space-y-6" @submit.prevent="saveorgs">
                  <div>
                    <label
                      for="orgname"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Organization Name</label
                    >
                    <input
                      type="text"
                      name="orgname"
                      id="orgname"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      v-model="organization.organizationName"
                      required
                      placeholder="Social Donation"
                    />
                  </div>
                  <div>
                    <label
                      for="orgaddress"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Organization Address</label
                    >
                    <input
                      type="text"
                      name="orgaddress"
                      id="ordaddress"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      v-model="organization.organizationaddress"
                      required
                      placeholder="United Kingdom"
                    />
                  </div>
                  <div>
                    <label
                      for="orgnumber"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Organization Number</label
                    >
                    <input
                      type="number"
                      name="orgnumber"
                      id="orgnumber"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      v-model="organization.organizationnumber"
                      placeholder="984986416516"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    class="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Action buttons Organization -->
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
              <th scope="col" class="px-6 py-3">Organizations Name</th>
              <th scope="col" class="px-6 py-3">Organizations Address</th>
              <th scope="col" class="px-6 py-3">Organization Number</th>
              <th scope="col" class="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              v-for="org in showOrganizations"
              v-bind:key="org._id"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ org.organizationName }}
              </th>
              <td class="px-6 py-4">{{ org.organizationaddress }}</td>
              <td class="px-6 py-4">{{ org.organizationnumber }}</td>
              <!-- <td class="px-6 py-4"></td> -->
              <td class="px-6 py-4">
                <button
                  data-modal-toggle="authentication-modal"
                  class="px-5 py-2 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                  type="button"
                  @click="openEditOrganizationModal(org)"
                >
                  Edit
                </button>

                <!-- Overlay -->
                <div
                  v-if="OrganizationEditModal"
                  class="fixed inset-0 z-40 bg-gray-900 opacity-10 flex items-center justify-center"
                ></div>

                <!-- Main modal -->
                <div
                  id="edit-authentication-modal"
                  :class="{ hidden: !OrganizationEditModal }"
                  tabindex="-1"
                  aria-hidden="true"
                  class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center"
                >
                  <!-- Modal content -->
                  <div class="relative w-full max-w-md max-h-full">
                    <!-- Modal content -->
                    <div
                      class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                    >
                      <button
                        type="button"
                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        @click="closeModal()"
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
                          Edit Organization
                        </h3>
                        <form
                          class="space-y-6"
                          @submit.prevent="updateOrganization"
                        >
                          <div>
                            <label
                              for="eorgname"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >Organization Name</label
                            >
                            <input
                              type="text"
                              name="eorgname"
                              id="eorgname"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              v-model="organization.organizationName"
                              required
                              placeholder="Social Donation"
                            />
                          </div>
                          <div>
                            <label
                              for="eorgaddress"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >Organization Address</label
                            >
                            <input
                              type="text"
                              name="eorgaddress"
                              id="eordaddress"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              v-model="organization.organizationaddress"
                              required
                              placeholder="United Kingdom"
                            />
                          </div>
                          <div>
                            <label
                              for="eorgnumber"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >Organization Number</label
                            >
                            <input
                              type="number"
                              name="eorgnumber"
                              id="eorgnumber"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              v-model="organization.organizationnumber"
                              placeholder="984986416516"
                              required
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

                <button
                  data-modal-toggle="authentication-modal"
                  class="ml-1 px-5 py-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                  type="button"
                  @click="deleteOrg(org._id)"
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
import { Organizations } from "../api/Orgcollections";

export default {
  data() {
    return {
      organization: {
        organizationName: "",
        organizationaddress: "",
        organizationnumber: "",
      },
      OrganizationEditModal: false,
    };
  },
  setup() {
    const isModalOpen = ref(false);

    function toggleModal() {
      isModalOpen.value = !isModalOpen.value;
    }

    return {
      isModalOpen,
      toggleModal,
    };
  },
  // Inside your Vue component
  methods: {
    closeModal() {
      this.OrganizationEditModal = false;
      this.organization.organizationName = "";
      this.organization.organizationaddress = "";
      this.organization.organizationnumber = "";
    },

    addorgcloseModal() {
      this.isModalOpen = false;
      this.organization.organizationName = "";
      this.organization.organizationaddress = "";
      this.organization.organizationnumber = "";
    },

    saveorgs() {
      Meteor.call("insertOrg", this.organization, (error, result) => {
        if (error) {
          console.error("Error saving organization:", error.reason);
        } else {
          console.log("Organization saved with ID:", result);
          const toast = document.getElementById("toast-success");
          toast.style.display = "block";

          // Hide the toast after 2 seconds
          setTimeout(() => {
            toast.style.display = "none";
          }, 1500);
          //the three lines below clears the forms fields after saving
          this.organization.organizationName = "";
          this.organization.organizationaddress = "";
          this.organization.organizationnumber = "";
          this.toggleModal(); //Closes the Add Organization Modal
        }
      });
    },
    deleteOrg(orgId) {
      // Call the 'contacts.remove' method on the server
      Meteor.call("deleteOrg", orgId, (error) => {
        if (error) {
          console.error("Error deleting Organization:", error.reason);
        } else {
          console.log("Organization deleted successfully.");
          const toast = document.getElementById("toast-delete");
          toast.style.display = "block";

          // Hides the toast after 2 seconds
          setTimeout(() => {
            toast.style.display = "none";
          }, 1500);
        }
      });
    },

    openEditOrganizationModal(org) {
      console.log("Edit Button Clicked", org);
      this.OrganizationEditModal = true;
      this.organization = { ...org };
    },

    updateOrganization() {
      const updatedOrgData = {
        _id: this.organization._id,
        organizationName: this.organization.organizationName,
        organizationaddress: this.organization.organizationaddress,
        organizationnumber: this.organization.organizationnumber,
      };

      Meteor.call("editOrg", updatedOrgData, (error, result) => {
        if (error) {
          console.error("Error updating organization:", error.reason);
        } else {
          console.log("Organization updated successfully.");
          const toast = document.getElementById("toast-edit");
          toast.style.display = "block";
          // Hides the toast after 2 seconds
          setTimeout(() => {
            toast.style.display = "none";
          }, 1500);
          // Clear the form fields after updating
          this.organization.organizationName = "";
          this.organization.organizationaddress = "";
          this.organization.organizationnumber = "";
          this.OrganizationEditModal = false; // Closes the Edit Contact Modal
        }
      });
    },
  },

  meteor: {
    $subscribe: {
      orgPublication: [],
      users: [],
    },
    showOrganizations() {
      // const userId = Meteor.userId();
      // if (userId) {
      return Organizations.find({}).fetch();
      // }
      //return Organizations.find({}).fetch();
    },
  },
};
</script>