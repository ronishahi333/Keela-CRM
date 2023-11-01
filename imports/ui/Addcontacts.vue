<template>
  <div class="loading" v-if="!$subReady.contactsPublication">Loading...</div>
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

  <!-- Added contact Toast Message -->
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
      <div class="ml-2 text-sm font-normal">Contact saved successfully</div>
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
      <div class="ml-2 text-sm font-normal">Contact updated successfully</div>
    </div>
  </div>

  <!-- Delete Contact Toast Message -->
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
            Contact deleted successfully
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Add Contact Button with modal -->

  <div class="grid grid-cols-6">
    <div class="col-start-6 justify-self-end">
      <div>
        <!-- Modal toggle button -->
        <button
          data-modal-toggle="add-authentication-modal"
          class="px-5 py-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          type="button"
          v-if="checkPermission()"
          @click="ContactToggleModal"
        >
          Add Contact
        </button>

        <!-- Overlay -->
        <div
          v-if="ContactAddModal"
          class="fixed inset-0 z-40 bg-gray-900 opacity-40 flex items-center justify-center"
        ></div>

        <!-- Main modal -->
        <div
          id="add-authentication-modal"
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
                      placeholder="Marry Queen"
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
                      placeholder="queen783@gmail.com"
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
                      placeholder="44653135465"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      for="contact-tags"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Tags</label
                    >
                    <select
                      name="contact-tags"
                      id="contact-tags"
                      v-model="contact.tagName"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    >
                      <option
                        v-for="tagname in showTags"
                        v-bind:value="tagname.tagName"
                        v-bind:key="tagname._id"
                      >
                        {{ tagname.tagName }}
                      </option>
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

  <!-- Action buttons Contact -->
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
              <th scope="col" class="px-6 py-3" v-if="checkPermission()">
                Actions
              </th>
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
              <td class="px-6 py-4">{{ contactdetail.tagName }}</td>
              <td class="px-6 py-4">
                <button
                  data-modal-toggle="edit-authentication-modal"
                  class="px-5 py-2 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                  type="button"
                  @click="openEditContactModal(contactdetail)"
                  v-if="checkPermission()"
                >
                  Edit</button
                ><!--v-if="currentUser && currentUser.permission === 'Admin'"-->

                <!-- Overlay -->
                <div
                  v-if="ContactEditModal"
                  class="fixed inset-0 z-40 bg-gray-900 opacity-10 flex items-center justify-center"
                ></div>

                <!-- Main modal -->
                <div
                  id="edit-authentication-modal"
                  :class="{ hidden: !ContactEditModal }"
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
                          Edit Contact
                        </h3>
                        <form class="space-y-6" @submit.prevent="updateContact">
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
                            <select
                              name="tags"
                              id="tags"
                              v-model="contact.tagName"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            >
                              <option
                                v-for="tag in showTags"
                                v-bind:value="tag.tagName"
                                v-bind:key="tag._id"
                              >
                                {{ tag.tagName }}
                              </option>
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
                  @click="deleteContact(contactdetail._id)"
                  v-if="checkPermission()"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr
              v-if="(!showContacts || showContacts.length === 0) && !isLoading"
            >
              <td colspan="4" style="text-align: center">
                <div class="flex flex-col items-center justify-center h-100">
                  <img
                    src="/Nocontacts.png"
                    alt="No contacts found"
                    :style="{ height: '420px', width: '600px' }"
                  />
                  <p
                    class="block mb-2 font-medium text-2xl text-gray-900 centered-text"
                  >
                    No Contacts Found
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
import { Meteor } from "meteor/meteor";
import { Contacts } from "../api/Contactcollection";
import { Tags } from "../api/Tagcollection";

export default {
  name: "addcontacts",
  data() {
    return {
      isLoading: true,
      contact: {
        fullName: "",
        email: "",
        phoneNumber: "",
        tagName: "",
      },
      disableAddButton: false,
      ContactEditModal: false,
      currentUser: null,
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
    closeModal() {
      this.ContactEditModal = false;
      this.contact.fullName = "";
      this.contact.email = "";
      this.contact.phoneNumber = "";
      this.contact.tagName = "";
    },

    addcloseModal() {
      this.ContactAddModal = false;
      this.contact.fullName = "";
      this.contact.email = "";
      this.contact.phoneNumber = "";
      this.contact.tagName = "";
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
      const option = {
        fullName: this.contact.fullName,
        email: this.contact.email,
        phoneNumber: this.contact.phoneNumber,
        tagName: this.contact.tagName,
      };
      Meteor.call("contacts.insert", option, (error, result) => {
        if (error) {
          console.error("Error saving contact:", error.reason);
        } else {
          console.log("Contact saved with ID:", result);

          const toast = document.getElementById("toast-success");
          toast.style.display = "block";
          // Hides the toast after 2 seconds
          setTimeout(() => {
            toast.style.display = "none";
          }, 1500);
          //the four lines below clears the forms fields after saving
          this.contact.fullName = "";
          this.contact.email = "";
          this.contact.phoneNumber = "";
          this.contact.tagName = "";
          this.ContactToggleModal(); //Closes the Add Contact Modal
        }
      });
    },

    deleteContact(contactId) {
      // Call the 'contacts.remove' method on the server
      Meteor.call("contacts.remove", contactId, (error) => {
        if (error) {
          console.error("Error deleting contact:", error.reason);
        } else {
          console.log("Contact deleted successfully.");
          const toast = document.getElementById("toast-delete");
          toast.style.display = "block";

          // Hides the toast after 2 seconds
          setTimeout(() => {
            toast.style.display = "none";
          }, 1500);
        }
      });
    },

    openEditContactModal(contacts) {
      console.log("Edit Button Clicked", contacts);
      this.ContactEditModal = true;
      this.contact = { ...contacts };
    },

    updateContact() {
      const updatedContactData = {
        _id: this.contact._id,
        fullName: this.contact.fullName,
        email: this.contact.email,
        phoneNumber: this.contact.phoneNumber,
        tagName: this.contact.tagName,
      };

      Meteor.call("contacts.update", updatedContactData, (error, result) => {
        if (error) {
          console.error("Error updating contact:", error.reason);
        } else {
          console.log("Contact updated successfully.");
          const toast = document.getElementById("toast-edit");
          toast.style.display = "block";
          // Hides the toast after 2 seconds
          setTimeout(() => {
            toast.style.display = "none";
          }, 1500);
          // Clear the form fields after updating
          this.contact.fullName = "";
          this.contact.email = "";
          this.contact.phoneNumber = "";
          this.contact.tagName = "";
          this.ContactEditModal = false; // Closes the Edit Contact Modal
        }
      });
    },

    checkPermission() {
      const currentUser = Meteor.user();
      if (!Meteor.user()) {
        return [];
      } else {
        const userRole = currentUser.profile.permission;
        if (userRole === "Coordinator") {
          return false;
        } else {
          return true;
        }
      }
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
  },

  // computed:{
  //       checkPermission(){
  //         const currentUser = Meteor.user()
  //           if(!Meteor.user()){
  //               return []
  //           }else{
  //               const userRole = currentUser.profile.permission;
  //               if(userRole === 'Coordinator'){
  //                   return false;
  //               }else{
  //                   return true;
  //               }
  //           }
  //       },
  //   },

  created() {
    this.getUser();
  },

  meteor: {
    $subscribe: {
      contactsPublication: [],
      tagsPublication: [],
      //users: [],
    },

    showContacts() {
      const userId = Meteor.userId();
      const userDetails = Meteor.user();
      // const organizationId = Meteor.user().profile.organizationId
      const organizationId = userDetails?.profile?.organizationId;
      console.log(organizationId);
      //console.log(Meteor.user().profile.organizationName);
      if (userId && organizationId) {
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
        return Contacts.find(
          { organizationID: organizationId },
          { sort: { createdAt: -1 } }
        ).fetch();
      } else {
        // return "Check the USER and CONTACT schema"
        console.log("Check format");
      }
    },

    showTags() {
      const userId = Meteor.userId();
      const userDetails = Meteor.user();
      // const organizationId = Meteor.user().profile.organizationId
      const organizationId = userDetails?.profile?.organizationId;
      console.log(organizationId);
      //console.log(Meteor.user().profile.organizationName);
      if (userId && organizationId) {
        return Tags.find({ organizationID: organizationId }).fetch();
      } else {
        // return "Check the USER and CONTACT schema"
        console.log("Check format");
      }
    },
  },
};
</script>