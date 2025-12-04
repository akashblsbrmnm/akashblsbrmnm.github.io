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
  border-bottom: var(--border-width) solid var(--border-color);
}

.text-center {
  text-align: center;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--bg-color);
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 700;
  border: var(--border-width) solid var(--border-color);
  margin-bottom: 3rem;
  font-family: var(--font-mono);
  text-transform: uppercase;
  box-shadow: 4px 4px 0px var(--border-color);
}

.status-dot-container {
  position: relative;
  display: flex;
  width: 0.75rem;
  height: 0.75rem;
}

.status-ping {
  display: none;
}

.status-dot {
  position: relative;
  display: inline-flex;
  height: 0.75rem;
  width: 0.75rem;
  background-color: var(--text-color);
  border-radius: 50%;
}

.connect-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 1024px) {
  .connect-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.connect-card {
  position: relative;
  height: 200px;
  background: var(--bg-color);
  border: var(--border-width) solid var(--border-color);
  overflow: hidden;
  transition: all 0.1s;
  text-decoration: none;
  box-shadow: 8px 8px 0px var(--border-color);
}

.card-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.connect-icon {
  width: 3rem;
  height: 3rem;
  color: var(--text-color);
  transition: all 0.1s;
}

.connect-label {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--text-color);
  font-family: var(--font-display);
  text-transform: uppercase;
}

.connect-sub {
  font-size: 1rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-weight: 700;
  text-transform: uppercase;
}

.card-glow {
  display: none;
}

/* Hover Effects */
.connect-card:hover {
  transform: translate(-4px, -4px);
  box-shadow: 12px 12px 0px var(--border-color);
  background: var(--text-color);
}

.connect-card:hover .connect-icon {
  color: var(--bg-color);
  transform: scale(1.1);
}

.connect-card:hover .connect-label {
  color: var(--bg-color);
}

.connect-card:hover .connect-sub {
  color: var(--bg-color);
}
</style>
