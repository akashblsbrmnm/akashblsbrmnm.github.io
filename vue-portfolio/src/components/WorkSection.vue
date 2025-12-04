<script setup>
import { ChevronRight } from 'lucide-vue-next'
</script>

<template>
  <section id="work" class="section-container">
    <h2 class="section-title">work.</h2>
    
    <div class="work-card">
      <div class="timeline-line"></div>
      <div class="timeline-dot"></div>
      
      <div class="work-content">
        <img src="@/assets/infy-white.png" alt="Infosys" class="company-logo" />
        
        <h3 class="job-title">Technology Analyst</h3>
        <p class="job-meta">Infosys • Trivandrum, Kerala</p>
        
        <ul class="job-details">
          <li class="detail-item">
            <ChevronRight class="detail-icon" />
            <span>Proven expertise in RDKB platform, developing and maintaining middleware CCSP components for RDK-B platform using Embedded C in Linux environment.</span>
          </li>
          <li class="detail-item">
            <ChevronRight class="detail-icon" />
            <span>Worked on WebPA/WebConfig client development to enable secure and efficient cloud-based configuration management for RDK-B devices.</span>
          </li>
          <li class="detail-item">
            <ChevronRight class="detail-icon" />
            <span>Strong analytical skills in troubleshooting complex issues - analyzing JIRA tickets, debugging root cause, and delivering high-quality solutions.</span>
          </li>
          <li class="detail-item">
            <ChevronRight class="detail-icon" />
            <span>Maintained and enhanced core RDK-B components including Utopia, CcspPSM, and CcspLMLite by analyzing legacy code and implementing feature updates aligned with current coding standards.</span>
          </li>
          <li class="detail-item">
            <ChevronRight class="detail-icon" />
            <span>Created Yocto layers (meta-*) and wrote bitbake recipe (.bb, .bbappend) files for building packages in RDK-B Yocto based build system.</span>
          </li>
          <li class="detail-item">
            <ChevronRight class="detail-icon" />
            <span>Solid understanding of networking protocols such as DHCP, TCP, UDP, NAT, and key networking concepts relevant to broadband devices.</span>
          </li>
          <li class="detail-item">
            <ChevronRight class="detail-icon" />
            <span>Strongly skilled in Linux shell scripting, command-line utilities and custom script development.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-container {
  padding: 5rem 0;
  border-bottom: var(--border-width) solid var(--border-color);
}

.work-card {
  position: relative;
  padding: 2rem;
  border: var(--border-width) solid var(--border-color);
  background: var(--bg-color);
  box-shadow: 8px 8px 0px var(--border-color);
  transition: all 0.1s;
}

.work-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 10px 10px 0px var(--border-color);
}

.timeline-line,
.timeline-dot {
  display: none;
}

.company-logo {
  height: 4rem;
  width: auto;
  margin-bottom: 2rem;
  filter: grayscale(100%) contrast(1.2);
}

/* Invert logo in light mode if it's a white logo */
:root.light .company-logo {
  filter: grayscale(100%) invert(1);
}

.work-card:hover .company-logo {
  filter: grayscale(0%) contrast(1);
}

:root.light .work-card:hover .company-logo {
  filter: grayscale(0%) invert(1);
}

.job-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: -1px;
}

.work-card:hover .job-title {
  color: var(--text-color);
  text-decoration: underline;
  text-decoration-thickness: 3px;
}

.job-meta {
  color: var(--text-muted);
  margin-bottom: 2rem;
  font-family: var(--font-mono);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1rem;
  border-bottom: 2px solid var(--text-muted);
  display: inline-block;
  padding-bottom: 0.25rem;
}

.job-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: var(--text-color);
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.detail-item span {
  font-size: 1.125rem;
  line-height: 1.6;
  font-family: var(--font-mono);
}

.detail-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: var(--text-color);
  flex-shrink: 0;
  margin-top: 0.25rem;
  background: var(--text-color);
  color: var(--bg-color);
  padding: 2px;
}
</style>
