<script setup>
import { inject } from 'vue'
import { ArrowDown } from 'lucide-vue-next'

const lenis = inject('lenis', null)

const scrollToConnect = () => {
  const target = document.querySelector('#connect')
  if (target && lenis.value) {
    lenis.value.scrollTo(target, { offset: -100 })
  }
}
</script>

<template>
  <section id="about" class="section-container">
    <h2 class="section-title">about.</h2>
    <p class="about-text">
      Embedded Linux Developer with 3+ years of experience in RDK-B middleware development for home broadband gateways.
      Skilled in C/C++ development on Linux, RDK-B Architecture, Ccsp components, RBUS/DBus IPC, multi-threading, and Yocto.
      Specialized in developing and maintaining WebPA, the remote device management protocol in the RDK-B stack.
      Known for delivering stable, memory-safe, production-ready firmware across multiple gateway platforms.
    </p>
    <button class="connect-btn" @click="scrollToConnect">
      Let's Connect
      <ArrowDown class="icon-sm" />
    </button>
  </section>
</template>

<style scoped>
.section-container {
  padding: 5rem 0;
  border-bottom: var(--border-width) solid var(--border-color);
}

.about-text {
  font-size: 1.25rem;
  color: var(--text-muted);
  line-height: 1.8;
  max-width: 100%;
  font-family: var(--font-mono);
}

.connect-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  background-color: transparent;
  color: var(--text-color);
  padding: 1rem 2rem;
  border: var(--border-width) solid var(--border-color);
  font-weight: 900;
  text-transform: uppercase;
  font-family: var(--font-mono);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.1s;
  box-shadow: 6px 6px 0px var(--border-color);
}

.connect-btn:hover {
  background-color: var(--text-color);
  color: var(--bg-color);
  transform: translate(2px, 2px);
  box-shadow: 4px 4px 0px var(--border-color);
}

.connect-btn:active {
  transform: translate(6px, 6px);
  box-shadow: 0px 0px 0px var(--border-color);
}

.icon-sm {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
