<script>
export default {
  props: {
    title: String,
    imgUrl: String,
    stack: Array,
    link: String,
  },
};
</script>

<template>
  <div class="border-2 rounded-md shadow-xl">
    <img
      :src="imgUrl"
      :alt="portfolio"
      class="w-full h-40 md:h-44 object-cover"
    />
    <div class="py-5 text-center">
      <h1 class="font-medium mb-2">{{ title }}</h1>
      <div class="flex flex-row items-center justify-evenly">
        <p class="text-sm" v-for="elem in stack">
          {{ elem }}
        </p>
      </div>
    </div>
  </div>
</template>
