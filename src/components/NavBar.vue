<template>
  <nav>
    <div class="logo">
      <a href="#home">Jurgehn</a>
    </div>
    <div class="menu-toggle" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul :class="{ open: menuOpen }">
      <li><a href="#home" @click="closeMenu">Home</a></li>
      <li><a href="#projects" @click="closeMenu">Projects</a></li>
      <li><a href="#contact" @click="closeMenu">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'NavBar',
  setup() {
    const menuOpen = ref(false);

    function toggleMenu() {
      menuOpen.value = !menuOpen.value;
    }

    function closeMenu() {
      menuOpen.value = false;
    }

    return { menuOpen, toggleMenu, closeMenu };
  }
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: var(--bg-dark);
  color: var(--text-light);
  border-bottom: 3px solid var(--primary);
  
}

.logo a {
  color: var(--text-light);
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
}

ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

ul li {
  cursor: pointer;
}

ul li a {
  color: var(--text-light);
  text-decoration: none;
  font-weight: 500;
}

ul li a:hover {
  color: var(--highlight);
  text-decoration: underline;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background-color: var(--text-light);
  border-radius: 2px;
}

/* Mobile styles */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  ul {
    position: fixed;
    top: 60px;
    right: -100%;
    flex-direction: column;
    background-color: var(--bg-dark);
    width: 200px;
    height: calc(100vh - 60px);
    gap: 20px;
    padding: 20px;
    transition: right 0.3s ease;
  }

  ul.open {
    right: 0;
  }

  ul li a {
    font-size: 1.1rem;
  }
}
</style>
