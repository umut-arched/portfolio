<script>
import PortfolioItem from "./PortfolioItem.vue";
import projects from "./PortfolioData.js";

export default {
  components: {
    PortfolioItem,
  },
  data() {
    return {
      projects,
    };
  },
};
</script>

<template>
  <div class="flex flex-col md:flex-row items-center justify-center">
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
    >
      <div class="" v-for="(project, index) in projects" :key="index">
        <PortfolioItem
          :title="project.title"
          :imgUrl="project.imgUrl"
          :stack="project.stack"
          :link="project.link"
        />
      </div>
    </div>
  </div>
</template>
