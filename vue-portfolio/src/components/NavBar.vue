<script setup>
import { ref, onMounted, onUnmounted, watch, inject } from 'vue'
import { Moon, Sun, Menu, X } from 'lucide-vue-next'

const lenis = inject('lenis', null)

// Theme state
const isDark = ref(true)

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
            href="#skills" 
            @click.prevent="scrollToSection('#skills')" 
            class="nav-link" 
            :class="{ 'active': activeSection === 'skills' }"
          >Skills</a>
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
        <a href="#skills" @click.prevent="scrollToSection('#skills')" class="mobile-nav-link" :class="{ 'active': activeSection === 'skills' }">Skills</a>
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
  padding: 1.5rem 1rem 0;
  pointer-events: none;
}

.glass-panel {
  pointer-events: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  width: 100%;
  max-width: 42rem;
  
  background: rgba(20, 20, 20, 0.65);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 
    0 8px 32px 0 rgba(0, 0, 0, 0.5),
    0 0 35px rgba(249, 115, 22, 0.25),
    0 0 60px rgba(255, 255, 255, 0.2), /* Enhanced white glow */
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);
}

/* Light mode navbar */
:root.light .glass-panel {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 
    0 4px 24px 0 rgba(0, 0, 0, 0.12),
    0 2px 8px 0 rgba(0, 0, 0, 0.08);
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.05em;
}

/* Right side container */
.right-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.03);
  padding: 0.25rem;
  border-radius: 9999px;
}

.nav-link {
  color: var(--text-muted);
  position: relative;
  transition: all 0.3s ease;
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
}

.nav-link:hover {
  color: var(--text-color);
}

.nav-link.active {
  color: #ffffff;
  background-color: var(--accent-color);
  box-shadow: 0 2px 10px rgba(249, 115, 22, 0.3);
}

/* Remove old underline styles */
.nav-link::after {
  display: none;
}

/* Theme Toggle - now part of nav-right */
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--accent-color);
  transform: rotate(15deg);
}

.icon-theme {
  width: 1.125rem;
  height: 1.125rem;
  color: var(--accent-color);
  transition: transform 0.3s ease;
}

.theme-toggle:hover .icon-theme {
  transform: scale(1.1);
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-menu-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--accent-color);
}

.icon-menu {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--text-color);
}

/* Mobile Menu - Dropdown Style */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 0.5rem 1rem;
  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  pointer-events: auto;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}

.mobile-nav-link {
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  text-align: left;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  background: rgba(249, 115, 22, 0.15);
  color: var(--accent-color);
}

/* Dropdown Transitions */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
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
    padding: 0.875rem 1.5rem;
  }
}

@media (max-width: 640px) {
  .glass-panel {
    padding: 0.75rem 1.25rem;
  }
}
</style>
