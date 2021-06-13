<template>
  <div
    class="home__projects-individual"
    :style="{ backgroundImage: `url(${work.cover_image})` }"
  >
    <div class="home__projects-individual-detail">
      <div class="home__projects-individual-detail-content">
        <div class="home__projects-individual-title-wrap">
          <g-link
            :to="work.path"
            class="home__projects-individual-title"
            v-html="work.title"
          ></g-link>
          <p
            class="home__projects-individual-industry"
            v-html="work.industry"
          ></p>
        </div>
        <div class="home__projects-individual-sub">
          <g-link :to="work.website" class="home__projects-individual-website"
            >Website<svgicon name="link" class="home__external-icon"></svgicon
          ></g-link>

          <p class="home__projects-individual-tech">
            <span v-for="(tech, index) in work.tech" :key="index">{{
              tech.title
            }}</span>
            <!-- <span>SCSS</span>
            <span>Bootstrap</span>
            <span>Vuejs</span> -->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["work"],
};
</script>

<style></style>
