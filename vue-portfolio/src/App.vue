<script setup>
import { onMounted, onUnmounted, provide, ref } from 'vue'
import { ArrowUp } from 'lucide-vue-next'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import TechSkillsSection from './components/TechSkillsSection.vue'
import WorkSection from './components/WorkSection.vue'
import UsesSection from './components/UsesSection.vue'
import ConnectSection from './components/ConnectSection.vue'
import Lenis from 'lenis'

const lenis = ref(null)
let observer = null
const showScrollTop = ref(false)

// Provide Lenis at top level
provide('lenis', lenis)

const scrollToTop = () => {
  if (lenis.value) {
    lenis.value.scrollTo(0, { duration: 1.2 })
  }
}

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

  // Listen to scroll for scroll-to-top button visibility
  lenis.value.on('scroll', ({ scroll }) => {
    showScrollTop.value = scroll > 400
  })

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
      <TechSkillsSection />
      <SkillsSection />
      <WorkSection />
      <UsesSection />
      <ConnectSection />
    </main>
    
    <footer class="footer">
      made with more bugs than caffeine ☕🐛 — © 2025 akash
    </footer>

    <!-- Scroll to Top Button -->
    <Transition name="fade">
      <button 
        v-if="showScrollTop" 
        class="scroll-to-top" 
        @click="scrollToTop"
        aria-label="Scroll to top"
      >
        <ArrowUp class="icon-scroll" />
      </button>
    </Transition>
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem 5rem;
  border-left: var(--border-width) solid var(--border-color);
  border-right: var(--border-width) solid var(--border-color);
}

.footer {
  text-align: center;
  padding: 2rem 0;
  color: var(--text-color);
  font-size: 1rem;
  font-family: var(--font-mono);
  font-weight: 700;
  text-transform: uppercase;
  border-top: var(--border-width) solid var(--border-color);
  background: var(--bg-color);
  margin-top: auto;
}

/* Scroll to Top Button */
.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  background: var(--bg-color);
  border: var(--border-width) solid var(--border-color);
  cursor: pointer;
  transition: all 0.1s;
  box-shadow: 6px 6px 0px var(--border-color);
}

.scroll-to-top:hover {
  transform: translate(2px, 2px);
  box-shadow: 4px 4px 0px var(--border-color);
  background: var(--text-color);
}

.scroll-to-top:hover .icon-scroll {
  color: var(--bg-color);
}

.scroll-to-top:active {
  transform: translate(6px, 6px);
  box-shadow: 0px 0px 0px var(--border-color);
}

.icon-scroll {
  width: 1.5rem;
  height: 1.5rem;
  color: var(--text-color);
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
