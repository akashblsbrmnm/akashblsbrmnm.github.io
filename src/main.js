import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import Lenis from 'lenis'

// Initialize Lenis smooth scrolling
const lenis = new Lenis({
  autoRaf: true,
})

const app = createApp(App)
app.provide('lenis', lenis)
app.mount('#app')
