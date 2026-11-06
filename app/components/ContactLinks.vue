<script setup lang="ts">
const email = 'alabiolasunkanmi@hotmail.com'
const emailCopied = ref(false)
let copyResetTimer: ReturnType<typeof setTimeout> | undefined

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email)
    emailCopied.value = true
    clearTimeout(copyResetTimer)
    copyResetTimer = setTimeout(() => {
      emailCopied.value = false
    }, 2000)
  } catch {
    window.location.href = `mailto:${email}`
  }
}
</script>

<template>
  <nav class="links" aria-label="Contact links">
    <a href="https://www.linkedin.com/in/alabi-olasunkanmi" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
    <a href="https://github.com/olasunkanmi04" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
    <a
      href="mailto:alabiolasunkanmi@hotmail.com"
      aria-live="polite"
      title="Click to copy email address"
      @click.prevent="copyEmail"
    >{{ emailCopied ? 'Copied!' : 'alabiolasunkanmi@hotmail.com' }}</a>
    <NuxtLink to="/services">Services</NuxtLink>
  </nav>
</template>

<style scoped>
.links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
  margin-top: 0.5rem;
}

.links a {
  display: inline-flex;
  align-items: center;
  padding: 0.55rem 1.1rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
}

.links a:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
</style>
