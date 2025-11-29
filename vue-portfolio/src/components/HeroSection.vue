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
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3.5rem;
  }
}

.text-muted {
  color: var(--text-muted);
}

.hero-subtitle {
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .hero-subtitle {
    font-size: 1.5rem;
  }
}

.hero-details {
  color: var(--text-color); /* Changed from text-muted to text-color */
  font-size: 1.125rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.label {
  display: block;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 0.25rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--accent-color);
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: var(--accent-hover);
  transform: translateY(-2px);
}

/* Removed light mode color override - text should always be white */

.hero-connect {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--glass-border);
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--text-muted);
  font-size: 1.25rem; /* Increased size */
}

.social-link:hover {
  color: var(--accent-color);
}

.icon-sm {
  width: 1rem;
  height: 1rem;
}

.icon-xs {
  width: 1rem; /* Increased icon size slightly to match text */
  height: 1rem;
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
  width: 16rem;
  height: 16rem;
}

@media (min-width: 768px) {
  .image-wrapper {
    width: 20rem;
    height: 20rem;
  }
}

.glow-effect {
  position: absolute;
  inset: 0;
  background-color: var(--accent-color);
  opacity: 0.2;
  border-radius: 9999px;
  filter: blur(40px);
  animation: pulse 4s infinite;
}

.profile-image {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 9999px;
  border: 2px solid var(--glass-border);
  box-shadow: 0 0 25px rgba(249, 115, 22, 0.4); /* Added glow ring */
  transition: all 0.5s ease;
}

.profile-image:hover {
  border-color: var(--accent-color);
  box-shadow: 0 0 40px rgba(249, 115, 22, 0.6); /* Enhanced glow on hover */
}

@keyframes pulse {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.05); }
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
  width: 2rem;
  height: 2rem;
  color: var(--text-muted);
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
