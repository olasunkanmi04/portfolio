<template>
  <div class="cta-buttons">
    <a
      class="btn btn-primary"
      href="https://cal.com/olasunkanmi-alabi-to60g5/15min"
      target="_blank"
      rel="noopener noreferrer"
    >
      Book a 15-min call
    </a>
    <a class="btn btn-secondary" href="mailto:ooandeltd@gmail.com">
      Email me
    </a>
  </div>
</template>

<style scoped>
.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.4rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid transparent;
}

.btn-primary {
  background: var(--color-accent);
  color: var(--color-bg);
}

.btn-primary:hover {
  opacity: 0.88;
}

.btn-secondary {
  border-color: var(--color-border);
  color: var(--color-text);
}

.btn-secondary:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
</style>
