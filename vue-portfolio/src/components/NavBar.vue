<script setup>
import { ref, onMounted, onUnmounted, watch, inject } from 'vue'
import { Moon, Sun, Menu, X } from 'lucide-vue-next'

const lenis = inject('lenis', null)

// Theme state
const isDark = ref(false)

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Active section state
const activeSection = ref('')

// Initialize theme from localStorage
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  }
  applyTheme()
  
  // Setup intersection observer for active link
  setupObserver()
})

let observer = null

const setupObserver = () => {
  const options = {
    root: null,
    rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle
    threshold: 0
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, options)

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section)
  })
}

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

// Watch theme changes and apply
watch(isDark, () => {
  applyTheme()
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
})

const applyTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.remove('light')
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const scrollToSection = (sectionId) => {
  const target = document.querySelector(sectionId)
  if (target && lenis.value) {
    lenis.value.scrollTo(target, { offset: -100 })
    isMobileMenuOpen.value = false
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <nav class="navbar">
    <div class="glass-panel">
      <a href="#" class="logo">
        A<span class="text-accent">.</span>
      </a>

      <!-- Right Actions Container -->
      <div class="right-actions">
        <!-- Desktop Nav Links -->
        <div class="nav-links desktop-only">
          <a 
            href="#about" 
            @click.prevent="scrollToSection('#about')" 
            class="nav-link" 
            :class="{ 'active': activeSection === 'about' }"
          >About</a>
          <a 
            href="#tools" 
            @click.prevent="scrollToSection('#tools')" 
            class="nav-link" 
            :class="{ 'active': activeSection === 'tools' }"
          >Tools</a>
          <a 
            href="#work" 
            @click.prevent="scrollToSection('#work')" 
            class="nav-link" 
            :class="{ 'active': activeSection === 'work' }"
          >Work</a>
          <a 
            href="#connect" 
            @click.prevent="scrollToSection('#connect')" 
            class="nav-link" 
            :class="{ 'active': activeSection === 'connect' }"
          >Connect</a>
        </div>

        <!-- Theme Toggle -->
        <button 
          @click="toggleTheme" 
          class="theme-toggle"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <Sun v-if="isDark" class="icon-theme" />
          <Moon v-else class="icon-theme" />
        </button>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu" 
          class="mobile-menu-btn"
          :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <Menu v-if="!isMobileMenuOpen" class="icon-menu" />
          <X v-else class="icon-menu" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <Transition name="dropdown">
      <div v-if="isMobileMenuOpen" class="mobile-menu">
        <a href="#about" @click.prevent="scrollToSection('#about')" class="mobile-nav-link" :class="{ 'active': activeSection === 'about' }">About</a>
        <a href="#tools" @click.prevent="scrollToSection('#tools')" class="mobile-nav-link" :class="{ 'active': activeSection === 'tools' }">Tools</a>
        <a href="#work" @click.prevent="scrollToSection('#work')" class="mobile-nav-link" :class="{ 'active': activeSection === 'work' }">Work</a>
        <a href="#connect" @click.prevent="scrollToSection('#connect')" class="mobile-nav-link" :class="{ 'active': activeSection === 'connect' }">Connect</a>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  padding: 0;
  pointer-events: none;
  border-bottom: 1px solid var(--border-color);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

:root.dark .navbar {
  background: rgba(0, 0, 0, 0.8);
}

.glass-panel {
  pointer-events: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  width: 100%;
  max-width: 1200px;
  background: transparent;
  border-left: var(--border-width) solid var(--border-color);
  border-right: var(--border-width) solid var(--border-color);
}

.logo {
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: -1px;
  text-transform: uppercase;
  font-family: var(--font-display);
  text-decoration: none;
  border: var(--border-width) solid var(--border-color);
  padding: 0.25rem 0.5rem;
  background: var(--text-color);
  color: var(--bg-color);
}

.logo:hover {
  background: var(--bg-color);
  color: var(--text-color);
}

/* Right side container */
.right-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 1rem;
  font-size: 1rem;
  font-weight: 700;
  font-family: var(--font-mono);
  text-transform: uppercase;
}

.nav-link {
  color: var(--text-color);
  position: relative;
  transition: all 0.1s;
  padding: 0.5rem 1rem;
  border: var(--border-width) solid transparent;
  text-decoration: none;
}

.nav-link:hover {
  border-color: var(--border-color);
  background: var(--text-color);
  color: var(--bg-color);
}

.nav-link.active {
  background: var(--text-color);
  color: var(--bg-color);
  border-color: var(--border-color);
}

/* Theme Toggle */
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: var(--border-width) solid var(--border-color);
  cursor: pointer;
  transition: all 0.1s;
  box-shadow: 4px 4px 0px var(--border-color);
}

.theme-toggle:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px var(--border-color);
  background: var(--text-color);
}

.theme-toggle:hover .icon-theme {
  color: var(--bg-color);
}

.theme-toggle:active {
  transform: translate(4px, 4px);
  box-shadow: 0px 0px 0px var(--border-color);
}

.icon-theme {
  width: 1.5rem;
  height: 1.5rem;
  color: var(--text-color);
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: var(--border-width) solid var(--border-color);
  cursor: pointer;
  transition: all 0.1s;
  box-shadow: 4px 4px 0px var(--border-color);
}

.mobile-menu-btn:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px var(--border-color);
  background: var(--text-color);
}

.mobile-menu-btn:hover .icon-menu {
  color: var(--bg-color);
}

.icon-menu {
  width: 1.5rem;
  height: 1.5rem;
  color: var(--text-color);
}

/* Mobile Menu - Dropdown Style */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--bg-color);
  border-bottom: var(--border-width) solid var(--border-color);
  border-left: var(--border-width) solid var(--border-color);
  border-right: var(--border-width) solid var(--border-color);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0;
  pointer-events: auto;
}

.mobile-nav-link {
  color: var(--text-color);
  font-size: 1.25rem;
  font-weight: 700;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  transition: all 0.1s;
  text-align: center;
  text-transform: uppercase;
  font-family: var(--font-mono);
  text-decoration: none;
}

.mobile-nav-link:last-child {
  border-bottom: none;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  background: var(--text-color);
  color: var(--bg-color);
}

/* Responsive */
@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .glass-panel {
    padding: 1rem;
  }
}
</style>
