<template>
  <Layout>
    <div class="body">
      <div class="home">
        <div class="product__content">
          <g-link
            :to="$page.work.website"
            target="_blank"
            class="product__website"
          >
            {{ $page.work.title }}
            <svgicon name="link" class="home__external-icon"></svgicon>
          </g-link>
          <h1 class="product__title">{{ $page.work.projectHeading }}</h1>
          <p class="product__tech">
            <span>Technology:</span> {{ $page.work.maintags.join(", ") }}
          </p>
        </div>
        <article class="product">
          <div v-html="$page.work.content"></div>
        </article>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Portfolio ($path: String!) {
  work: portfolio(path: $path) {
    id
    title
    projectHeading
    tags
    website
    industry
    content
    maintags
    path
    description
  }
}
</page-query>
<script>
import Seo from "../mixin/SEO";
export default {
  mixins: [Seo],
  // metaInfo() {
  //   return {
  //     title: this.$page.work.title,
  //   };
  // },
};
</script>
