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
}

.work-card {
  position: relative;
  padding-left: 2rem;
  border-left: 1px solid var(--glass-border);
  transition: border-color 0.3s ease;
}

.work-card:hover {
  border-color: var(--accent-color);
}

.timeline-dot {
  position: absolute;
  left: -0.35rem; /* -5.5px */
  top: 0;
  width: 0.75rem;
  height: 0.75rem;
  background-color: var(--accent-color);
  border-radius: 50%;
}

.company-logo {
  height: 3rem;
  width: auto;
  margin-bottom: 1.5rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.work-card:hover .company-logo {
  opacity: 1;
}

.job-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  transition: color 0.3s ease;
}

.work-card:hover .job-title {
  color: var(--accent-color);
}

.job-meta {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.job-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--text-color);
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.detail-item span {
  font-size: 1.25rem; /* Match About section text size */
  line-height: 1.8;
}

.detail-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--accent-color);
  flex-shrink: 0;
  margin-top: 0.125rem;
}
</style>
