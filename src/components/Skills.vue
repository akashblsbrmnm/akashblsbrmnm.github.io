<template>
  <section id="skills" class="skills section">
    <div class="container">
      <h2 class="section-title">Skills & Technologies</h2>
      
      <div class="skills-grid">
        <!-- Languages -->
        <div class="skill-card" v-for="skill in skills" :key="skill.name">
          <div class="skill-icon-wrapper">
            <div class="skill-icon" v-html="skill.icon"></div>
          </div>
          <h3 class="skill-name">{{ skill.name }}</h3>
          <p class="skill-desc">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  {
    name: 'C/C++',
    description: 'Embedded systems & low-level programming',
    icon: `<svg viewBox="0 0 128 128"><path fill="currentColor" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM82.1 61.7h-7.3v7.3h-7.2v-7.3h-7.3V54.4h7.3V47h7.2v7.3h7.3v7.4zM85.5 72.8h-7.3v7.3h-7.2v-7.3h-7.3v-7.3h7.3v-7.3h7.2v7.3h7.3v7.3z"/></svg>`
  },
  {
    name: 'Linux',
    description: 'System programming & kernel development',
    icon: `<svg viewBox="0 0 128 128"><path fill="currentColor" d="M64 21.7c-2.9 0-5.3 2.4-5.3 5.3s2.4 5.3 5.3 5.3 5.3-2.4 5.3-5.3-2.4-5.3-5.3-5.3zm50.3 61.6c-1.6-3.2-4-7.4-6.8-12.1-1.2-2-2.5-4.1-3.8-6.2-.2-.2-.3-.5-.5-.7.2-.8.4-1.6.5-2.4.9-4.5 1.5-9.6 1.5-14.9 0-3.2-.2-6.4-.7-9.5-.8-5.4-2.4-10.5-4.9-14.8-3.7-6.5-9.1-11.4-15.8-13.9-2.5-1-5.1-1.6-7.8-2-1.4-.2-2.8-.3-4.1-.3-1.4 0-2.7.1-4.1.3-2.7.3-5.3.9-7.8 2-6.7 2.5-12.1 7.4-15.8 13.9-2.5 4.3-4.1 9.4-4.9 14.8-.5 3.1-.7 6.3-.7 9.5 0 5.3.6 10.4 1.5 14.9.2.8.3 1.6.5 2.4-.2.2-.3.5-.5.7-1.3 2.1-2.6 4.2-3.8 6.2-2.8 4.7-5.2 8.9-6.8 12.1-2.1 4.1-3.2 7.4-3.2 9.5 0 1.7.4 3.1 1.1 4.1.7 1 1.7 1.7 2.9 2.1 1.2.4 2.6.5 4 .3 1.4-.2 2.9-.7 4.4-1.5 3-1.6 6.2-4.3 9.3-7.9 2-2.4 3.9-5.1 5.6-8.1.9-1.5 1.7-3.1 2.5-4.7 1.9-3.9 3.5-8 4.7-12.2.8 0 1.5 0 2.3-.1.8 0 1.5 0 2.3.1 1.2 4.2 2.8 8.3 4.7 12.2.8 1.6 1.6 3.2 2.5 4.7 1.7 3 3.6 5.7 5.6 8.1 3.1 3.6 6.3 6.3 9.3 7.9 1.5.8 3 1.3 4.4 1.5 1.4.2 2.8 0 4-.3 1.2-.4 2.2-1.1 2.9-2.1.7-1 1.1-2.4 1.1-4.1 0-2.1-1.1-5.4-3.2-9.5zm-13.1 7.4c-.9.5-1.8.8-2.6.9-.8.1-1.5 0-2-.2-.6-.2-1-.5-1.3-.9-.3-.4-.5-.9-.5-1.5 0-1.1.7-2.8 1.8-5 .6-1.1 1.2-2.3 1.9-3.6h.1c.5 1 1 2 1.5 3 1.2 2.4 2 4.2 2 5.5 0 .5-.1 1-.3 1.3-.2.3-.4.4-.6.5zm-23.4-34.2c-.5-3.4-.8-6.9-.8-10.5 0-2.7.2-5.4.5-8 .6-4.4 1.8-8.5 3.6-11.9 2.7-5.1 6.7-8.5 11.5-10.2 1.8-.7 3.6-1.1 5.5-1.4 1-.1 2-.2 3.1-.2 1 0 2.1.1 3.1.2 1.9.3 3.7.7 5.5 1.4 4.8 1.7 8.8 5.1 11.5 10.2 1.8 3.4 3 7.5 3.6 11.9.3 2.6.5 5.3.5 8 0 3.6-.3 7.1-.8 10.5-.3 2-.6 3.9-1 5.8-.5 2.7-1.2 5.3-2 7.8-1.8 5.5-4.3 10.3-7.2 14.2-2.2 2.9-4.6 5.2-7.1 6.8-1.3.8-2.6 1.5-4 2-.7.3-1.5.5-2.2.6-.8.1-1.5.2-2.3.2-.8 0-1.5-.1-2.3-.2-.8-.1-1.5-.3-2.2-.6-1.4-.5-2.7-1.2-4-2-2.5-1.6-4.9-3.9-7.1-6.8-2.9-3.9-5.4-8.7-7.2-14.2-.8-2.5-1.5-5.1-2-7.8-.4-1.9-.7-3.8-1-5.8zM39.7 94.2c-.9-.5-1.8-.8-2.6-.9-.8-.1-1.5 0-2 .2-.6.2-1 .5-1.3.9-.3.4-.5.9-.5 1.5 0 1.3.8 3.1 2 5.5.5 1 1 2 1.5 3h.1c.7-1.3 1.3-2.5 1.9-3.6 1.1-2.2 1.8-3.9 1.8-5 0-.6-.2-1.1-.5-1.5-.3-.3-.5-.6-.6-.6-.1-.3-.3-.4-.8-.5z"/></svg>`
  },
  {
    name: 'RDK-B',
    description: 'Middleware & CCSP components',
    icon: `<svg viewBox="0 0 128 128"><path fill="currentColor" d="M64 14.5c-27.3 0-49.5 22.2-49.5 49.5s22.2 49.5 49.5 49.5 49.5-22.2 49.5-49.5-22.2-49.5-49.5-49.5zm0 12.4c20.5 0 37.1 16.6 37.1 37.1S84.5 101.1 64 101.1 26.9 84.5 26.9 64 43.5 26.9 64 26.9zm0 12.4c-13.7 0-24.8 11.1-24.8 24.8S50.3 88.8 64 88.8s24.8-11.1 24.8-24.8S77.7 39.3 64 39.3z"/></svg>`
  },
  {
    name: 'Yocto',
    description: 'Build system & layer creation',
    icon: `<svg viewBox="0 0 128 128"><path fill="currentColor" d="M64 20c-24.3 0-44 19.7-44 44s19.7 44 44 44 44-19.7 44-44-19.7-44-44-44zm0 8c19.9 0 36 16.1 36 36s-16.1 36-36 36-36-16.1-36-36 16.1-36 36-36zm0 10c-14.3 0-26 11.7-26 26s11.7 26 26 26 26-11.7 26-26-11.7-26-26-26zm0 12c7.7 0 14 6.3 14 14s-6.3 14-14 14-14-6.3-14-14 6.3-14 14-14z"/></svg>`
  },
  {
    name: 'Shell Script',
    description: 'Automation & system utilities',
    icon: `<svg viewBox="0 0 128 128"><path fill="currentColor" d="M109.7 8.4H18.3C12.9 8.4 8.4 12.9 8.4 18.3v91.4c0 5.4 4.5 9.9 9.9 9.9h91.4c5.4 0 9.9-4.5 9.9-9.9V18.3c0-5.4-4.5-9.9-9.9-9.9zM56.1 72.5l-8.1 8.1c-.9.9-2.4.9-3.3 0L27.9 63.8c-.9-.9-.9-2.4 0-3.3l16.8-16.8c.9-.9 2.4-.9 3.3 0l8.1 8.1c.9.9.9 2.4 0 3.3l-8.7 8.7 8.7 8.7c.9.9.9 2.4 0 3.3zm35.9 12.3H64.7c-1.3 0-2.4-1.1-2.4-2.4v-11.4c0-1.3 1.1-2.4 2.4-2.4H92c1.3 0 2.4 1.1 2.4 2.4v11.4c0 1.3-1.1 2.4-2.4 2.4z"/></svg>`
  },
  {
    name: 'GDB',
    description: 'Debugging & memory analysis',
    icon: `<svg viewBox="0 0 128 128"><path fill="currentColor" d="M64 14c-27.6 0-50 22.4-50 50s22.4 50 50 50 50-22.4 50-50-22.4-50-50-50zm0 10c22 0 40 18 40 40s-18 40-40 40-40-18-40-40 18-40 40-40zm-5 15v30h-15v10h15v15h10V79h15V69H74V39h-15z"/></svg>`
  },
  {
    name: 'Git',
    description: 'Version control & collaboration',
    icon: `<svg viewBox="0 0 128 128"><path fill="currentColor" d="M124.7 58.7L69.3 3.3c-4.4-4.4-11.6-4.4-16 0L41.1 15.5l13.9 13.9c4.7-1.6 10.1-.5 13.9 3.3 3.8 3.8 4.9 9.4 3.2 14.2l13.4 13.4c4.8-1.7 10.4-.6 14.2 3.2 5.4 5.4 5.4 14.1 0 19.5-5.4 5.4-14.1 5.4-19.5 0-4-4-5-9.9-3-14.8l-12.5-12.5v32.8c1.3.6 2.5 1.5 3.6 2.6 5.4 5.4 5.4 14.1 0 19.5-5.4 5.4-14.1 5.4-19.5 0-5.4-5.4-5.4-14.1 0-19.5 1.3-1.3 2.9-2.3 4.5-3V49.4c-1.6-.7-3.2-1.7-4.5-3-4-4-5.1-10-3.1-14.9L18 17.6 3.3 32.3c-4.4 4.4-4.4 11.6 0 16l55.4 55.4c4.4 4.4 11.6 4.4 16 0l55-55c4.4-4.4 4.4-11.6 0-16z"/></svg>`
  },
  {
    name: 'Docker',
    description: 'Containerization & deployment',
    icon: `<svg viewBox="0 0 128 128"><path fill="currentColor" d="M124.8 52.1c-1.1-.9-5.1-3.7-13.4-3.7-2.4 0-4.9.3-7.5.9-.2-1.4-.4-2.7-.7-4.1-.8-3.8-2.1-7.4-4-10.7-5.2-9.1-13.3-14.9-24.3-17.3-11.1-2.4-21.9-.8-32.3 4.7-8.5 4.5-14.9 11.2-19 20.1-2.1 4.6-3.5 9.5-4.2 14.6-.5 3.6-.7 7.2-.5 10.8.2 4.1.7 8.1 1.6 12 1.4 6.1 3.7 11.9 6.8 17.3 5.1 8.9 12 15.9 20.6 21 7.9 4.7 16.5 7.4 25.6 8.1 9.1.7 18-.7 26.6-4.3 7.1-3 13.5-7.2 19.1-12.5 5.6-5.3 10-11.5 13-18.6 1.5-3.6 2.6-7.3 3.2-11.1.4-2.5.6-5 .6-7.5 0-10.7-3.7-20.1-11.1-28.2zM70.3 14.9c8.5 0 16.1 2.9 22.8 8.6 6.7 5.7 11.2 13 13.4 21.9-2.2-.5-4.5-.8-6.8-.8-5.8 0-11.1 1.8-15.8 5.4-1.8-7.3-5.6-13.6-11.4-19-5.8-5.4-12.6-8.9-20.4-10.5 4.8-3.2 10.4-4.9 16.2-4.9.7 0 1.4.1 2 .3z"/></svg>`
  },
  {
    name: 'CMake',
    description: 'Build configuration & management',
    icon: `<svg viewBox="0 0 128 128"><path fill="currentColor" d="M64 4L4 124h120L64 4zm0 20l44 84H20l44-84z"/></svg>`
  },
  {
    name: 'Valgrind',
    description: 'Memory leak detection',
    icon: `<svg viewBox="0 0 128 128"><path fill="currentColor" d="M64 8C32.9 8 8 32.9 8 64s24.9 56 56 56 56-24.9 56-56S95.1 8 64 8zm0 100c-24.3 0-44-19.7-44-44s19.7-44 44-44 44 19.7 44 44-19.7 44-44 44zm20-68H44c-2.2 0-4 1.8-4 4v40c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V44c0-2.2-1.8-4-4-4zm-4 40H48V48h32v32z"/></svg>`
  },
  {
    name: 'WebPA',
    description: 'Remote device management',
    icon: `<svg viewBox="0 0 128 128"><path fill="currentColor" d="M64 12c-28.7 0-52 23.3-52 52s23.3 52 52 52 52-23.3 52-52-23.3-52-52-52zm0 12c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm-20 28v8h16v24h8V60h16v-8H44z"/></svg>`
  },
  {
    name: 'Networking',
    description: 'TCP/UDP, DHCP, NAT protocols',
    icon: `<svg viewBox="0 0 128 128"><path fill="currentColor" d="M64 8C32.9 8 8 32.9 8 64s24.9 56 56 56 56-24.9 56-56S95.1 8 64 8zm0 12c24.3 0 44 19.7 44 44s-19.7 44-44 44-44-19.7-44-44 19.7-44 44-44zm-24 20v48h16V52h16v36h16V40H40zm24 0v12h16V40H64z"/></svg>`
  }
]
</script>

<style scoped>
.skills {
  background: var(--color-bg);
  padding: 6rem 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.skill-card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: default;
  position: relative;
  overflow: hidden;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, var(--color-accent-glow), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.skill-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: var(--color-accent);
  box-shadow: 0 20px 60px rgba(255, 107, 53, 0.2);
}

.skill-card:hover::before {
  opacity: 1;
}

.skill-icon-wrapper {
  position: relative;
  margin-bottom: 1.5rem;
}

.skill-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  color: var(--color-accent);
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.skill-icon svg {
  width: 100%;
  height: 100%;
}

.skill-card:hover .skill-icon {
  transform: scale(1.1) rotate(5deg);
  filter: drop-shadow(0 0 20px var(--color-accent));
}

.skill-name {
  font-family: var(--font-grotesk);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
}

.skill-card:hover .skill-name {
  color: var(--color-accent);
}

.skill-desc {
  font-size: 0.95rem;
  color: var(--color-text-tertiary);
  line-height: 1.5;
  transition: color 0.3s ease;
}

.skill-card:hover .skill-desc {
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
  }

  .skill-card {
    padding: 2rem 1.5rem;
  }

  .skill-icon {
    width: 60px;
    height: 60px;
  }

  .skill-name {
    font-size: 1.3rem;
  }
}
</style>
