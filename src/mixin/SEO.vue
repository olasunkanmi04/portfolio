<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
      author
    }
  }
</static-query>

<script>
export default {
  metaInfo() {
    const siteUrl = this.$static.metadata.siteUrl;
    const postPath = this.$page.work.path;
    const image = this.$page.work.image?.path;
    const imagePath = (image && `${siteUrl}${image.src}`) || "";

    return {
      title: this.$page.work.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.work.description,
        },
        { key: "og:url", property: "og:url", content: `${siteUrl}${postPath}` },
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.work.title,
        },
        {
          key: "og:type",
          property: "og:type",
          content: "article",
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.work.description,
        },
        {
          key: "og:image",
          property: "og:image",
          content: imagePath,
        },
        {
          key: "og:image:width",
          property: "og:image:width",
          content: (image && image.size.width) || "",
        },
        {
          key: "og:image:height",
          property: "og:image:height",
          content: (image && image.size.height) || "",
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.work.description,
        },
        {
          key: "twitter:card",
          name: "twitter:card",
          content: image ? "summary_large_image" : "description",
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content: imagePath,
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: this.$page.work.title,
        },
      ],
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            description: this.$page.work.description,
            datePublished: this.$page.work.date,
            author: {
              name: this.$static.metadata.author,
            },
            headline: this.$page.work.title,
            image: imagePath,
          },
        },
      ],
    };
  },
};
</script>
