<template>
    <section>

        <div class="description">

            <!-- An aspiring
                    <span class="colored" bold >Entry-level Web and Software Developer</span>
                    with a diploma in <span class="colored">Information Techonology</span>
                    and
                    a strong
                    foundation in <span class="large">web technologies</span>. -->

            <p>
                <span class="medium colored">Hi, I'm Eugene Peralta.</span><br>
                <span class="large colored">Entry-Level Full-Stack<br>Web & Software Developer</span>
            </p>
            <p>
                I enjoy solving problems, building clean user interfaces, and learning new technologies.
                I'm currently seeking opportunities where I can contribute to real-world projects and grow as a
                developer.
            </p>
            <div>

            </div>
            <div class="connect">
                <p class="colored">Let's connect and build something great together!</p>

                <div class="buttons">
                    <a href="#contact" class="contact-btn">Contact Me</a>
                    <a href="#" target="_blank" class="icon-btn">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="#" target="_blank" class="icon-btn">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </div>
        <div>
            <img src="" alt="">
        </div>

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
    display: grid;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;

    align-items: center;
    justify-content: center;
    padding: 20px;
    min-height: 100vh;
    width: 100%;
}

.description {
    font-size: 1.2em;
    line-height: 1.6;
    padding: 20px;
}

.medium {
    font-size: 1.25rem;
    font-weight: 500;
}

.large {
    font-size: 2rem;
    font-weight: bold;
}

.colored {
    color: #ffab2c;
}




.connect {
    text-align: center;
    padding: 2rem;
}

.buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    flex-wrap: wrap;
}

.icon-btn {
    background-color: #1f2937;
    color: #facc15;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 1.2rem;
    transition: background 0.3s ease, transform 0.2s ease;
}
</style>