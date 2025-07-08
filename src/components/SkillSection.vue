<template>
  <section class="skills" id="skills">
    <h2>Skills</h2>

    <div v-for="(category, index) in skillCategories" :key="index" class="skill-category">
      <h3><i :class="category.icon"></i> {{ category.title }}</h3>
      <p class="description">{{ category.description }}</p>

      <div class="skill-list">
        <div v-for="(skill, i) in category.skills" :key="i" class="skill-card">
          <i :class="skill.icon" :style="{ color: skill.color }"></i>
          <h4>{{ skill.name }}</h4>
          <p>{{ skill.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import skillCategories from '../assets/Data/skills.json';

export default {
  name: 'Skills',
  data() {
    return {
      skillCategories
    };
  }
};
</script>

<style scoped>
.skills {
  padding: 3rem 2rem;
  max-width: 800px;
  margin: auto;
  text-align: center;
}

.skills h2 {
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: #facc15;
}

.skill-category {
  margin-bottom: 3rem;
}

.skill-category h3 {
  font-size: 1.6rem;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.description {
  font-size: 1rem;
  color: #94a3b8;
  margin-bottom: 1.5rem;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.skill-card {
  background-color: #1e293b;
  color: #f1f5f9;
  border-radius: 1rem;
  padding: 1rem;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card i {
  padding: 5px;
  background-color: #f1f5f9;
  border-radius: 5px;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

.skill-card i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.skill-card h4 {
  margin: 0.3rem 0;
  font-size: 1.1rem;
  color: #facc15;
}

.skill-card p {
  font-size: 0.85rem;
  color: #cbd5e1;
}
</style>
