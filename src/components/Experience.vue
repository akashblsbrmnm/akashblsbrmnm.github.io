<template>
  <section id="experience" class="section">
    <div class="container">

      <h2 class="section-title">Work Experience</h2>
      <p class="section-subtitle">
        My professional journey building robust embedded middleware.
      </p>

      <div class="experience-list">
        <!-- Experience Card 1 -->
        <div class="experience-card card">
          <div class="card-header">
            <div class="company-info">
              <img
                src="@/assets/infosys-logo-white.png"
                alt="Infosys"
                class="company-logo"
                @error="logoFailed = true"
              />
              <span v-if="logoFailed" class="company-logo-text">Infosys</span>
            </div>
            <span class="job-period">Oct 2022 — Present</span>
          </div>

          <div class="card-body">
            <h3 class="job-title">Technology Analyst</h3>
            <span class="job-location">Thiruvananthapuram, Kerala</span>

            <ul class="job-details">
              <li>Proven expertise in RDKB platform, developing and maintaining middleware CCSP components for RDK-B platform using Embedded C in Linux environment.</li>
              <li>Worked on WebPA/WebConfig client development to enable secure and efficient cloud-based configuration management for RDK-B devices.</li>
              <li>Strong analytical skills in troubleshooting complex issues — analyzing JIRA tickets, debugging root cause, and delivering high-quality solutions.</li>
              <li>Maintained and enhanced core RDK-B components including Utopia, CcspPSM, and CcspLMLite.</li>
              <li>Created Yocto layers (meta-*) and wrote bitbake recipes for building packages in RDK-B Yocto-based build system.</li>
              <li>Solid understanding of networking protocols (DHCP, TCP, UDP, NAT) for broadband devices.</li>
              <li>Strongly skilled in Linux shell scripting and command-line utilities.</li>
            </ul>

            <div class="job-tags">
              <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const logoFailed = ref(false)

const tags = [
  'C', 'Embedded Linux', 'RDK-B', 'WebPA', 'Yocto',
  'CCSP', 'Shell', 'Docker', 'Jenkins', 'RBUS/DBus',
]
</script>

<style scoped>
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 48px;
}

.experience-card {
  position: relative;
  border-radius: 24px;
  padding: 40px;
  transition: transform var(--transition-smooth), box-shadow var(--transition-smooth);
}

.experience-card:hover {
  transform: translateY(-2px);
}

/* ── Header ─── */
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
  flex-wrap: wrap;
  gap: 16px;
}

.company-logo {
  height: 48px; /* Increased from 32px */
  width: auto;
  object-fit: contain;
  filter: invert(1);
  transition: filter var(--transition-fast);
}

[data-theme="dark"] .company-logo {
  filter: invert(0);
}

.company-logo-text {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.job-period {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-accent);
  background: var(--color-accent-soft);
  padding: 8px 16px;
  border-radius: 100px;
}

/* ── Body ─── */
.job-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 4px;
}

.job-location {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  display: block;
  margin-bottom: 28px;
}

.job-details {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 28px;
}

.job-details li {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  padding-left: 20px;
  position: relative;
}

.job-details li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 11px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-accent);
  opacity: 0.7;
}

.job-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  font-size: 0.85rem;
  font-weight: 500;
  padding: 6px 16px;
  border-radius: 100px;
  background: var(--glass-bg-hover);
  color: var(--color-text-primary);
  border: 1px solid var(--glass-border);
}

/* ── Mobile ─── */
@media (max-width: 768px) {
  .experience-card {
    padding: 28px;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .company-logo {
    height: 40px;
  }

  .job-period {
    font-size: 0.8rem;
  }

  .job-title {
    font-size: 1.2rem;
  }
  
  .job-details li {
    font-size: 0.9rem;
  }
}
</style>
