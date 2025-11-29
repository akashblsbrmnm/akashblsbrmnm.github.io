<script setup>
import { onMounted, onUnmounted, provide, ref } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import WorkSection from './components/WorkSection.vue'
import ConnectSection from './components/ConnectSection.vue'
import Lenis from 'lenis'

const lenis = ref(null)
let observer = null

// Provide Lenis at top level
provide('lenis', lenis)

onMounted(() => {
  // Lenis initialization
  lenis.value = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
  })

  function raf(time) {
    lenis.value.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  // Intersection Observer for active section highlighting
  const options = {
    root: null,
    rootMargin: '-20% 0px -20% 0px', // Trigger when section is in middle 60% of viewport
    threshold: 0.1
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove active class from all titles first
        document.querySelectorAll('.section-title').forEach(el => {
          el.classList.remove('active')
        })
        
        // Add active class to the title within the intersecting section
        const title = entry.target.querySelector('.section-title')
        if (title) {
          title.classList.add('active')
        }
      }
    })
  }, options)

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section)
  })
})

onUnmounted(() => {
  if (lenis.value) {
    lenis.value.destroy()
  }
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <div class="app-container">
    <NavBar />
    
    <main class="main-content">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ConnectSection />
    </main>
    
    <footer class="footer">
      made with more bugs than caffeine ☕🐛 — © 2025 akash
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  width: 100%;
  max-width: 1152px; /* max-w-6xl */
  margin: 0 auto;
  padding: 8rem 1.5rem 5rem; /* pt-32 pb-20 px-6 */
}

.footer {
  text-align: center;
  padding: 2rem 0;
  color: var(--text-muted);
  font-size: 0.875rem;
  border-top: 1px solid var(--glass-border);
  margin-top: auto;
}
</style>
