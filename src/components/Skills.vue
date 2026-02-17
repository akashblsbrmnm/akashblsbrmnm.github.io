<template>
  <section id="skills" class="section">
    <div class="container">

      <h2 class="section-title">Technical Skills</h2>
      <p class="section-subtitle">
        From bare-metal C to Yocto build systems — the technologies and tools I use day to day.
      </p>

      <div class="skills-grid">
        <div class="skill-category card" v-for="category in categories" :key="category.name">
          <div class="category-header">
            <span class="category-icon">{{ category.icon }}</span>
            <h3 class="category-name">{{ category.name }}</h3>
          </div>
          <ul class="skill-list">
            <li class="skill-item" v-for="skill in category.skills" :key="skill.name">
              <div class="skill-dot" :style="{ background: skill.color }"></div>
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level">{{ skill.level }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="tools-section">
        <h3 class="tools-title">Tools & Technologies</h3>
        <div class="tools-grid">
          <span class="tool-tag card" v-for="tool in tools" :key="tool">{{ tool }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    name: 'Core Skills',
    icon: '💻',
    skills: [
      { name: 'C Programming', level: 'Expert', color: '#00599c' },
      { name: 'Memory Management', level: 'Expert', color: '#ef4444' },
      { name: 'Embedded Systems', level: 'Expert', color: '#f59e0b' },
      { name: 'Debugging', level: 'Expert', color: '#10b981' },
    ],
  },
  {
    name: 'Systems & Platform',
    icon: '🐧',
    skills: [
      { name: 'UNIX / Linux', level: 'Expert', color: '#fcc624' },
      { name: 'Network Programming', level: 'Advanced', color: '#6366f1' },
      { name: 'Data Structures', level: 'Advanced', color: '#8b5cf6' },
      { name: 'Algorithms', level: 'Advanced', color: '#ec4899' },
    ],
  },
]

const tools = [
  'C', 'C++', 'Shell', 'Linux', 'Vim', 'VS Code',
  'GitHub', 'CMake', 'Jenkins', 'Ubuntu', 'Docker',
  'RDK-B', 'Yocto',
]
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 48px;
}

.skill-category {
  padding: 32px;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.category-icon {
  font-size: 1.5rem;
}

.category-name {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.skill-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.skill-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  flex: 1;
}

.skill-level {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-text-muted);
  background: var(--glass-bg);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--glass-border);
  padding: 3px 10px;
  border-radius: 100px;
}

/* Tools section */
.tools-section {
  margin-top: 48px;
}

.tools-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--color-text-primary);
}

.tools-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tool-tag {
  padding: 10px 20px !important;
  border-radius: 100px !important;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text-secondary);
}

.tool-tag:hover {
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
