<template>
  <div class="layout">
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
    author
    twitter {
      site
      creator
    }

  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      meta: [
        {
          key: "author",
          name: "author",
          content: this.$static.metadata.author,
        },
        {
          key: "twitter:site",
          name: "twitter:site",
          content: this.$static.metadata.twitter.site,
        },
        {
          key: "twitter:creator",
          name: "twitter:creator",
          content: this.$static.metadata.twitter.creator,
        },
      ],
    };
  },
};
</script>
<style></style>
