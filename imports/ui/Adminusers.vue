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
                href="http://localhost:3000/admin"
                class="flex items-center p-2 rounded-lg dark:text-white group focus:dark:bg-gray-700 active:dark:bg-gray-700"
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
                class="flex items-center p-2 rounded-lg bg-purple-600 text-white dark:text-white group focus:dark:bg-gray-700 active:dark:bg-gray-700p"
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
                class="lucide lucide-user-circle-2"
              >
                <path d="M18 20a6 6 0 0 0-12 0" />
                <circle cx="12" cy="10" r="4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span class="ml-1">Users</span>
            </a>
          </li>
        </ol>
      </nav>
    </div>
  </div>

  <!-- Add User Toast Message -->
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
      <div class="ml-2 text-sm font-normal">User saved successfully.</div>
    </div>
  </div>

  <!-- Edit User Toast Message -->
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
      <div class="ml-2 text-sm font-normal">User updated successfully</div>
    </div>
  </div>

  <!-- Delete User Toast Message -->
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
          <div class="ml-2 text-sm font-normal">User deleted successfully</div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-6">
    <div class="col-start-6 justify-self-end">
      <div>
        <!-- Modal toggle button -->
        <button
          data-modal-toggle="authentication-modal"
          class="px-5 py-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          type="button"
          @click="AdminUserToggleModal"
        >
          Add Users
        </button>

        <!-- Overlay -->
        <div
          v-if="AdminUserAddModal"
          class="fixed inset-0 z-40 bg-gray-900 opacity-40 flex items-center justify-center"
        ></div>

        <!-- Main modal -->
        <div
          id="authentication-modal"
          :class="{ hidden: !AdminUserAddModal }"
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
                @click="addcloseModal()"
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
                  Add New User
                </h3>
                <form class="space-y-6" @submit.prevent="saveUsers">
                  <div>
                    <label
                      for="orgname"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Organization Name</label
                    >
                    <select
                      name="orgname"
                      id="orgname"
                      v-model="userdata.selectedOrganization"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    >
                      <option
                        v-for="org in showOrganizations"
                        v-bind:value="org"
                        v-bind:key="org._id"
                      >
                        {{ org.organizationName }}
                      </option>
                    </select>
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
                      v-model="userdata.email"
                      placeholder="spanish786@gmail.com"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      for="phonenumber"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Password</label
                    >
                    <div class="relative flex">
                      <input
                        :type="passwordVisible ? 'text' : 'password'"
                        v-model="userdata.password"
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
                          <path
                            d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                          />
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
                      id="permission"
                      v-model="userdata.permission"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    >
                      <option value="Admin">Admin</option>
                      <option value="Coordinator">Coordinator</option>
                    </select>
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

  <!-- Organizations -->
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
              <th scope="col" class="px-6 py-3">Organization Name</th>
              <th scope="col" class="px-6 py-3">Primary Email</th>
              <th scope="col" class="px-6 py-3">Permission</th>
              <th scope="col" class="px-6 py-3">Type</th>
              <th scope="col" class="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              v-for="user in showUsers"
              v-bind:key="user._id"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ user.profile.organizationName }}
              </th>
              <td class="px-6 py-4">{{ user.emails[0].address }}</td>
              <td class="px-6 py-4">{{ user.profile.permission }}</td>
              <td class="px-6 py-4">User</td>
              <td class="px-6 py-4">
                <button
                  data-modal-toggle="authentication-modal"
                  class="px-5 py-2 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                  type="button"
                  @click="openEditUserModal(user)"
                >
                  Edit
                </button>

                <!-- Overlay -->
                <div
                  v-if="UserEditModal"
                  class="fixed inset-0 z-40 bg-gray-900 opacity-10 flex items-center justify-center"
                ></div>

                <!-- Main modal -->
                <div
                  id="edit-authentication-modal"
                  :class="{ hidden: !UserEditModal }"
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
                          Edit User
                        </h3>
                        <form class="space-y-6" @submit.prevent="updateUsers">
                          <div>
                            <label
                              for="permission"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >Permission</label
                            >
                            <select
                              type="text"
                              name="permission"
                              v-model="userdata.permission"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              id="permission"
                            >
                              <option value="Admin">Admin</option>
                              <option value="Coordinator">Coordinator</option>
                            </select>
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
                  @click="deleteUser(user._id)"
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
import { Organizations } from "../api/Orgcollections";

export default {
  data() {
    return {
      userdata: {
        selectedOrganization: "",
        email: "",
        password: "",
        permission: "",
      },
      UserEditModal: false,
      passwordVisible: false,
    };
  },

  setup() {
    const AdminUserAddModal = ref(false);

    function AdminUserToggleModal() {
      AdminUserAddModal.value = !AdminUserAddModal.value;
    }

    return {
      AdminUserAddModal,
      AdminUserToggleModal,
    };
  },

  created() {
    this.getUser();
  },

  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },

    getUser() {
      const currentUser = Meteor.user();
      if (currentUser) {
        this.currentUser = {
          org: currentUser.profile.organizationName,
          permission: currentUser.profile.permission,
          id: currentUser._id,
          orgId: currentUser.profile.organizationId,
        };
      }
    },

    closeModal() {
      this.UserEditModal = false;
      this.userdata.permission = "";
    },

    addcloseModal() {
      this.AdminUserAddModal = false;
      this.userdata.selectedOrganization = "";
      this.userdata.email = "";
      this.userdata.password = "";
      this.userdata.permission = "";
    },

    saveUsers() {
      const option = {
        email: this.userdata.email,
        password: this.userdata.password,
        profile: {
          organizationName: this.userdata.selectedOrganization.organizationName,
          organizationId: this.userdata.selectedOrganization._id,
          permission: this.userdata.permission,
        },
      };
      Meteor.call("insertUser", option, (error, result) => {
        if (error) {
          console.error("Error saving User", error.reason);
        } else {
          console.log("User saved", result);
          const toast = document.getElementById("toast-success");
          toast.style.display = "block";

          // Hide the toast after 1.5 seconds
          setTimeout(() => {
            toast.style.display = "none";
          }, 1500);
          //the four lines below clears the forms fields after saving
          this.userdata.selectedOrganization = "";
          this.userdata.email = "";
          this.userdata.password = "";
          this.userdata.permission = "";
          this.AdminUserToggleModal(); //Closes the Add Contact Modal
        }
      });
    },

    deleteUser(userId) {
      Meteor.call("deleteUser", userId, (error) => {
        if (error) {
          console.error("Error deleting user:", error.reason);
        } else {
          console.log("User deleted successfully.");
          const toast = document.getElementById("toast-delete");
          toast.style.display = "block";

          // Hides the toast after 2 seconds
          setTimeout(() => {
            toast.style.display = "none";
          }, 1500);
        }
      });
    },

    openEditUserModal(users) {
      console.log("Edit Button Clicked", users);
      this.UserEditModal = true;
      this.userdata.permission = users.profile.permission;
    },

    updateUsers() {
      const updatedUserData = {
        // userId: this.userdata._id,
        //_id: this.userdata._id,
        // selectedOrganization: this.userdata.selectedOrganization,
        // email: this.userdata.email,
        // password: this.userdata.password,
        "profile.permission": this.userdata.permission,
      };

      Meteor.call(
        "updateUser",
        { userId: this.userdata._id, updates: updatedUserData },
        (error, result) => {
          if (error) {
            console.error("Error updating user:", error.reason);
          } else {
            console.log("User updated successfully.");
            const toast = document.getElementById("toast-edit");
            toast.style.display = "block";
            // Hides the toast after 2 seconds
            setTimeout(() => {
              toast.style.display = "none";
            }, 1500);
            this.UserEditModal = false; // Closes the Edit Usesr Modal
          }
        }
      );
    },
  },

  meteor: {
    $subscribe: {
      orgPublication: [],
      users: [],
    },
    showOrganizations() {
      const userId = Meteor.userId();
      return Organizations.find({}).fetch();
    },

    showUsers() {
      return Meteor.users.find({}, { sort: { createdAt: -1 } });
    },
  },
};
</script>