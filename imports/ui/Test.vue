<template>
  <!-- Log Out Button -->

  <button
    id="dropdownHoverButton"
    @mouseover="openDropdown"
    @mouseout="closeDropdown"
    data-dropdown-toggle="dropdownHover"
    data-dropdown-trigger="hover"
    class=" font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
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
    ref = "dropdown"
    @mouseover="openDropdown"
    @mouseout="closeDropdown"
    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"

  >
    <ul
      class="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownHoverButton"
    >
      <li>
        <a
          class="block px-4 py-2 "
          >Hope to see you again!</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Log out</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    openDropdown() {
      // Use $refs to access the dropdown element and show it
      this.$refs.dropdown.classList.remove('hidden');
    },
    closeDropdown() {
      // Use $refs to access the dropdown element and hide it
      this.$refs.dropdown.classList.add('hidden');
    },
  },
};

</script>