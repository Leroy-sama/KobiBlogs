<template>
    <div>
        <h2 class="blog__heading">Blogs Page</h2>
    </div>
    <div class="blogs">
        <BlogItem
            v-for="blog in blogCards"
            :key="blog.index"
            :id="blog.index"
            :blogTitle="blog.blogTitle"
            :blogCoverPhoto="blog.blogCoverPhoto"
            :blogDate="blog.blogDate"
        ></BlogItem>
    </div>
</template>

<script setup>
    import { inject } from "vue";
    import BlogItem from "@/components/items/BlogItem.vue";

    const blogCards = inject("blogCards");
</script>

<style scoped>
    .blogs {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2em;
        background-color: whitesmoke;
        padding: 2em;
    }

    .blog__heading {
        text-align: center;
        color: var(--color2);
    }

    .blog__heading::after {
        content: "";
        width: 20%;
        height: 2px;
        background: var(--color2);
        display: block;
        margin: auto;
    }
</style>
