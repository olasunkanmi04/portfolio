<template>
  <Layout>
    <div class="body product">
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
        <article>
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
  }
}
</page-query>
<script>
export default {
  metaInfo() {
    return {
      title: this.$page.work.title,
    };
  },
};
</script>

<style lang="scss">
.sidebar {
  .work-details {
    display: table;
    table-layout: fixed;
    strong {
      width: 150px;
      display: table-cell;
    }

    & a.work-link {
      color: #ffffff;
    }
  }
}
@media screen and (min-width: 1024px) {
  .work-container {
    width: 100%;
    display: flex;
  }
  .sidebar {
    flex-basis: 35%;
    padding-right: 3rem;
  }
  .content {
    flex: 1;
  }
}
</style>
