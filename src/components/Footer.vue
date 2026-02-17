<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-left">
        <span class="footer-logo">
          <span class="logo-bracket">&lt;</span>
          <span class="logo-name">Akash</span>
          <span class="logo-bracket">/&gt;</span>
        </span>
        <p class="footer-note">Designed & built with care.</p>
      </div>
      <p class="footer-copy">&copy; {{ year }} Akash. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--glass-border);
  padding: 40px 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-logo {
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  gap: 2px;
}

.logo-bracket {
  color: var(--color-accent);
  font-weight: 400;
}

.logo-name {
  color: var(--color-text-primary);
}

.footer-note {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  margin-top: 6px;
}

.footer-copy {
  font-size: 0.82rem;
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
