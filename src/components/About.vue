<template>
  <section id="about" class="section">
    <div class="container">

      <div class="about-grid">
        <div class="about-content">
          <h2 class="section-title">Summary</h2>
          <p class="section-subtitle">
            Embedded Linux Developer with 3+ years of experience in RDK-B middleware
            development for home broadband gateways. Skilled in C/C++ development on
            Linux, RDK-B Architecture, Ccsp components, RBUS/DBus IPC, multi-threading,
            and Yocto.
          </p>
          <p class="about-detail">
            Specialized in developing and maintaining WebPA, the remote device management
            protocol in the RDK-B stack. Known for delivering stable, memory-safe,
            production-ready firmware across multiple gateway platforms.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-grid {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Reduced gap */
  margin-top: 10px;
}

/* Force subtitle to stretch full width */
:deep(.section-subtitle) {
  max-width: 100% !important;
}

.about-detail {
  font-size: 1rem; /* Slightly larger for readability */
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-top: 20px;
  max-width: 100%; /* Stretch text */
}

@media (max-width: 768px) {
  #about {
    padding-top: 20px;
  }
}
</style>
