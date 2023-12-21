<template>
    <div class="blog-card">
        <div class="icons">
            <div class="icon">
                <Icon
                    icon="material-symbols:edit-outline"
                    color="hsl(223, 47%, 23%)"
                    class="edit"
                />
            </div>
            <div class="icon">
                <Icon
                    icon="material-symbols:delete-outline"
                    color="hsl(223, 47%, 23%)"
                    class="delete"
                    @click="logging"
                />
            </div>
        </div>
        <img :src="blogCoverPhoto" :alt="blogTitle" />
        <div class="info">
            <h4>{{ blogTitle }}</h4>
            <h6>Posted on: {{ blogDate }}</h6>
            <div>
                <RouterLink class="post__view" to="#">View Post</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { Icon } from "@iconify/vue";

    const props = defineProps(["blogTitle", "blogCoverPhoto", "blogDate"]);

    const logging = () => {
        console.log(props.blogCoverPhoto);
    };
</script>

<style scoped>
    .blog-card {
        position: relative;
        cursor: pointer;
        border-radius: 5px;
        background-color: #fff;
        transition: 1.5s ease all;
    }

    .blog-card:hover {
        transform: rotateZ(-1deg) scale(1.02);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .info {
        padding: 1.5em;
        display: grid;
        gap: 1em;
    }

    .icons {
        display: flex;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 99;
    }

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: #fff;
        transition: 0.5s ease all;
    }

    .icon:hover {
        background: black;
    }

    .info h4 {
        color: var(--color2);
    }

    .info a {
        align-self: flex-end;
    }

    .edit,
    .delete {
        color: red;
    }
</style>
