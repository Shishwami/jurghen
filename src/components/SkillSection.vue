<template>
  <section class="skills" id="skills">
    <h2>Skills</h2>

    <div class="skill-category">
      <h3>Languages</h3>
      <div class="skill-list">
        <span>Java</span>
        <span>JavaScript</span>
        <span>PHP</span>
        <span>Python</span>
        <span>C#</span>
        <span>SQL</span>
      </div>
    </div>

    <div class="skill-category">
      <h3>Web</h3>
      <div class="skill-list">
        <span>HTML</span>
        <span>CSS</span>
        <span>SCSS</span>
        <span>React.js</span>
        <span>D3.js</span>
        <span>Node.js</span>
      </div>
    </div>

    <div class="skill-category">
      <h3>Databases</h3>
      <div class="skill-list">
        <span>MySQL</span>
        <span>MongoDB</span>
      </div>
    </div>

    <div class="skill-category">
      <h3>Tools</h3>
      <div class="skill-list">
        <span>Git</span>
        <span>XAMPP</span>
        <span>Visual Studio</span>
        <span>VS Code</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills'
}
</script>

<style scoped>
.skills {
  padding: 3rem 2rem;
  max-width: 900px;
  margin: auto;
  text-align: center;
}

.skills h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #facc15;
}

.skill-category {
  margin-bottom: 2rem;
}

.skill-category h3 {
  font-size: 1.2rem;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.skill-list span {
  background-color: #1e293b;
  color: #facc15;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: background 0.3s ease;
}

.skill-list span:hover {
  background-color: #334155;
}
</style>
