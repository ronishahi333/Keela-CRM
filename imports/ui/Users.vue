<template>
  <div class="loading" v-if="!$subReady.users">Loading...</div>
  {{ getUser() }}
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
                href="http://localhost:3000/addcontacts"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group focus:outline-none focus:bg-gray-100 focus:dark:bg-gray-700 active:bg-gray-100 active:dark:bg-gray-700"
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
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group focus:outline-none focus:bg-gray-100 focus:dark:bg-gray-700 active:bg-gray-100 active:dark:bg-gray-700"
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
                class="lucide lucide-users"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span class="ml-1">Users</span>
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
        {{ currentUser?.org }}
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

  <!-- Add Users Button with modal -->
  <div class="grid grid-cols-6">
    <div class="col-start-6 justify-self-end">
      <div>
        <!-- Modal toggle button -->
        <button
          data-modal-toggle="authentication-modal"
          class="px-5 py-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          type="button"
          @click="UserToggleModal"
        >
          Add Users
        </button>

        <!-- Overlay -->
        <div
          v-if="UserAddModal"
          class="fixed inset-0 z-40 bg-gray-900 opacity-40 flex items-center justify-center"
        ></div>

        <!-- Main modal -->
        <div
          id="authentication-modal"
          :class="{ hidden: !UserAddModal }"
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
                      selected
                    >
                      <option
                        v-if="currentUser && currentUser.org"
                        :value="currentUser.org"
                      >
                        {{ currentUser.org }}
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

  <!-- Users -->
  <div class="grid grid-cols-6 mt-2">
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
                        <form class="space-y-6" @submit.prevent="updateUser">
                          <div>
                            <label
                              for="permission"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >Permission</label
                            >
                            <select
                              type="text"
                              name="permission"
                              id="epermission"
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
                <button
                  data-modal-toggle="authentication-modal"
                  class="ml-1 px-5 py-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                  type="button"
                  @click="deleteUser(user._id)"
                  v-if="currentUser && currentUser.id !== user._id"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr v-if="(!showUsers || showUsers.length === 0) && !isLoading">
              <td colspan="4" style="text-align: center">
                <div class="flex flex-col items-center justify-center h-100">
                  <img
                    src="/Nousers.png"
                    alt="No tags found"
                    :style="{ height: '400px', width: '400px' }"
                  />
                  <p
                    class="block mb-2 font-medium text-2xl text-gray-900 centered-text"
                  >
                    No Users Found
                  </p>
                </div>
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
  name: "users",
  data() {
    return {
      isLoading: true,
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
    const UserAddModal = ref(false);

    function UserToggleModal() {
      UserAddModal.value = !UserAddModal.value;
    }

    return {
      UserAddModal,
      UserToggleModal,
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
        this.currentUser = currentUser?.profile
          ? {
              org: currentUser.profile?.organizationName,
              permission: currentUser.profile?.permission,
              id: currentUser._id,
              orgId: currentUser.profile?.organizationId,
            }
          : null;
      }
    },

    closeModal() {
      this.UserEditModal = false;
      this.userdata.permission = "";
    },

    addcloseModal() {
      this.UserAddModal = false;
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
          organizationName: Meteor.user().profile.organizationName,
          organizationId: Meteor.user().profile.organizationId,
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

          // Hide the toast after 2 seconds
          setTimeout(() => {
            toast.style.display = "none";
          }, 1500);
          //the four lines below clears the forms fields after saving
          this.userdata.selectedOrganization = "";
          this.userdata.email = "";
          this.userdata.password = "";
          this.userdata.permission = "";
          this.UserToggleModal(); //Closes the Add Contact Modal
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

          // Hides the toast after 1.5 seconds
          setTimeout(() => {
            toast.style.display = "none";
          }, 1500);
        }
      });
    },

    openEditUserModal(users) {
      console.log("Edit Button Clicked", users);
      this.UserEditModal = true;
      this.userdata = { ...users };
      this.userdata.permission = users.profile.permission;
    },

    updateUser() {
      const updatedUserData = {
        _id: this.userdata._id,
        "profile.permission": this.userdata.permission,
      };

      Meteor.call("updateUser", updatedUserData, (error, result) => {
        if (error) {
          console.error("Error updating user:", error.reason);
        } else {
          console.log("User updated successfully.");
          const toast = document.getElementById("toast-edit");
          toast.style.display = "block";
          // Hides the toast after 1.5 seconds
          setTimeout(() => {
            toast.style.display = "none";
          }, 1500);
          this.UserEditModal = false; // Closes the Edit Users Modal
        }
      });
    },

    openDropdown() {
      this.$refs.dropdown.classList.remove("hidden");
    },
    closeDropdown() {
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
  },

  meteor: {
    $subscribe: {
      orgPublication: [],
      users: [],
    },
    showUsers() {
      const userId = Meteor.userId();
      const userDetails = Meteor.user();
      const organizationId = userDetails?.profile?.organizationId;
      console.log(organizationId);
      if (userId && organizationId) {
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
        return Meteor.users
          .find({ "profile.organizationId": organizationId })
          .fetch();
      } else {
        console.log("Check format");
      }
    },

    showOrganizations() {
      const userId = Meteor.userId();
      return Organizations.find({}).fetch();
    },
  },
};
</script>