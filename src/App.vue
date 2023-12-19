<script setup>
    import { RouterView } from "vue-router";
    import TheHeader from "@/components/layout/TheHeader.vue";
    import TheFooter from "@/components/layout/TheFooter.vue";
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
