<template>
  <div id="portfolio">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Work />
    <Connect />
    <Footer />
    <BackToTop />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Work from './components/Work.vue'
import Connect from './components/Connect.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTop.vue'

let lenis = null

onMounted(() => {
  // Initialize Lenis
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2
  })

  // Animation loop
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  // Make lenis globally available for navbar
  window.lenis = lenis
})

onUnmounted(() => {
  if (lenis) {
    lenis.destroy()
  }
})
</script>

<style scoped>
#portfolio {
  position: relative;
}
</style>
