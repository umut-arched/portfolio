<template>
  <div class="absolute left-[50%] translate-x-[-50%] py-3 items-center justify-center text-base">
    <a class="p-2" href="#/">Home</a>
    <a class="p-2" href="#/about">Work</a>
    <a class="p-2" href="#/login">Login</a>
  </div>
  <component :is="currentView" />
</template>

<script>
import Home from "./pages/Homepage.vue";
import Work from "./pages/Work.vue";
import Login from "./pages/Login.vue";

const routes = {
  "/": Home,
  "/about": Work,
};

export default {
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>
<style lang=""></style>
