<script setup>
import { ref } from 'vue'

const skills = [
  { name: 'C', icon: 'C.svg', category: 'language' },
  { name: 'C++', icon: 'CPP.svg', category: 'language' },
  { name: 'Bash', icon: 'Bash-Dark.svg', category: 'language' },
  { name: 'Linux', icon: 'Linux-Dark.svg', category: 'core' },
  { name: 'VIM', icon: 'VIM-Dark.svg', category: 'tool' },
  { name: 'VSCode', icon: 'VSCode-Dark.svg', category: 'tool' },
  { name: 'GitHub', icon: 'Github-Dark.svg', category: 'tool' },
  { name: 'CMake', icon: 'CMake-Dark.svg', category: 'tool' },
  { name: 'Jenkins', icon: 'Jenkins-Dark.svg', category: 'tool' },
  { name: 'Ubuntu', icon: 'Ubuntu-Dark.svg', category: 'core' },
  { name: 'Docker', icon: 'Docker.svg', category: 'tool' },
  { name: 'RDK-B', icon: null, text: 'RDK-B', category: 'domain' },
  { name: 'Yocto', icon: null, text: 'Yocto', category: 'domain' },
  { name: 'Embedded', icon: null, text: 'Embedded', category: 'domain' },
]

const getImageUrl = (name) => {
  if (!name) return null
  return new URL(`../assets/${name}`, import.meta.url).href
}

// Random float animation duration for each item
const getAnimationDelay = (index) => {
  return `${index * 0.2}s`
}

const getAnimationDuration = (index) => {
  return `${3 + (index % 3)}s`
}
</script>

<template>
  <section id="skills" class="section-container">
    <h2 class="section-title">skills & fun.</h2>
    
    <div class="skills-playground">
      <div 
        v-for="(skill, index) in skills" 
        :key="skill.name"
        class="skill-bubble"
        :class="skill.category"
        :style="{ 
          animationDelay: getAnimationDelay(index),
          animationDuration: getAnimationDuration(index)
        }"
      >
        <div class="bubble-content">
          <img 
            v-if="skill.icon"
            :src="getImageUrl(skill.icon)" 
            :alt="skill.name"
            class="skill-icon"
          />
          <span v-else class="skill-text">{{ skill.text }}</span>
        </div>
        <div class="bubble-glow"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-container {
  padding: 5rem 0;
  overflow: hidden; /* Keep bubbles contained */
}

.skills-playground {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  perspective: 1000px;
}

.skill-bubble {
  position: relative;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: float ease-in-out infinite;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Category specific tints */
.skill-bubble.language { border-color: rgba(249, 115, 22, 0.3); }
.skill-bubble.core { border-color: rgba(59, 130, 246, 0.3); }
.skill-bubble.tool { border-color: rgba(16, 185, 129, 0.3); }
.skill-bubble.domain { border-color: rgba(139, 92, 246, 0.3); }

.skill-bubble:hover {
  transform: scale(1.2) translateY(-10px) !important; /* Override animation transform */
  z-index: 10;
  border-color: var(--accent-color);
  box-shadow: 0 0 40px rgba(249, 115, 22, 0.5); /* Increased glow */
}

.bubble-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;
}

.skill-icon {
  width: 3rem;
  height: 3rem;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.skill-bubble:hover .skill-icon {
  transform: rotate(10deg) scale(1.1);
}

.skill-text {
  font-weight: 700;
  font-size: 1rem;
  color: var(--text-color);
}

/* Removed caption styles */

.bubble-glow {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1), transparent);
  opacity: 0.5;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .skill-bubble {
    width: 5.5rem;
    height: 5.5rem;
  }
  
  .skill-icon {
    width: 2.25rem;
    height: 2.25rem;
  }
  
  .skill-name {
    display: none; /* Hide text on mobile to keep it clean */
  }
}
</style>
