<template>
  <div
    @mouseover="clearInterval"
    @mouseleave="startSlide"
    class="carousel-cover w-full lg:w-2/3 h-auto"
  >
    <transition-group name="scale-out">
      <div
        v-for="(slide, $index) in slides"
        v-show="$index === currentIndex"
        :key="slide.title"
        class="carousel-cover__item"
        :style="{ backgroundImage: `url(${slide.img})` }"
      >
        <div class="group hover:shadow-2xl absolute inset-0 p-20">
          <div
            class="bg-black bg-opacity-0 group-hover:bg-opacity-75 opacity-0 group-hover:opacity-100 text-white p-10 transition-all duration-700 ease-in-out h-full"
          >
            <h2 class="text-4xl font-semibold capitalize">
              {{ slide.title }}
            </h2>
            <hr />
            <p>
              {{ slide.description }}
            </p>
          </div>
        </div>
      </div>
    </transition-group>
    <button class="prev" @click="previous">&#10094; Previous</button>
    <button class="next" @click="next">Next &#10095;</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    timer: 0,
    currentIndex: 0,
    slides: [
      {
        title: 'I am Slide A',
        description: '',
        img:
          'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg',
      },
      {
        title: 'I am Slide B',
        description: '',
        img:
          'https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg',
      },
      {
        title: 'I am Slide C',
        description: '',
        img:
          'https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg',
      },
      {
        title: 'I am Slide D',
        description: '',
        img:
          'https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg',
      },
    ],
  }),
  mounted() {
    this.startSlide()
  },
  methods: {
    next() {
      if (this.currentIndex < this.slides.length - 1) this.currentIndex++
      else this.currentIndex = 0
    },
    previous() {
      if (this.currentIndex > 0) this.currentIndex--
      else this.currentIndex = this.slides.length - 1
    },
    startSlide() {
      this.timer = setInterval(this.next, 3000)
    },
    clearInterval() {
      clearInterval(this.timer)
    },
  },
})
</script>

<style lang="postcss" scoped>
.scale-out-enter-active {
  @apply transition-all duration-300 ease-in-out;
}
.scale-out-leave-active {
  @apply transition-all duration-300 ease-in-out;
}
.scale-out-enter {
  transform: scale(0.55);
  @apply opacity-0 pointer-events-none;
}
.scale-out-leave-to {
  transform: scale(1.2);
  @apply pointer-events-none opacity-0;
}

.carousel-cover {
  @apply relative flex-shrink-0 rounded-lg;
  height: 600px;
  & .carousel-cover__item {
    @apply bg-no-repeat bg-center bg-cover w-full h-full rounded-lg absolute inset-0;
  }
}

.prev,
.next {
  @apply cursor-pointer absolute p-5 rounded-sm no-underline;
  @apply text-white font-bold text-lg select-none;
  @apply transition-all ease-in-out duration-700;
  @apply bg-black bg-opacity-50;
  top: 40%;
  &:focus {
    @apply outline-none;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
}
.next {
  @apply right-0;
}
.prev {
  @apply left-0;
}
</style>
