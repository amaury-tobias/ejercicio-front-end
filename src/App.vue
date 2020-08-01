<template>
  <div id="app">
    <navbar />
    <main class="pt-32 h-screen flex justify-center">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Navbar,
  },
})
</script>

<style lang="postcss" scoped>
header {
  @apply p-3 shadow-2xl rounded-b-lg fixed z-50 bg-white w-full top-0;
}
</style>
