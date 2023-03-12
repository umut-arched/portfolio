<script>
import designLogos from "./Logos.js";
export default {
  data() {
    return {
      designLogos,
    };
  },
};
</script>

<template>
  <div class="">
    <h1 class="text-3xl py-1">Services I offer</h1>
    <p class="my-2 px-3">
      Since the beginning of my journer as a developer and designer I've done
      remote work for clients all
      <span class="text-teal-500">over the world</span>.
    </p>
    <p class="my-2 px-5">
      My main focus lies on full stack development and motion design. Take a
      look at my
      <span class="text-teal-500">stack</span> underneath to see where I am
      proficient in
    </p>
    <div
      class="p-5 w-[17rem] mx-auto grid grid-cols-4 gap-2 object-fill items-center"
    >
      <div v-for="(logo, index) in designLogos">
        <img
          v-if="logo.categorie === 'design'"
          :src="logo.url"
          alt="img"
          :key="index"
        />
      </div>
      <div v-for="(logo, index) in designLogos">
        <img
          v-if="logo.categorie === 'programming'"
          :src="logo.url"
          alt="img"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>
