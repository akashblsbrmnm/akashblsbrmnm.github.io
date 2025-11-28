<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p class="footer-text">
          Made with more <span class="emoji">☕</span> bugs than caffeine <span class="emoji">🐛</span>
        </p>
        <p class="copyright">© 2025 Akash Balasubramaniyam. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  padding: 2.5rem 0;
}

.footer-content {
  text-align: center;
}

.footer-text {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.8rem;
}

.emoji {
  display: inline-block;
  animation: bounce 2s ease-in-out infinite;
}

.emoji:nth-child(2) {
  animation-delay: 0.3s;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.copyright {
  font-size: 0.95rem;
  color: var(--color-text-tertiary);
}

@media (max-width: 768px) {
  .footer-text {
    font-size: 1rem;
  }

  .copyright {
    font-size: 0.85rem;
  }
}
</style>
