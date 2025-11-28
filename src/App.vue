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
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Work from './components/Work.vue'
import Connect from './components/Connect.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTop.vue'
</script>

<style scoped>
#portfolio {
  position: relative;
}
</style>
