<template>
    <header>
        <nav class="container">
            <div class="branding">
                <RouterLink to="/">KobiBlogs</RouterLink>
            </div>
            <ul class="nav-links" :class="{ active: state.isActive }">
                <li>
                    <RouterLink to="/home" @click="closeNavMenu"
                        >Home</RouterLink
                    >
                </li>
                <li>
                    <RouterLink to="/blogs" @click="closeNavMenu"
                        >Blogs</RouterLink
                    >
                </li>
                <li>
                    <RouterLink to="/create-blog" @click="closeNavMenu"
                        >Create Post</RouterLink
                    >
                </li>
                <li>
                    <RouterLink to="/loginpage" @click="closeNavMenu"
                        >Login/Register</RouterLink
                    >
                </li>
            </ul>
            <div
                class="burger"
                @click="toggleNavMenu"
                :class="{ active: state.isActive }"
            >
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </header>
</template>

<script setup>
    import { RouterLink } from "vue-router";
    import { reactive } from "vue";
    const state = reactive({
        isActive: false,
    });

    const toggleNavMenu = () => {
        state.isActive = !state.isActive;
    };

    const closeNavMenu = () => {
        state.isActive = false;
    };
</script>

<style scoped>
    .branding a {
        font-size: 1.2rem;
        font-weight: 700;
    }

    a {
        text-decoration: none;
        color: rgb(2, 2, 15);
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2em;
    }

    .container ul {
        display: flex;
        gap: 2em;
    }
    .container ul li {
        list-style: none;
    }

    .container ul li a:hover {
        color: hsl(245, 75%, 52%);
    }

    .burger {
        cursor: pointer;
        z-index: 9999;
    }

    .bar {
        width: 25px;
        height: 2px;
        background-color: black;
        display: block;
        margin: 5px auto;
        transition: all 0.3s ease-in-out;
    }

    .nav-links {
        position: fixed;
        z-index: 1000;
        inset: 0 0 0 30%;
        display: flex;
        flex-direction: column;
        gap: 2em;
        padding: min(30vh, 10rem) 2em;
        background: hsl(0 0% 100% / 0.7);
        backdrop-filter: blur(1rem);
        transform: translateX(100%);
        transition: transform 350ms ease-out;
    }

    .burger.active .bar:nth-child(2) {
        opacity: 0;
    }

    .burger.active .bar:nth-child(1) {
        transform: rotate(45deg) translateY(10px);
    }

    .burger.active .bar:nth-child(3) {
        transform: rotate(-45deg) translateY(-10px);
    }

    .nav-links.active {
        transform: translateX(0%);
    }

    @media (min-width: 35em) {
        nav {
            padding: 2em;
        }
        .burger {
            display: none;
        }
        .nav-links {
            transform: translateX(0%);
            position: static;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0;
        }
    }
</style>
