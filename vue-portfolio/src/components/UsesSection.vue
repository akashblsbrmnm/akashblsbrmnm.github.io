<script setup>
const usesData = [
  { type: 'Operating System', thing: 'Ubuntu / Linux' },
  { type: 'Mobile Phone', thing: 'Redmi K20 Pro' },
  { type: 'Mobile OS', thing: 'Android' },
  { type: 'Browser', thing: 'Brave, Firefox' },
  { type: 'Text Editor', thing: 'VS Code, Vim' },
  { type: 'Keyboard Layout', thing: 'US English' },
  { type: 'Favorite Movie', thing: 'The Secret Life of Walter Mitty' },
  { type: 'Favorite Game', thing: "Assassin's Creed 3" },
]
</script>

<template>
  <section id="uses" class="section-container">
    <h2 class="section-title">Akash Uses.</h2>
    
    <div class="uses-content">
      <table class="uses-table">
        <tbody>
          <tr v-for="item in usesData" :key="item.type">
            <td class="category-cell">{{ item.type }}</td>
            <td class="thing-cell">{{ item.thing }}</td>
          </tr>
          <tr>
            <td class="category-cell">Favorite Song</td>
            <td class="thing-cell spotify-cell">
              <!-- Spotify Placeholder -->
              <div class="spotify-placeholder">
                <span class="spotify-text">Spotify Playlist Placeholder</span>
                <div class="spotify-bars">
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
.section-container {
  padding: 5rem 0;
  border-bottom: var(--border-width) solid var(--border-color);
}

.uses-table {
  width: 100%;
  border-collapse: collapse;
  border: var(--border-width) solid var(--border-color);
  font-family: var(--font-mono);
  text-transform: none;
}

th, td {
  padding: 1.5rem;
  border: var(--border-width) solid var(--border-color);
  text-align: left;
}

th {
  background: var(--text-color);
  color: var(--bg-color);
  font-weight: 900;
  font-size: 1.25rem;
  font-family: var(--font-display);
}

td {
  font-weight: 700;
  color: var(--text-color);
}

.category-cell {
  width: 40%;
  font-weight: 900;
}

.thing-cell {
  width: 60%;
}

.spotify-placeholder {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border: 2px dashed var(--text-muted);
  color: var(--text-muted);
}

.spotify-bars {
  display: flex;
  gap: 3px;
  align-items: flex-end;
  height: 20px;
}

.bar {
  width: 4px;
  background: var(--text-muted);
  animation: equalize 1s infinite;
}

.bar:nth-child(1) { height: 60%; animation-delay: 0s; }
.bar:nth-child(2) { height: 100%; animation-delay: 0.2s; }
.bar:nth-child(3) { height: 50%; animation-delay: 0.4s; }
.bar:nth-child(4) { height: 80%; animation-delay: 0.1s; }

@keyframes equalize {
  0% { height: 20%; }
  50% { height: 100%; }
  100% { height: 20%; }
}

@media (max-width: 768px) {
  th, td {
    padding: 1rem;
    display: block;
    width: 100%;
  }
  
  th {
    display: none; /* Hide headers on mobile */
  }
  
  tr {
    display: block;
    margin-bottom: 2rem;
    border: var(--border-width) solid var(--border-color);
  }
  
  td {
    border: none;
    border-bottom: 1px solid var(--border-color);
  }
  
  td:last-child {
    border-bottom: none;
  }
  
  .category-cell {
    background: var(--text-color);
    color: var(--bg-color);
  }
}
</style>
