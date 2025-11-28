<template>
  <section class="hero section">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text fade-in-up">
          <h1 class="hero-title">
            Hi, I'm <span class="accent-text">Akash</span>
          </h1>
          <h2 class="hero-subtitle">Embedded Systems Developer</h2>
          <p class="hero-description">
            Specializing in RDK-B middleware, embedded C, and Yocto development.
            Crafting robust, memory-safe firmware for broadband gateways.
          </p>
          <div class="hero-tags">
            <span class="tag">C/C++</span>
            <span class="tag">Linux</span>
            <span class="tag">RDK-B</span>
            <span class="tag">Yocto</span>
          </div>
          <div class="hero-actions">
            <a href="https://drive.google.com/file/d/1vrpjhZ1SqOpC-9l7nXMaJNRX5oTl28Vh/view?usp=drive_link" 
               target="_blank" 
               class="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
            <a href="#connect" class="btn-secondary">Get in Touch</a>
          </div>
        </div>
        
        <div class="hero-image fade-in">
          <div class="image-wrapper">
            <img src="/assets/dp0.jpg" alt="Akash Balasubramaniyam" />
            <div class="image-glow"></div>
          </div>
        </div>
      </div>

      <!-- Scroll Down Arrow with Trail -->
      <div class="scroll-indicator">
        <svg class="arrow-container" width="40" height="60" viewBox="0 0 40 60">
          <!-- Trail arrows -->
          <path class="arrow trail-3" d="M20 5 L10 15 L12 17 L20 9 L28 17 L30 15 Z" fill="var(--color-accent)" opacity="0.2"/>
          <path class="arrow trail-2" d="M20 15 L10 25 L12 27 L20 19 L28 27 L30 25 Z" fill="var(--color-accent)" opacity="0.4"/>
          <path class="arrow trail-1" d="M20 25 L10 35 L12 37 L20 29 L28 37 L30 35 Z" fill="var(--color-accent)" opacity="0.6"/>
          <!-- Main arrow -->
          <path class="arrow main" d="M20 35 L10 45 L12 47 L20 39 L28 47 L30 45 Z" fill="var(--color-accent)"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding-top: 8rem;
  min-height: 100vh;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-text {
  animation-delay: 0.2s;
}

.hero-title {
  font-family: var(--font-grotesk);
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.accent-text {
  color: var(--color-accent);
  position: relative;
  display: inline-block;
}

.hero-subtitle {
  font-family: var(--font-grotesk);
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-text-tertiary);
  margin-bottom: 2rem;
  max-width: 500px;
}

.hero-tags {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.5rem 1rem;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  transition: all 0.3s ease;
}

.tag:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  transform: translateY(-2px);
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background: var(--color-accent);
  color: var(--color-bg);
  border: 2px solid var(--color-accent);
}

.btn-primary:hover {
  background: transparent;
  color: var(--color-accent);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px var(--color-accent-glow);
}

.btn-secondary {
  background: transparent;
  color: var(--color-accent);
  border: 2px solid var(--color-accent);
}

.btn-secondary:hover {
  background: var(--color-accent);
  color: var(--color-bg);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px var(--color-accent-glow);
}

.hero-image {
  animation-delay: 0.4s;
}

.image-wrapper {
  position: relative;
  width: 400px;
  height: 400px;
  margin: 0 auto;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--color-accent);
  position: relative;
  z-index: 2;
  animation: float 6s ease-in-out infinite;
}

.image-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
  animation: glow 3s ease-in-out infinite;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: fadeIn 1s ease-out 1s both;
  cursor: pointer;
}

.arrow-container {
  display: block;
}

.arrow {
  transition: all 0.3s ease;
}

.arrow.main {
  animation: bounce-arrow 2s ease-in-out infinite;
}

.arrow.trail-1 {
  animation: bounce-arrow 2s ease-in-out infinite 0.15s;
}

.arrow.trail-2 {
  animation: bounce-arrow 2s ease-in-out infinite 0.3s;
}

.arrow.trail-3 {
  animation: bounce-arrow 2s ease-in-out infinite 0.45s;
}

@keyframes bounce-arrow {
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(10px);
    opacity: 0.7;
  }
}

.scroll-indicator:hover .arrow {
  fill: var(--color-accent-hover);
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.5rem;
  }

  .image-wrapper {
    width: 300px;
    height: 300px;
  }

  .image-glow {
    width: 320px;
    height: 320px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.3rem;
  }

  .image-wrapper {
    width: 250px;
    height: 250px;
  }

  .image-glow {
    width: 270px;
    height: 270px;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}
</style>
