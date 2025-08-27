<script setup>
import NavBar from './components/NavBar.vue';
import HeroPage from './components/HeroPage.vue';
import SkillSection from './components/SkillSection.vue';
import Projects from './components/Projects.vue';
import Certificates from './components/Certificates.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

import { SpeedInsights } from "@vercel/speed-insights/next"
</script>

<template>
  <div>
    <NavBar />
    <HeroPage />
    <SkillSection />
    <Projects />
    <Certificates />
    <Contact />
    <Footer />
    <SpeedInsights />
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

/* * {
  outline: 1px solid red;
} */

:root {
  --bg-main: #f9f8f3;
  --bg-dark: #0f172a;
  --bg-card: #1e293b;

  --text-dark: #1a1a1a;
  --text-light: #ffffff;

  --primary: #ffc930;
  --secondary: #b3d096;
  --accent: #88c176;

  --highlight: #facc15;
  --highlight-hover: #eab308;
}



section {
  min-height: 100vh;
}
</style>