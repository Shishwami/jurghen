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
        <div class="more-projects-link">
            <a href="https://github.com/Shishwami?tab=repositories" target="_blank" rel="noopener">
                View More Projects on GitHub
            </a>
        </div>
    </section>
</template>

<script>
import projectData from '../assets/Data/projects.json';

const images = import.meta.glob('/src/assets/images/projects/*', {
    eager: true,
    import: 'default'
});

export default {
    name: 'Projects',
    data() {
        return {
            projects: projectData.map(project => ({
                ...project,
                image: images[`../assets/images/projects/${project.image}`]
            }))
        };
    }
};
</script>

<style scoped>
.projects {
    padding: 4rem 2rem;
    text-align: center;
    background-color: var(--bg-dark, #0f172a);
}

.projects h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--highlight, #facc15);
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.project-card {
    background-color: var(--bg-card, #1e293b);
    border-radius: 12px;
    padding: 1.5rem;
    color: var(--text-light, white);
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
    transition: background-color 0.3s ease;
}

.btn {
    background-color: var(--highlight, #facc15);
    color: var(--text-dark, #1a1a1a);
}

.btn-outline {
    border: 2px solid var(--highlight, #facc15);
    color: var(--highlight, #facc15);
}

.btn:hover,
.btn-outline:hover {
    background-color: var(--highlight-hover, #eab308);
    color: var(--text-dark, #1a1a1a);
}

.more-projects-link {
    margin-top: 2rem;
    text-align: center;
}

.more-projects-link a {
    color: var(--highlight, #facc15);
    font-weight: bold;
    text-decoration: none;
    border: 2px solid var(--highlight, #facc15);
    padding: 0.5rem 1rem;
    border-radius: 6px;
    transition: background-color 0.3s, color 0.3s;
}

.more-projects-link a:hover {
    background-color: var(--highlight, #facc15);
    color: var(--text-dark, #1a1a1a);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .project-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
}

@media (max-width: 640px) {
    .project-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .projects h2 {
        font-size: 1.75rem;
    }

    .btn,
    .btn-outline,
    .more-projects-link a {
        width: 100%;
        text-align: center;
    }
}
</style>
