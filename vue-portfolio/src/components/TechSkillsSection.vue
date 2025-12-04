<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const techSkills = [
  { name: 'C Programming', level: 'Expert', percent: 95 },
  { name: 'Memory Management', level: 'Expert', percent: 90 },
  { name: 'UNIX/Linux', level: 'Expert', percent: 90 },
  { name: 'Data Structures', level: 'Advanced', percent: 85 },
  { name: 'Algorithms', level: 'Advanced', percent: 80 },
  { name: 'Embedded Systems', level: 'Expert', percent: 92 },
  { name: 'Network Programming', level: 'Advanced', percent: 85 },
  { name: 'Debugging', level: 'Expert', percent: 95 },
]

const sectionRef = ref(null)
const isVisible = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect() // Animate once
      }
    })
  }, { threshold: 0.2 })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <section id="tech-skills" class="section-container" ref="sectionRef">
    <h2 class="section-title">Technical Skills.</h2>
    
    <div class="skills-grid">
      <div v-for="skill in techSkills" :key="skill.name" class="skill-card">
        <div class="skill-header">
          <span class="skill-name">{{ skill.name }}</span>
          <span class="skill-level">{{ skill.level }}</span>
        </div>
        
        <div class="progress-container">
          <div class="progress-bar" :style="{ width: isVisible ? skill.percent + '%' : '0%' }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-container {
  padding: 5rem 0;
  border-bottom: var(--border-width) solid var(--border-color);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-card {
  border: var(--border-width) solid var(--border-color);
  padding: 1.5rem;
  background: var(--bg-color);
  box-shadow: 6px 6px 0px var(--border-color);
  transition: all 0.1s;
}

.skill-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 8px 8px 0px var(--border-color);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1rem;
}

.skill-name {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 900;
  text-transform: uppercase;
  color: var(--text-color);
}

.skill-level {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-muted);
}

.progress-container {
  width: 100%;
  height: 1.5rem;
  border: 2px solid var(--border-color);
  background: transparent;
  position: relative;
}

.progress-bar {
  height: 100%;
  background: var(--text-color);
  transition: width 1s ease-out;
}
</style>
