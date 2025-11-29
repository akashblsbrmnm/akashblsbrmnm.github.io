<script setup>
import { Github, Linkedin, Mail, Instagram } from 'lucide-vue-next'
</script>

<template>
  <section id="connect" class="section-container text-center">
    <h2 class="section-title">Let's Connect</h2>

    <div class="status-badge">
      <span class="status-dot-container">
        <span class="status-ping"></span>
        <span class="status-dot"></span>
      </span>
      Status: active
    </div>

    <div class="connect-grid">
      <a href="https://github.com/akashblsbrmnm" target="_blank" class="connect-card">
        <div class="card-content">
          <Github class="connect-icon" />
          <span class="connect-label">GitHub</span>
          <span class="connect-sub">Check my repos</span>
        </div>
        <div class="card-glow"></div>
      </a>

      <a href="https://www.linkedin.com/in/akashblsbrmnm/" target="_blank" class="connect-card">
        <div class="card-content">
          <Linkedin class="connect-icon" />
          <span class="connect-label">LinkedIn</span>
          <span class="connect-sub">Let's connect</span>
        </div>
        <div class="card-glow"></div>
      </a>

      <a href="mailto:akashblsbrmnm@gmail.com" class="connect-card">
        <div class="card-content">
          <Mail class="connect-icon" />
          <span class="connect-label">Email</span>
          <span class="connect-sub">Say hello</span>
        </div>
        <div class="card-glow"></div>
      </a>

      <a href="https://instagram.com/akashblsbrmnm" target="_blank" class="connect-card">
        <div class="card-content">
          <Instagram class="connect-icon" />
          <span class="connect-label">Instagram</span>
          <span class="connect-sub">Follow me</span>
        </div>
        <div class="card-glow"></div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.section-container {
  padding: 5rem 0;
}

.text-center {
  text-align: center;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background-color: rgba(34, 197, 94, 0.1);
  color: #4ade80;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid rgba(34, 197, 94, 0.2);
  margin-bottom: 2rem;
}

.status-dot-container {
  position: relative;
  display: flex;
  width: 0.5rem;
  height: 0.5rem;
}

.status-ping {
  position: absolute;
  display: inline-flex;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: #4ade80;
  opacity: 0.75;
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.status-dot {
  position: relative;
  display: inline-flex;
  border-radius: 50%;
  height: 0.5rem;
  width: 0.5rem;
  background-color: #22c55e;
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.connect-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Smaller min-width */
  gap: 1.5rem;
  max-width: 1000px; /* Increased max-width to fit 4 cards comfortably */
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 1024px) {
  .connect-grid {
    grid-template-columns: repeat(4, 1fr); /* Force 4 columns on desktop */
  }
}

.connect-card {
  position: relative;
  height: 180px; /* Reduced height */
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 1.5rem;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  backdrop-filter: blur(10px);
}

.card-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem; /* Reduced gap */
}

.connect-icon {
  width: 2.5rem; /* Reduced icon size */
  height: 2.5rem;
  color: var(--text-muted);
  transition: all 0.4s ease;
}

.connect-label {
  font-size: 1.25rem; /* Reduced font size */
  font-weight: 700;
  color: var(--text-color);
}

.connect-sub {
  font-size: 1rem;
  color: var(--text-muted);
  opacity: 0.8;
  transition: all 0.3s ease;
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 0%, rgba(249, 115, 22, 0.15), transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
}

/* Hover Effects */
.connect-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: var(--accent-color);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
}

.connect-card:hover .card-glow {
  opacity: 1;
}

.connect-card:hover .connect-icon {
  color: var(--accent-color);
  transform: scale(1.1) rotate(5deg);
}

.connect-card:hover .connect-sub {
  color: var(--accent-color);
}
</style>
