<script setup>
    import { RouterView } from "vue-router";
    import TheHeader from "@/components/layout/TheHeader.vue";
    import TheFooter from "@/components/layout/TheFooter.vue";
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { firebaseApp } from "@/firebase/firebaseInit.js";

    import { provide, ref, onMounted } from "vue";

    import { useStore } from "vuex";

    const store = useStore();

    const blogCards = ref([
        {
            blogTitle: "The Future of Cloud Computing",
            blogCoverPhoto:
                "https://i.pinimg.com/564x/51/75/f2/5175f2a55bc8d44fc4c1b132477ac3ff.jpg",
            blogDate: "November 1, 2023",
        },
        {
            blogTitle: "Are you still using HTML and CSS",
            blogCoverPhoto:
                "https://i.pinimg.com/564x/48/52/6a/48526a98493907f2dc33893a718ba1df.jpg",
            blogDate: "November 1, 2023",
        },
        {
            blogTitle: "Machine Learning indepth",
            blogCoverPhoto:
                "https://i.pinimg.com/564x/34/16/cc/3416cc88543f5e6601b7854878ce0899.jpg",
            blogDate: "November 1, 2023",
        },
        {
            blogTitle: "Choosing the best coding time",
            blogCoverPhoto:
                "https://i.pinimg.com/564x/33/f8/5a/33f85ae4b62c8bbaf20283852fa74655.jpg",
            blogDate: "November 1, 2023",
        },
        {
            blogTitle: "Nodejs vs django for backend",
            blogCoverPhoto:
                "https://i.pinimg.com/564x/03/ce/f0/03cef0ed8e57fae5083c6b498188ce65.jpg",
            blogDate: "November 1, 2023",
        },
        {
            blogTitle: "A look at wordpress and uses",
            blogCoverPhoto:
                "https://i.pinimg.com/564x/3b/1d/7e/3b1d7e4ae14bd472645a004040bca8c5.jpg",
            blogDate: "November 1, 2023",
        },
    ]);

    provide("blogCards", blogCards);

    onMounted(() => {
        const auth = getAuth(firebaseApp);
        onAuthStateChanged(auth, (user) => {
            store.commit("updateUser", user);
            if (user) {
                store.dispatch("getCurrentUser");
                console.log(store.state.profileEmail);
            }
        });
    });
</script>

<template>
    <TheHeader />
    <RouterView />
    <TheFooter />
</template>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

    :root {
        --color1: hsl(245, 75%, 52%);
        --color2: hsl(223, 47%, 23%);
        --color3: hsl(224, 23%, 55%);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Raleway", sans-serif;
        line-height: 1.5;
    }

    img {
        width: 100%;
    }

    .post__view {
        text-decoration: none;
        color: #eb1616;
        position: relative;
        font-weight: 700;
    }

    .post__view::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: currentColor;

        transform: scaleX(0);
        transform-origin: left;
        transition: transform 350ms ease-in;
    }

    .post__view:hover::after {
        transform: scaleX(1);
    }
</style>
