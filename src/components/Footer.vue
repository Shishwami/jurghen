<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; {{ new Date().getFullYear() }} Eugene Peralta. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #0f172a;
  padding: 1.5rem 2rem;
  text-align: center;
  color: #94a3b8;
}
.footer-content {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}
.footer p {
  font-size: 0.9rem;
}
.footer-socials {
  display: flex;
  gap: 1rem;
}
.icon-btn {
  background-color: #1e293b;
  color: #facc15;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transition: background 0.3s ease, transform 0.2s ease;
}
.icon-btn:hover {
  background-color: #334155;
  transform: scale(1.1);
}
</style>
