<template>
  <div class="w-full flex items-center justify-center">
    <form action="/upload" method="post" enctype="multipart/form-data">
      <h1>Cargar nuevas Imagenes</h1>

      <label for="title">
        <p>Titulo</p>
        <input type="text" name="title" placeholder="Titulo..." />
      </label>
      <label for="description">
        <p>Descripcion</p>
        <input type="text" name="description" placeholder="Descripcion..." />
      </label>

      <input type="file" name="file" />
      <input type="submit" value="Cargar" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Upload',
})
</script>

<style lang="postcss" scoped>
h1 {
  @apply font-bold text-3xl text-gray-800 text-center;
}
form {
  @apply bg-white p-10 rounded-lg flex flex-col gap-8 w-full items-center justify-center;
  @screen lg {
    @apply w-1/2;
  }
  & input[type='text'] {
    @apply bg-gray-200 py-2 px-4 rounded-lg;
  }
  & p {
    @apply font-semibold;
  }

  & input[type='submit'] {
    @apply p-2 px-5 rounded-lg bg-green-600 text-white;
    &:hover {
      @apply bg-green-500;
    }
  }

  & input[type='file'] {
    @apply p-2 px-5 rounded-lg bg-gray-200 w-1/2 my-4;
  }
}
</style>
