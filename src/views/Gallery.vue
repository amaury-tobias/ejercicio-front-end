<template>
  <div class="w-full flex justify-center">
    <Carousel :slides="slides" @modal="handleModal" />
    <div
      v-show="modalIsOpen"
      id="modal"
      class="absolute inset-0 bg-black bg-opacity-75 z-50"
    >
      <button
        @click="modalIsOpen = false"
        class="rounded-lg px-3 py-2 absolute bg-red-600 top-0 right-0 mt-4 mr-4 text-white"
      >
        Cerrar
      </button>
      <div class="flex h-full w-full justify-center items-center flex-col">
        <img :src="`/${slideOnModal.img}`" />
        <div class="text-white">
          <h2 class="font-bold text-2xl">{{ slideOnModal.title }}</h2>
          <p>{{ slideOnModal.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Carousel from '@/components/Carousel.vue'
import axios from 'axios'
import { Slide } from '@/models/Slide'

export default Vue.extend({
  name: 'Gallery',
  components: {
    Carousel,
  },
  data: () => ({
    modalIsOpen: false,
    slides: [],
    slideOnModal: {
      title: '',
      description: '',
      img: '',
    },
  }),
  mounted() {
    axios
      .get('/files')
      .then(res => {
        this.slides = res.data
        this.slideOnModal = this.slides[0]
      })
      .catch(err => console.error(err))
  },
  methods: {
    handleModal(slide: Slide) {
      this.slideOnModal = slide
      this.modalIsOpen = true
    },
  },
})
</script>
