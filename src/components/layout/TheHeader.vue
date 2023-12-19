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
                    <RouterLink
                        v-if="!user"
                        to="/loginpage"
                        @click="closeNavMenu"
                        >Login/Register</RouterLink
                    >
                </li>
            </ul>
            <div
                v-if="user"
                @click="toggleProfileMenu"
                class="profile"
                ref="profile"
            >
                <span>{{ store.state.profileInitials }}</span>
                <div v-show="profileMenu" class="profle-menu">
                    <div class="info">
                        <p class="initials">
                            {{ store.state.profileInitials }}
                        </p>
                        <div class="right">
                            <p>
                                {{ store.state.profileFirstName }}
                                {{ store.state.profileLastName }}
                            </p>
                            <p>{{ store.state.profileUsername }}</p>
                            <p>{{ store.state.profileEmail }}</p>
                        </div>
                    </div>
                    <div class="options">
                        <div class="option">
                            <RouterLink class="option" to="/profile">
                                <Icon
                                    icon="mdi:user-outline"
                                    color="white"
                                    width="30"
                                    class="icon"
                                />
                                <p>Profile</p>
                            </RouterLink>
                        </div>
                        <div class="option">
                            <RouterLink class="option" to="/admin">
                                <Icon
                                    icon="ri:admin-line"
                                    color="white"
                                    width="30"
                                    class="icon"
                                />
                                <p>Admin</p>
                            </RouterLink>
                        </div>
                        <div @click="logUserOut" class="option">
                            <Icon
                                icon="material-symbols:logout"
                                color="white"
                                width="30"
                                class="icon"
                            />
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
            </div>
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
    import { reactive, ref, computed } from "vue";
    import { useStore } from "vuex";
    import { Icon } from "@iconify/vue";
    import { getAuth, signOut } from "firebase/auth";
    import { firebaseApp } from "@/firebase/firebaseInit";

    const store = useStore();
    const state = reactive({
        isActive: false,
    });

    const profileMenu = ref(null);
    const profile = ref(null);

    const toggleNavMenu = () => {
        state.isActive = !state.isActive;
    };

    const closeNavMenu = () => {
        state.isActive = false;
    };

    const toggleProfileMenu = (e) => {
        if (e.target === profile.value) {
            profileMenu.value = !profileMenu.value;
        }
    };

    const logUserOut = () => {
        const auth = getAuth(firebaseApp);
        signOut(auth);
        window.location.reload();
    };

    const user = computed(() => {
        return store.state.user;
    });
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

    .profile {
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #fff;
        background-color: #303030;
    }

    .profile span {
        pointer-events: none;
    }

    .profle-menu {
        position: absolute;
        top: 60px;
        right: 0;
        width: 250px;
        background-color: #303030;
        box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .info {
        display: flex;
        align-items: center;
        padding: 15px;
        border-bottom: 1px solid #fff;
    }

    .initials {
        position: initial;
        width: 40px;
        height: 40px;
        background-color: #fff;
        color: #303030;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }

    .right {
        flex: 1;
        margin-left: 24px;
    }

    .right p:nth-child(1) {
        font-size: 14px;
    }

    .right p:nth-child(2),
    .right p:nth-child(3) {
        font-size: 12px;
    }

    .options {
        padding: 15px;
    }

    .option {
        text-decoration: none;
        color: #fff;
        display: flex;

        align-items: center;
        margin-bottom: 12px;
    }

    .option .icon {
        width: 18px;
        height: auto;
    }

    .option p {
        font-size: 14px;
        margin-left: 12px;
    }

    .option:last-child {
        margin-bottom: 0px;
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
