<template>
    <nav>
        <ul>
            <li><a href="#home">Jurghen</a></li>
        </ul>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="contact">Contact</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
        }
    },
    methods: {
    }
}

</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #333;
    color: white;
}
ul {
    list-style: none;
    display: flex;
    gap: 20px;
}
li {
    cursor: pointer;
}
a {
    color: white;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
</style>