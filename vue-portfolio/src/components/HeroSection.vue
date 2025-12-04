<script setup>
import { Download, ArrowUpRight, ArrowDown } from 'lucide-vue-next'
</script>

<template>
  <section class="hero-section">
    <div class="hero-grid">
      <!-- Text Content -->
      <div class="hero-content">
        <h1 class="hero-title">
          Hi! I'm <span class="text-accent">Akash</span>
        </h1>
        <p class="hero-subtitle text-muted">
          Embedded Systems Developer
        </p>

        <div class="hero-details">
          <p>
            <span class="label">Specialize in</span>
            RDK-B middleware, embedded C, Yocto development
          </p>
          <p>
            <span class="label">Languages</span>
            C, C++, Shell, and a little bit of sarcasm
          </p>
        </div>

        <div class="hero-actions">
          <a 
            href="https://drive.google.com/file/d/1vrpjhZ1SqOpC-9l7nXMaJNRX5oTl28Vh/view?usp=drive_link" 
            target="_blank"
            class="btn-primary"
          >
            <Download class="icon-sm" />
            Download Resume
          </a>
        </div>

        <div class="hero-connect">
          <p class="label">Let's Connect</p>
          <div class="social-links">
            <a href="https://github.com/akashblsbrmnm" target="_blank" class="social-link">
              GitHub <ArrowUpRight class="icon-xs" />
            </a>
            <a href="https://www.linkedin.com/in/akashblsbrmnm/" target="_blank" class="social-link">
              LinkedIn <ArrowUpRight class="icon-xs" />
            </a>
            <a href="mailto:akashblsbrmnm@example.com" class="social-link">
              Email <ArrowUpRight class="icon-xs" />
            </a>
          </div>
        </div>
      </div>

      <!-- Image - separate grid item to appear on right side on desktop -->
      <div class="hero-image-container">
        <div class="image-wrapper">
          <div class="glow-effect"></div>
          <img 
            src="@/assets/dp0.jpg" 
            alt="Akash" 
            class="profile-image"
            loading="eager"
            fetchpriority="high"
          />
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <ArrowDown class="icon-scroll" />
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 4rem 0;
  border-bottom: var(--border-width) solid var(--border-color);
}

.hero-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}

@media (min-width: 768px) {
  .hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 3rem;
  }
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 1rem;
  letter-spacing: -2px;
  text-transform: uppercase;
  font-family: var(--font-display);
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 5rem;
  }
}

.text-muted {
  color: var(--text-muted);
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  font-family: var(--font-mono);
  text-transform: uppercase;
  border-left: 5px solid var(--accent-color);
  padding-left: 1rem;
}

@media (min-width: 768px) {
  .hero-subtitle {
    font-size: 2rem;
  }
}

.hero-details {
  color: var(--text-color);
  font-size: 1.25rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: var(--font-mono);
}

.label {
  display: block;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 900;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  text-decoration: underline;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  color: var(--text-color);
  padding: 1rem 2rem;
  border: var(--border-width) solid var(--border-color);
  font-weight: 900;
  text-transform: uppercase;
  font-family: var(--font-mono);
  transition: all 0.1s;
  box-shadow: 6px 6px 0px var(--border-color);
  text-decoration: none;
}

.btn-primary:hover {
  background-color: var(--text-color);
  color: var(--bg-color);
  transform: translate(2px, 2px);
  box-shadow: 4px 4px 0px var(--border-color);
}

.btn-primary:active {
  transform: translate(6px, 6px);
  box-shadow: 0px 0px 0px var(--border-color);
}

.hero-connect {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: var(--border-width) solid var(--border-color);
}

.social-links {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-color);
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  font-family: var(--font-mono);
  text-decoration: none;
  border: 2px solid transparent;
  padding: 0.25rem;
}

.social-link:hover {
  background: var(--text-color);
  color: var(--bg-color);
  border: 2px solid var(--text-color);
}

.icon-sm {
  width: 1.25rem;
  height: 1.25rem;
}

.icon-xs {
  width: 1.25rem;
  height: 1.25rem;
}

/* Image Styles */
.hero-image-container {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
}

@media (min-width: 768px) {
  .hero-image-container {
    justify-content: flex-end;
    margin-top: 0;
    grid-column: 2;
    grid-row: 1;
  }
}

.image-wrapper {
  position: relative;
  width: 18rem;
  height: 18rem;
}

@media (min-width: 768px) {
  .image-wrapper {
    width: 24rem;
    height: 24rem;
  }
}

.glow-effect {
  display: none; /* Remove glow for brutalist */
}

.profile-image {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: var(--border-width) solid var(--border-color);
  box-shadow: 15px 15px 0px var(--border-color);
  filter: grayscale(100%) contrast(1.2);
  transition: all 0.2s;
}

.profile-image:hover {
  transform: translate(-5px, -5px);
  box-shadow: 20px 20px 0px var(--border-color);
  filter: grayscale(0%) contrast(1);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  justify-content: center;
  animation: bounce 2s infinite;
}

@media (min-width: 768px) {
  .scroll-indicator {
    display: flex;
  }
}

.icon-scroll {
  width: 3rem;
  height: 3rem;
  color: var(--text-color);
  border: 2px solid var(--text-color);
  padding: 0.5rem;
  background: var(--bg-color);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  40% {
    transform: translateY(-10px) translateX(-50%);
  }
  60% {
    transform: translateY(-5px) translateX(-50%);
  }
}
</style>
