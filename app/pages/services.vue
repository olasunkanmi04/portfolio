<script setup lang="ts">
const siteUrl = 'https://olasunkanmi.dev'
const pageUrl = `${siteUrl}/services`
const title = 'Services — Olasunkanmi Alabi'
const description =
  'Fixed-price fixes for broken Stripe payments and subscription billing: missing webhooks, out-of-sync subscriptions, failed-payment handling, refunds and tax. For founders who shipped fast and now need it to actually work.'

useHead({
  title,
  link: [{ rel: 'canonical', href: pageUrl }],
  meta: [
    { name: 'description', content: description },

    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: pageUrl },
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

const problems = [
  {
    problem: 'Webhooks missing, unverified or not retried',
    cost: 'Customers pay but never get access'
  },
  {
    problem: 'Subscription states out of sync (trials, upgrades, cancellations)',
    cost: 'People keep what they stopped paying for, or lose what they paid for'
  },
  {
    problem: 'No failed-payment handling (dunning, card updates)',
    cost: 'Revenue quietly lost every month'
  },
  {
    problem: 'Refunds, disputes and chargebacks not handled',
    cost: 'Fees, angry customers, account risk'
  },
  {
    problem: 'VAT and sales tax not set up',
    cost: 'Tax you owe but never collected'
  },
  {
    problem: 'Test mode to live mode never properly checked',
    cost: 'Launch day surprises'
  }
]

const packages = [
  {
    name: 'Payments Health Check',
    price: '£250',
    time: '2 working days',
    description: 'Review of your payment setup, written report ranked by risk, 30-min call'
  },
  {
    name: 'Payments Fix',
    price: 'from £750',
    time: '3–5 working days',
    description: 'Everything from the Health Check fixed and tested end to end, go-live checklist'
  },
  {
    name: 'Full Billing Setup',
    price: 'from £1,800',
    time: '1–2 weeks',
    description: 'Subscriptions, trials, coupons, tax, invoices and customer portal built properly'
  },
  {
    name: 'Monthly Care',
    price: '£400/month',
    time: 'Ongoing',
    description: 'Monitoring, small changes and fixes, priority support'
  }
]

const steps = [
  "Send me your app link and what's going wrong.",
  '15-minute call to agree a package and fixed price.',
  'You give me read access to your code and a restricted key for your payment provider. I never need your passwords.',
  'I fix and test every payment path: new customer, renewal, failed card, refund, cancellation.',
  "Handover: a short write-up of what changed and how to check it's still working."
]
</script>

<template>
  <div class="page">
    <header class="site-header">
      <NuxtLink to="/" class="home-link">Olasunkanmi Alabi</NuxtLink>
    </header>

    <main class="content">
      <section class="hero">
        <h1>Your app takes payments in the demo. I make sure it works when real money flows.</h1>
        <p class="subtitle">
          For founders, indie hackers and small startups who built fast — often with AI tools
          like Lovable, Bolt, Replit or Cursor — and now need payments that don't silently break.
          Fixed-price packages, clear scope, done in days.
        </p>
        <CtaButtons />
      </section>

      <section class="section" aria-labelledby="what-i-fix">
        <h2 id="what-i-fix">What I fix</h2>
        <ul class="problem-list">
          <li v-for="item in problems" :key="item.problem" class="problem-card">
            <p class="problem">{{ item.problem }}</p>
            <p class="cost">{{ item.cost }}</p>
          </li>
        </ul>
        <p class="note">I work mainly with Stripe; Paddle or Lemon Squeezy on request.</p>
      </section>

      <section class="section" aria-labelledby="packages">
        <h2 id="packages">Packages</h2>
        <ul class="package-list">
          <li v-for="pkg in packages" :key="pkg.name" class="package-card">
            <p class="package-name">{{ pkg.name }}</p>
            <p class="package-price">{{ pkg.price }}</p>
            <p class="package-time">{{ pkg.time }}</p>
            <p class="package-description">{{ pkg.description }}</p>
          </li>
        </ul>
        <p class="note">
          Health Check fee comes off the Fix if you go ahead. Larger or ongoing work: £450/day.
        </p>
      </section>

      <section class="section" aria-labelledby="how-it-works">
        <h2 id="how-it-works">How it works</h2>
        <ol class="steps">
          <li v-for="(step, index) in steps" :key="index">{{ step }}</li>
        </ol>
      </section>

      <section class="section" aria-labelledby="why-me">
        <h2 id="why-me">Why me</h2>
        <p class="why-intro">
          Senior engineer with 7+ years' experience, 3+ building a payments and
          subscription-billing platform used by other businesses.
        </p>
        <ul class="why-list">
          <li>Billing from the inside: invoices, credit memos, coupons, tax and accounting journals</li>
          <li>Stack: Stripe, TypeScript, React, Vue and Nuxt</li>
          <li>Plain English: you'll understand what was wrong and what I changed</li>
        </ul>
      </section>

      <section class="section final-cta" aria-labelledby="final-cta">
        <h2 id="final-cta">Send your app link and one line on what's going wrong. I'll reply within one working day.</h2>
        <CtaButtons />
      </section>
    </main>

    <footer class="site-footer">
      <ContactLinks />
      <p>&copy; {{ year }} Olasunkanmi Alabi. Based in the UK.</p>
    </footer>
  </div>
</template>

<style scoped>
.page {
  max-width: 760px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

@media (min-width: 640px) {
  .page {
    padding: 4rem 2rem;
  }
}

.site-header .home-link {
  color: var(--color-muted);
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
}

.site-header .home-link:hover {
  color: var(--color-accent);
}

.content {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

.hero {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.hero h1 {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw + 1rem, 2.5rem);
  line-height: 1.25;
  font-weight: 600;
  margin: 0;
  max-width: 22ch;
  letter-spacing: -0.01em;
}

.subtitle {
  margin: 0;
  color: var(--color-muted);
  font-size: 1.05rem;
  max-width: 62ch;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.section h2 {
  font-family: var(--font-display);
  font-size: clamp(1.3rem, 2vw + 1rem, 1.6rem);
  font-weight: 600;
  margin: 0;
  letter-spacing: -0.01em;
}

.final-cta h2 {
  max-width: 38ch;
}

.note {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.9rem;
}

.problem-list,
.package-list,
.why-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.problem-list,
.package-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.85rem;
}

@media (min-width: 560px) {
  .problem-list,
  .package-list {
    grid-template-columns: 1fr 1fr;
  }
}

.problem-card,
.package-card {
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 1.1rem 1.25rem;
}

.problem-card .problem {
  margin: 0 0 0.4rem;
  font-weight: 500;
}

.problem-card .cost {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.92rem;
}

.package-card .package-name {
  margin: 0 0 0.25rem;
  font-weight: 600;
}

.package-card .package-price {
  margin: 0 0 0.1rem;
  color: var(--color-accent);
  font-size: 1.1rem;
  font-weight: 600;
}

.package-card .package-time {
  margin: 0 0 0.5rem;
  color: var(--color-muted);
  font-size: 0.85rem;
}

.package-card .package-description {
  margin: 0;
  font-size: 0.92rem;
}

.steps {
  margin: 0;
  padding-left: 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.steps li {
  padding-left: 0.3rem;
}

.why-intro {
  margin: 0;
  max-width: 62ch;
}

.why-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.why-list li {
  padding-left: 1.3rem;
  position: relative;
}

.why-list li::before {
  content: "—";
  position: absolute;
  left: 0;
  color: var(--color-muted);
}

.final-cta {
  border-top: 1px solid var(--color-border);
  padding-top: 2.5rem;
}

.site-footer {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.site-footer p {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.85rem;
}
</style>
