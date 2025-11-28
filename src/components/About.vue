<template>
  <section id="about" class="about section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <p class="about-text">
          Embedded Linux Developer with <span class="highlight">3+ years of experience</span> in RDK-B middleware 
          development for home broadband gateways. Skilled in C/C++ development on Linux, RDK-B Architecture, 
          CCSP components, RBUS/DBus IPC, multi-threading, and Yocto.
        </p>
        <p class="about-text">
          Specialized in developing and maintaining <span class="highlight">WebPA</span>, the remote device 
          management protocol in the RDK-B stack. Known for delivering stable, memory-safe, production-ready 
          firmware across multiple gateway platforms.
        </p>
        <div class="about-stats">
          <div class="stat-card">
            <div class="stat-number">3+</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">RDK-B</div>
            <div class="stat-label">Middleware Expert</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">C/C++</div>
            <div class="stat-label">Primary Stack</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--color-bg-secondary);
}

.about-content {
  max-width: 900px;
}

.about-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
}

.highlight {
  color: var(--color-accent);
  font-weight: 600;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.stat-card {
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.1), transparent);
  transition: left 0.5s ease;
}

.stat-card:hover::before {
  left: 100%;
}

.stat-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.1);
}

.stat-number {
  font-family: var(--font-grotesk);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: var(--color-text-tertiary);
  font-weight: 500;
}

@media (max-width: 768px) {
  .about-text {
    font-size: 1.1rem;
  }

  .about-stats {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
