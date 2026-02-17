<template>
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-content">
        <div class="hero-greeting">
          <span class="greeting-wave">👋</span>
          <span class="greeting-text">Hello, I'm</span>
        </div>
        <h1 class="hero-name">Akash Balasubhramanyam</h1>
        <p class="hero-role">
          <span class="role-line"></span>
          <span>Embedded Systems Developer</span>
        </p>
        <p class="hero-description">
          Specializing in RDK-B middleware, embedded C, and Yocto development.
          <br />
          <span class="hero-tagline">Languages: C, C++, Shell, and a little bit of sarcasm.</span>
        </p>
        <div class="hero-actions">
          <a
            href="https://drive.google.com/file/d/1vrpjhZ1SqOpC-9l7nXMaJNRX5oTl28Vh/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-accent"
          >
            <span>Resume</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>

          <div class="hero-socials">
            <a href="mailto:akashblsbrmnm@gmail.com" class="social-icon" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
            <a href="https://github.com/akashblsbrmnm" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/akashblsbrmnm/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-portrait">
          <img src="@/assets/profile.png" alt="Akash Balasubhramanyam" class="hero-avatar" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  min-height: auto; /* Resume style, not full page */
  padding-top: 120px; /* Increased to clear navbar */
  padding-bottom: 60px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr auto; /* Text takes space, avatar auto */
  gap: 40px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-greeting {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  padding: 8px 18px;
  border-radius: 100px;
  margin-bottom: 24px;
  animation: fadeInUp 0.6s ease-out;
}

.greeting-wave {
  font-size: 1.15rem;
  animation: wave 2s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  15% { transform: rotate(14deg); }
  30% { transform: rotate(-8deg); }
  40% { transform: rotate(14deg); }
  50% { transform: rotate(-4deg); }
  60% { transform: rotate(10deg); }
  70% { transform: rotate(0deg); }
}

.greeting-text {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text-secondary);
}

.hero-name {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.15;
  padding-bottom: 4px;
  margin-bottom: 16px;
  background: linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-text-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 0.6s ease-out 0.15s both;
}

.hero-role {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-accent);
  margin-bottom: 20px;
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

.role-line {
  width: 32px;
  height: 2px;
  background: var(--color-accent);
  border-radius: 2px;
}

.hero-description {
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  max-width: 480px;
  line-height: 1.7;
  margin-bottom: 36px;
  animation: fadeInUp 0.6s ease-out 0.45s both;
}

.hero-tagline {
  font-style: italic;
  color: var(--color-text-muted);
  font-size: 0.92rem;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  animation: fadeInUp 0.6s ease-out 0.6s both;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 600;
  transition: all var(--transition-fast);
}

.btn-accent {
  background-color: var(--color-accent);
  color: #fff;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 700;
  transition: background-color 0.3s ease;
}

.btn-accent:hover {
  background-color: #1557B0;
}

.hero-socials {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-left: 0;
  border-left: none;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  color: var(--color-text-primary);
  background: var(--color-bg-secondary);
  border: none;
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.social-icon:hover {
  background: var(--glass-border-hover);
}

[data-theme="dark"] .social-icon {
  background: rgba(255, 255, 255, 0.15); /* Increased contrast */
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

[data-theme="dark"] .social-icon:hover {
  background: rgba(255, 255, 255, 0.25);
}

.hero-portrait {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-avatar {
  width: 280px; /* FIXED SIZE */
  height: 280px; /* FIXED SIZE */
  border-radius: 0; /* Square */
  object-fit: cover;
  /* box-shadow removed as requested */
  transition: transform var(--transition-smooth);
}

.hero-avatar:hover {
  transform: scale(1.03);
  /* box-shadow removed as requested */
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding-top: 100px;
    padding-bottom: 20px; /* Reduced from 60px */
  }

  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 32px;
  }

  .hero-greeting {
    justify-content: center;
  }

  .hero-name {
    font-size: clamp(1.8rem, 8vw, 2.8rem);
  }

  .hero-role {
    justify-content: center;
    font-size: 0.95rem;
  }

  .role-line {
    display: none;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
    font-size: 0.95rem;
    margin-bottom: 28px;
  }

  .hero-actions {
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  .btn {
    padding: 12px 22px;
    font-size: 0.85rem;
  }

  .hero-visual {
    display: flex;
    min-height: auto;
    justify-content: center;
  }

  .hero-avatar {
    width: 220px;
    height: 220px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding-top: 80px;
    padding-bottom: 10px; /* Reduced from 40px */
  }

  .hero-name {
    font-size: 1.6rem;
  }

  .hero-avatar {
    width: 220px;
    height: 220px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .hero-socials {
    border-left: none;
    padding-left: 0;
  }

  .btn {
    width: 100%;
    justify-content: center;
    max-width: 280px;
  }
}
</style>
