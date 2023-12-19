<script setup>
    import { RouterView } from "vue-router";
    import TheHeader from "@/components/layout/TheHeader.vue";
    import TheFooter from "@/components/layout/TheFooter.vue";

    import { provide, ref } from "vue";

    const blogCards = ref([
        {
            blogTitle: "Machine Learning indepth",
            blogCoverPhoto: "machine-learning",
            blogDate: "November 1, 2023",
        },
        {
            blogTitle: "Choosing the best coding time",
            blogCoverPhoto: "coding-time",
            blogDate: "November 1, 2023",
        },
        {
            blogTitle: "Nodejs vs django",
            blogCoverPhoto: "node-django",
            blogDate: "November 1, 2023",
        },
        {
            blogTitle: "What is wordpress",
            blogCoverPhoto: "wordpress",
            blogDate: "November 1, 2023",
        },
    ]);

    provide("blogCards", blogCards);
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
</style>
