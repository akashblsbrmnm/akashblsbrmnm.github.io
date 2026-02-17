<template>
  <section id="connect" class="section">
    <div class="container">
      <div class="connect-content">

        <h2 class="section-title">Let's Connect</h2>
        <p class="section-subtitle">
          Have a project in mind, want to collaborate, or just want to say hello?
          I'd love to hear from you.
        </p>

        <div class="connect-links">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="connect-link card"
          >
            <span class="link-icon" v-html="link.icon"></span>
            <div class="link-info">
              <span class="link-name">{{ link.name }}</span>
              <span class="link-handle">{{ link.handle }}</span>
            </div>
            <svg class="link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const socialLinks = [
  {
    name: 'GitHub',
    handle: '@akashblsbrmnm',
    url: 'https://github.com/akashblsbrmnm',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
  },
  {
    name: 'LinkedIn',
    handle: '/in/akashblsbrmnm',
    url: 'https://www.linkedin.com/in/akashblsbrmnm/',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    name: 'Instagram',
    handle: '@akashblsbrmnm',
    url: 'https://instagram.com/akashblsbrmnm',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
  },
  {
    name: 'Email',
    handle: 'akashblsbrmnm@gmail.com',
    url: 'mailto:akashblsbrmnm@gmail.com',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  },
]
</script>

<style scoped>
.connect-content {
  width: 100%;
}

.connect-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
}

.connect-link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 24px;
}

.link-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: var(--color-accent-soft);
  color: var(--color-accent);
  flex-shrink: 0;
}

.link-info {
  flex: 1;
}

.link-name {
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.link-handle {
  font-size: 0.82rem;
  color: var(--color-text-muted);
}

.link-arrow {
  color: var(--color-text-muted);
  transition: transform var(--transition-fast), color var(--transition-fast);
}

.connect-link:hover .link-arrow {
  transform: translate(2px, -2px);
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .connect-links {
    margin-top: 28px;
    gap: 10px;
  }

  .connect-link {
    padding: 16px 18px;
    gap: 12px;
  }

  .link-icon {
    width: 38px;
    height: 38px;
    border-radius: 12px;
  }
}

@media (max-width: 480px) {
  .link-name {
    font-size: 0.88rem;
  }

  .link-handle {
    font-size: 0.75rem;
  }
}
</style>
