<script setup lang="ts">
const siteUrl = 'https://olasunkanmi.dev'
const title = 'Olasunkanmi Alabi — Senior Frontend Engineer'
const description =
  'I build payments and billing software where the money logic has to be right and the interface has to make sense. Senior engineer at Rebilly.'

useHead({
  title,
  link: [{ rel: 'canonical', href: siteUrl }],
  meta: [
    { name: 'description', content: description },

    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: siteUrl },
    { property: 'og:image', content: `${siteUrl}/og-image.png` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:creator', content: '@sun_kanmi' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: `${siteUrl}/og-image.png` }
  ]
})

const year = new Date().getFullYear()
</script>

<template>
  <div class="page">
    <header class="hero-header">
      <h1>Olasunkanmi Alabi</h1>
      <p class="role">Senior Frontend Engineer</p>
    </header>

    <main class="hero-main">
      <p class="headline">
        I build payments and billing software where the money logic has to be
        right and the interface has to make sense.
      </p>

      <p class="bio">
        Senior engineer at
        <a href="https://www.rebilly.com" target="_blank" rel="noopener noreferrer">Rebilly</a>,
        a payments orchestration and subscription billing platform, working
        across Vue, TypeScript and PHP on billing, revenue accounting,
        payments and KYC. Previously at Leatherback and Spleet. 7+ years
        building web products, with a background in product design.
      </p>

      <p class="side-project">
        Also building
        <a href="https://www.eriova.com/" target="_blank" rel="noopener noreferrer">Eriova</a>,
        a Stripe App for running billing operations in plain English, and
        <a href="https://bindayreminder.uk" target="_blank" rel="noopener noreferrer">Bin Day Reminder</a>,
        a free bin-collection reminder app for my local community.
      </p>

      <p class="payments-link">
        <NuxtLink to="/services">I also help startups fix their payments →</NuxtLink>
      </p>

      <ContactLinks />
    </main>

    <footer class="hero-footer">
      <p>&copy; {{ year }} Olasunkanmi Alabi. Based in the UK.</p>
    </footer>
  </div>
</template>

<style scoped>
.page {
  min-height: 100dvh;
  max-width: 680px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
}

@media (min-width: 640px) {
  .page {
    padding: 4rem 2rem;
  }
}

.hero-header h1 {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 5vw + 1rem, 3.25rem);
  font-weight: 600;
  line-height: 1.1;
  margin: 0 0 0.4rem;
  letter-spacing: -0.01em;
}

.role {
  margin: 0;
  color: var(--color-muted);
  font-size: 1.05rem;
  font-weight: 500;
}

.hero-main {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.headline {
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 2.5vw + 1rem, 1.85rem);
  line-height: 1.35;
  margin: 0;
  max-width: 34ch;
}

.bio {
  margin: 0;
  color: var(--color-text);
  font-size: 1.05rem;
  max-width: 60ch;
}

.bio a,
.side-project a {
  color: var(--color-accent);
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, var(--color-accent) 45%, transparent);
  text-underline-offset: 2px;
}

.bio a:hover,
.side-project a:hover {
  text-decoration-color: var(--color-accent);
}

.side-project {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.95rem;
  max-width: 60ch;
}

.payments-link {
  margin: 0;
  font-size: 0.95rem;
}

.payments-link a {
  color: var(--color-accent);
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, var(--color-accent) 45%, transparent);
  text-underline-offset: 2px;
}

.payments-link a:hover {
  text-decoration-color: var(--color-accent);
}

.hero-footer p {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.85rem;
}
</style>
