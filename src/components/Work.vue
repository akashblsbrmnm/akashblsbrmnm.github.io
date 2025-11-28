<template>
  <section id="work" class="work section">
    <div class="container">
      <h2 class="section-title">Work Experience</h2>
      
      <div class="work-timeline">
        <div class="work-item">
          <div class="work-header">
            <div class="company-info">
              <h3 class="company-name">Infosys</h3>
              <p class="job-title">Technology Analyst</p>
              <p class="location">Trivandrum, Kerala</p>
            </div>
            <div class="work-period">
              <span class="date">2021 - Present</span>
            </div>
          </div>
          
          <div class="work-description">
            <ul>
              <li>
                <svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Proven expertise in RDKB platform, developing and maintaining middleware CCSP components for RDK-B platform using Embedded C in Linux environment.</span>
              </li>
              <li>
                <svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Worked on WebPA/WebConfig client development to enable secure and efficient cloud-based configuration management for RDK-B devices.</span>
              </li>
              <li>
                <svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Strong analytical skills in troubleshooting complex issues - analyzing JIRA tickets, debugging root cause, and delivering high-quality solutions.</span>
              </li>
              <li>
                <svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Maintained and enhanced core RDK-B components including Utopia, CcspPSM, and CcspLMLite by analyzing legacy code and implementing feature updates aligned with current coding standards.</span>
              </li>
              <li>
                <svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Created Yocto layers (meta-*) and wrote bitbake recipe (.bb, .bbappend) files for building packages in RDK-B Yocto based build system.</span>
              </li>
              <li>
                <svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Solid understanding of networking protocols such as DHCP, TCP, UDP, NAT, and key networking concepts relevant to broadband devices.</span>
              </li>
              <li>
                <svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Strongly skilled in Linux shell scripting, command-line utilities and custom script development.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.work {
  background: var(--color-bg-secondary);
}

.work-timeline {
  max-width: 900px;
}

.work-item {
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-left: 4px solid var(--color-accent);
  border-radius: 12px;
  padding: 2.5rem;
  transition: all 0.3s ease;
}

.work-item:hover {
  transform: translateX(10px);
  box-shadow: 0 10px 40px rgba(255, 107, 53, 0.15);
}

.work-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.company-name {
  font-family: var(--font-grotesk);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
}

.job-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.3rem;
}

.location {
  font-size: 1rem;
  color: var(--color-text-tertiary);
}

.work-period {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

.date {
  color: var(--color-accent);
  font-weight: 600;
  font-size: 0.95rem;
}

.work-description ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.work-description li {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
}

.check-icon {
  color: var(--color-accent);
  flex-shrink: 0;
  margin-top: 2px;
}

.work-description span {
  color: var(--color-text-secondary);
  font-size: 1.05rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .work-item {
    padding: 2rem;
  }

  .company-name {
    font-size: 1.6rem;
  }

  .job-title {
    font-size: 1.2rem;
  }

  .work-description span {
    font-size: 1rem;
  }
}
</style>
