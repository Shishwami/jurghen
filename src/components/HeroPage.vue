<template>
    <section id="home">

        <div class="description">

            <!-- An aspiring
                    <span class="colored" bold >Entry-level Web and Software Developer</span>
                    with a diploma in <span class="colored">Information Techonology</span>
                    and
                    a strong
                    foundation in <span class="large">web technologies</span>. -->

            <p>
                <span class="large">Hi, I'm Eugene Peralta.</span><br>
                <span class="larger gradient-text">Entry-Level Full-Stack<br>Web & Software Developer</span>
            </p>
            <p class="description-text">
                I enjoy solving problems, building clean user interfaces, and learning new technologies.
                I'm currently seeking opportunities where I can contribute to real-world projects and grow as a
                developer.
            </p>
            <div>

            </div>
            <div class="connect">
                <p class="connect-desc">Let's connect and build something great together!</p>

                <div class="buttons">
                    <span>
                        <a href="#contact" class="contact-btn">Contact Me</a>
                    </span>
                    <span>
                        <a href="#" target="_blank" class="icon-btn">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="#" target="_blank" class="icon-btn">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </span>
                </div>
            </div>
        </div>
        <!-- <div>
            <img src="" alt="">
        </div> -->

    </section>
</template>

<script>
export default {
    name: 'HeroPage',
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style scoped>
section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    min-height: 100vh;
    width: 100%;
    background-color: var(--bg-dark);
    color: var(--text-light);
}

.description {
    font-size: 1.1rem;
    line-height: 1.6;
    padding: 1.5rem;
    max-width: 650px;
    width: 100%;
    text-align: center;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeUp 0.8s ease forwards;
}

.description-text {
    padding: 1rem;
    border-radius: 1rem;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeUp 0.8s ease forwards;
    animation-delay: 0.3s;
}

.large {
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: bold;
}

.larger {
    font-size: clamp(2rem, 6vw, 3rem);
    font-weight: 900;
}

.gradient-text {
    font-weight: 900;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
}

.colored {
    color: var(--primary);
}

.connect {
    text-align: center;
    padding: 2rem;
    margin-top: 2rem;
    background-color: var(--bg-card);
    color: var(--text-light);
    border-radius: 1rem;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeUp 0.8s ease forwards;
    animation-delay: 0.6s;
}

.connect-desc {
    font-size: clamp(1rem, 2vw, 1.2rem);
    margin-bottom: 1rem;
}

.contact-btn {
    text-decoration: none;
    background-color: var(--primary);
    color: var(--text-dark);
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeUp 0.8s ease forwards;
    animation-delay: 0.9s;
}

.contact-btn:hover {
    background-color: var(--accent);
    color: var(--text-dark);
}

.buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    flex-wrap: wrap;
}

.buttons span {
    display: flex;
}

.icon-btn {
    background-color: var(--primary);
    margin: 0 0.5rem;
    color: var(--text-dark);
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeUp 0.8s ease forwards;
}

.buttons .icon-btn:nth-of-type(1) {
    animation-delay: 1.1s;
}

.buttons .icon-btn:nth-of-type(2) {
    animation-delay: 1.3s;
}

.buttons .icon-btn:nth-of-type(3) {
    animation-delay: 1.5s;
}

.icon-btn:hover {
    transform: scale(1.1);
    background-color: var(--accent);
    color: var(--text-dark);
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    section {
        padding: 1.5rem;
        flex-direction: column;
    }

    .description {
        padding: 1rem;
    }

    .connect {
        padding: 1.5rem;
    }
}
</style>