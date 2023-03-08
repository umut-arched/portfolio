<script>
import Intro from "./components/intro/Intro.vue";
import Portfolio from "./components/portfolio/Portfolio.vue";
import Services from "./components/services/Services.vue";

export default {
  components: {
    Intro,
    Portfolio,
    Services,
  },
};
</script>

<template>
  <div class="app text-center">
    <Intro
      class="h-[100vh] w-auto flex flex-col justify-center items-center"
    />
    <font-awesome-icon icon="fa-solid" />
    <Services class="mb-10" />
  </div>
</template>
