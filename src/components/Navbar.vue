<template>
  <header>
    <nav class="flex items-center gap-5 justify-start">
      <router-link
        to="/"
        class="focus:outline-none p-2 hover:text-indigo-500 text-blue-600 transition-colors duration-200 ease-in-out"
      >
        <brand-icon />
      </router-link>

      <router-link
        to="/gallery"
        class="focus:outline-none p-2 rounded-md hover:text-teal-400 text-teal-700 font-bold no-underline flex"
      >
        <svg style="width:24px;height:24px" viewBox="0 0 24 24" class="mr-3">
          <path
            fill="currentColor"
            d="M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3M15.96,10.29L13.21,13.83L11.25,11.47L8.5,15H19.5L15.96,10.29Z"
          />
        </svg>
        Galería
      </router-link>

      <router-link
        to="/upload"
        class="focus:outline-none p-2 rounded-md hover:text-teal-400 text-teal-700 font-bold no-underline flex"
      >
        <svg style="width:24px;height:24px" viewBox="0 0 24 24" class="mr-3">
          <path
            fill="currentColor"
            d="M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04M19,18H6A4,4 0 0,1 2,14C2,11.95 3.53,10.24 5.56,10.03L6.63,9.92L7.13,8.97C8.08,7.14 9.94,6 12,6C14.62,6 16.88,7.86 17.39,10.43L17.69,11.93L19.22,12.04C20.78,12.14 22,13.45 22,15A3,3 0 0,1 19,18M8,13H10.55V16H13.45V13H16L12,9L8,13Z"
          />
        </svg>
        Cargar
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import BrandIcon from '@/components/BrandIcon.vue'

export default Vue.extend({
  name: 'Navbar',
  components: {
    BrandIcon,
  },
})
</script>
