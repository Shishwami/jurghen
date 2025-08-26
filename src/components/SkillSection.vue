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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 2rem;
  background-color: var(--bg-dark);
  color: var(--text-light);
}

.skills h2 {
  font-size: clamp(2rem, 5vw, 2.5rem);
  margin-bottom: 2.5rem;
  color: var(--primary);
}

.skill-category {
  margin-bottom: 3rem;
}

.skill-category h3 {
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  color: var(--accent);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.description {
  font-size: 1rem;
  color: var(--text-light);
  margin-bottom: 1.5rem;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  max-width: 900px;
  width: 100%;
}

.skill-card {
  flex: 1 1 250px;
  max-width: 280px;
  background-color: var(--bg-card);
  color: var(--text-light);
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card i {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  padding: 10px;
  border-radius: 8px;
}

.skill-card h4 {
  margin: 0.3rem 0;
  font-size: 1.1rem;
  color: var(--text-light);
}

.skill-card p {
  font-size: 0.9rem;
  color: var(--text-light);
}

.skill-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
}

/* Responsive fix */
@media (max-width: 1024px) {
  .skill-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .skill-list {
    grid-template-columns: 1fr;
  }
}
</style>
