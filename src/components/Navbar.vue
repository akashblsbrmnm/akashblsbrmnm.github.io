<template>
  <nav class="navbar" :class="{ scrolled: isScrolled, 'navbar-expanded': menuOpen }">
    <div class="navbar-inner">
      <a href="#" class="navbar-logo" @click.prevent="handleNavClick('#portfolio')">
        <span class="logo-bracket">&lt;</span>
        <span class="logo-name">Akash</span>
        <span class="logo-bracket">/&gt;</span>
      </a>
      <ul class="navbar-links">
        <li><a href="#about" @click.prevent="handleNavClick('#about')">About</a></li>
        <li><a href="#skills" @click.prevent="handleNavClick('#skills')">Skills</a></li>
        <li><a href="#experience" @click.prevent="handleNavClick('#experience')">Experience</a></li>
        <li><a href="#connect" @click.prevent="handleNavClick('#connect')">Connect</a></li>
      </ul>
      <div class="navbar-right">
        <button class="theme-toggle" @click="toggleTheme" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
          <transition name="icon-fade" mode="out-in">
            <svg v-if="isDark" key="sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg v-else key="moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </transition>
        </button>
        <button
          class="navbar-toggle"
          :class="{ active: menuOpen }"
          @click="menuOpen = !menuOpen"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile expanded row -->
    <div class="navbar-mobile" :class="{ open: menuOpen }">
      <ul class="mobile-links">
        <li><a href="#about" @click.prevent="handleNavClick('#about')">About</a></li>
        <li><a href="#skills" @click.prevent="handleNavClick('#skills')">Skills</a></li>
        <li><a href="#experience" @click.prevent="handleNavClick('#experience')">Experience</a></li>
        <li><a href="#connect" @click.prevent="handleNavClick('#connect')">Connect</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)
const isDark = ref(false)
const lenis = inject('lenis')

const handleNavClick = (targetId) => {
  menuOpen.value = false // Close mobile menu if open
  
  if (lenis) {
    lenis.scrollTo(targetId, {
      offset: -20, // Optional offset to handle fixed header or spacing
      duration: 1.2, // Smooth ease duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Visual ease
    })
  } else {
    // Fallback if lenis isn't available
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

const closeMenu = () => { menuOpen.value = false }

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const handleScroll = () => { isScrolled.value = window.scrollY > 40 }

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  const saved = localStorage.getItem('theme')
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light')
  } else {
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})

onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
/* ── Navbar — full-width at top, floating bar on scroll ─── */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  margin: 0 auto;
  max-width: 2000px;
  background: var(--color-bg);
  border: 1px solid transparent;
  border-radius: 0;
  transition:
    background 0.4s cubic-bezier(0.22, 0.61, 0.36, 1),
    border-color 0.4s cubic-bezier(0.22, 0.61, 0.36, 1),
    border-radius 0.4s cubic-bezier(0.22, 0.61, 0.36, 1),
    box-shadow 0.4s cubic-bezier(0.22, 0.61, 0.36, 1),
    top 0.4s cubic-bezier(0.22, 0.61, 0.36, 1),
    max-width 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
  display: flex;
  flex-direction: column;
}

.navbar.scrolled {
  top: 14px;
  max-width: 880px;
  /* Liquid glass base */
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  
  /* Visible border */
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  
  /* Glass shadow */
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 1px 4px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* Ensure glass effect persists or adapts when menu is open on mobile */
@media (max-width: 768px) {
  .navbar.navbar-expanded {
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.3);
    /* If we are at top (not scrolled) but menu opens, we might want to look like scrolled or stay flat. 
       Let's force 'scrolled' look or similar for consistency if user wants unified glass. */
  }
  
  /* If invalid-scrolled state (top of page), and menu opens, 
     we should usually enforce the background so links are visible over content. 
     Let's rely on .navbar-expanded adding glass if not scrolled? 
     Or just let 'scrolled' handle it. 
     If user is at top, background is var(--color-bg). 
     If menu opens at top, maybe we should switch to glass? 
     Let's add glass properties to .navbar-expanded as well. */
}

[data-theme="dark"] .navbar.scrolled,
[data-theme="dark"] .navbar.navbar-expanded {
  /* Dark liquid glass */
  background: rgba(0, 0, 0, 0.1);
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.6),
    0 1px 4px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.navbar-inner {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 64px;
  position: relative;
  z-index: 1001;
}

/* ── Logo ─── */
.navbar-logo {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  display: flex;
  gap: 2px;
  justify-self: start;
}

.logo-bracket {
  color: var(--color-accent);
  font-weight: 400;
}

.logo-name {
  color: var(--color-text-primary);
}

/* ── Links ─── */
.navbar-links {
  display: flex;
  gap: 4px;
  justify-self: center;
}

.navbar-links li a {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  padding: 8px 16px;
  border-radius: 100px;
  transition: all var(--transition-fast);
}

.navbar-links li a:hover {
  color: var(--color-text-primary);
  background: var(--glass-bg-hover);
}

/* ── Right side ─── */
.navbar-right {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-self: end;
}

/* ── Theme toggle ─── */
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: var(--color-text-secondary);
  transition: all var(--transition-fast);
}

.theme-toggle:hover {
  color: var(--color-accent);
  background: var(--glass-bg-hover);
  transform: rotate(15deg);
}

.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.icon-fade-enter-from {
  opacity: 0; transform: rotate(-90deg) scale(0.6);
}
.icon-fade-leave-to {
  opacity: 0; transform: rotate(90deg) scale(0.6);
}

/* ── Hamburger ─── */
.navbar-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
}

.navbar-toggle span {
  display: block;
  width: 18px;
  height: 1.5px;
  background: var(--color-text-secondary);
  border-radius: 2px;
  transition: all var(--transition-fast);
}

.navbar-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(3px, 4px);
}
.navbar-toggle.active span:nth-child(2) {
  opacity: 0;
}
.navbar-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(3px, -4px);
}

/* ── Mobile Expanding Row ─── */
.navbar-mobile {
  display: none; /* Hidden by default */
  width: 100%;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
  border-top: 1px solid transparent;
}

.navbar-mobile.open {
  max-height: 200px; /* Arbitrary large enough height */
  opacity: 1;
  padding-bottom: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-links {
  display: flex;
  flex-direction: row; /* Horizontal layout as requested */
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px 0;
  list-style: none;
  margin: 0;
}

.mobile-links li a {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  padding: 8px 16px;
  border-radius: 100px;
  display: inline-block; /* Button like */
  background: rgba(255, 255, 255, 0.05); /* Slight fill for buttons */
  transition: all var(--transition-fast);
}

.mobile-links li a:hover {
  color: var(--color-text-primary);
  background: var(--glass-bg-hover);
}

/* ── Mobile Media Query ─── */
@media (max-width: 768px) {
  .navbar-inner {
    display: flex;
    justify-content: space-between;
  }

  .navbar-links { display: none; }
  .navbar-toggle { display: flex; }
  .navbar-inner { padding: 0 16px; }
  
  .navbar-mobile {
    display: block; /* But hidden by max-height/opacity logic */
  }

  .navbar.scrolled {
    max-width: calc(100% - 32px);
  }
  
  /* When expanded, we might want to ensure it looks contained */
  .navbar.navbar-expanded {
    max-width: calc(100% - 32px);
    top: 14px;
    border-radius: 20px;
  }
}
</style>
