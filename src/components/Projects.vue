<template>
    <section class="projects" id="projects">
        <h2>My Projects</h2>
        <div class="project-grid">
            <div class="project-card" v-for="project in projects" :key="project.title">
                <img :src="project.image" :alt="project.title" class="project-image" />
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <div class="project-links">
                    <a :href="project.live" target="_blank" class="btn">Live Demo</a>
                    <a :href="project.repo" target="_blank" class="btn-outline">GitHub</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import projects from '../assets/Data/projects.json'

export default {
    name: 'Projects',
    data() {
        return { projects }
    }
}
</script>

<style scoped>
.projects {
    padding: 4rem 2rem;
    text-align: center;
    background-color: #0f172a;
}

.projects h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #facc15;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.project-card {
    background-color: #1e293b;
    border-radius: 12px;
    padding: 1.5rem;
    color: white;
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
}

.project-image {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 1rem;
}

.project-links {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.btn,
.btn-outline {
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-weight: 600;
}

.btn {
    background-color: #facc15;
    color: #1a1a1a;
}

.btn-outline {
    border: 2px solid #facc15;
    color: #facc15;
}

.btn:hover,
.btn-outline:hover {
    background-color: #eab308;
    color: #1a1a1a;
}
</style>
