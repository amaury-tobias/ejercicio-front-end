<template>
  <div class="home">
    <div id="lottie" class="w-full"></div>
    <div class="container mx-auto">
      <h1 class="text-center text-4xl font-semibold">
        Ejercicio para Front End Developer
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import lottie from 'lottie-web'

export default Vue.extend({
  name: 'Home',
  mounted() {
    lottie.loadAnimation({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      container: document.querySelector('#lottie')!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'lottie-animation.json',
      name: 'main',
    })
  },
  beforeDestroy() {
    lottie.destroy('main')
  },
})
</script>

<style lang="postcss" scoped>
#lottie {
  height: 50vh;
}
</style>
