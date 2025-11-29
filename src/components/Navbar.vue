<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-content">
        <a href="#" class="logo">A.</a>
        
        <div class="nav-links" :class="{ 'active': mobileMenuOpen }">
          <a href="#about" @click="(e) => handleNavClick(e, '#about')">About</a>
          <a href="#skills" @click="(e) => handleNavClick(e, '#skills')">Skills</a>
          <a href="#work" @click="(e) => handleNavClick(e, '#work')">Work</a>
          <a href="#connect" @click="(e) => handleNavClick(e, '#connect')">Connect</a>
          
          <!-- Theme Toggle Button -->
          <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle theme">
            <div class="toggle-track">
              <div class="toggle-thumb" :class="{ 'light': isLight }">
                <svg v-if="!isLight" class="icon moon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
                <svg v-else class="icon sun" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2"/>
                  <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2"/>
                  <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2"/>
                  <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
            </div>
          </button>
        </div>

        <button class="mobile-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const mobileMenuOpen = ref(false)
const isLight = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const handleNavClick = (e, target) => {
  e.preventDefault()
  closeMobileMenu()
  
  // Wait for next tick to ensure Lenis is available
  setTimeout(() => {
    if (window.lenis) {
      window.lenis.scrollTo(target, {
        offset: -100,
        duration: 1.5
      })
    }
  }, 100)
}

const toggleTheme = () => {
  isLight.value = !isLight.value
  const root = document.documentElement
  
  if (isLight.value) {
    root.classList.add('light')
    localStorage.setItem('theme', 'light')
  } else {
    root.classList.remove('light')
    localStorage.setItem('theme', 'dark')
  }
}

onMounted(() => {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    isLight.value = true
    document.documentElement.classList.add('light')
  }
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: calc(100% - 4rem);
  max-width: 1200px;
  background: rgba(10, 10, 10, 0.6);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 1rem 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.navbar::before {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 3px;
  background: linear-gradient(90deg, 
    transparent, 
    var(--color-accent) 20%, 
    var(--color-accent) 80%, 
    transparent);
  border-radius: 50px;
  opacity: 0.6;
  filter: blur(2px);
}

:root.light .navbar {
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-accent);
  text-decoration: none;
  transition: all 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav-links a {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s ease;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: var(--color-accent);
}

.nav-links a:hover::after {
  width: 100%;
}

/* Theme Toggle Styles */
.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 1rem;
}

.toggle-track {
  width: 60px;
  height: 30px;
  background: var(--color-bg-tertiary);
  border: 2px solid var(--color-border);
  border-radius: 30px;
  position: relative;
  transition: all 0.3s ease;
}

.toggle-track:hover {
  border-color: var(--color-accent);
  box-shadow: 0 0 10px var(--color-accent-glow);
}

.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  background: var(--color-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, background 0.3s ease;
  color: var(--color-bg);
}

.toggle-thumb.light {
  transform: translateX(30px);
}

.icon {
  position: absolute;
  transition: all 0.3s ease;
}

.moon {
  animation: rotate 20s linear infinite;
}

.sun {
  animation: spin 10s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.mobile-toggle span {
  width: 25px;
  height: 2px;
  background: var(--color-accent);
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .navbar {
    width: calc(100% - 2rem);
    padding: 0.75rem 1.5rem;
  }

  .mobile-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 100px;
    right: -100%;
    flex-direction: column;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(20px);
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    width: 250px;
    transition: right 0.3s ease;
    align-items: flex-start;
  }

  :root.light .nav-links {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .nav-links.active {
    right: 1rem;
  }

  .nav-links a {
    font-size: 1.2rem;
  }
}
</style>
