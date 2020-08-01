<template>
  <div class="w-full flex justify-center">
    <Carousel />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Carousel from '@/components/Carousel.vue'

// import { Slide } from '@/models/Slide'

export default Vue.extend({
  name: 'Gallery',
  components: {
    Carousel,
  },
  mounted() {
    // const db = firebase.firestore()
    // let slides: Array<Slide>
    // db.collection('slides')
    //   .get()
    //   .then(querySnapshot => {
    //     querySnapshot.forEach(slide => {
    //       const title = slide.data().title
    //       const description = slide.data().description
    //       const img = slide.data().img
    //       slides.push({
    //         title,
    //         description,
    //         img,
    //       })
    //     })
    //   })
  },
})
</script>
