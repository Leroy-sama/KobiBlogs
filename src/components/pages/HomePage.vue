<template>
    <section class="home">
        <div class="home__wrapper">
            <div v-if="!user" class="first__wrapper">
                <div class="home__text">
                    <div>
                        <h1 class="home__heading">Welcome</h1>
                    </div>

                    <p class="home__desc">
                        Weekly blog articles with all things tech including AI,
                        Cloud computing, Web Development and more. Register
                        today so you don't miss a moment.
                    </p>
                    <a href="#" class="cta">Get started</a>
                </div>
                <div class="home__image">
                    <img src="@/assets/cover-photo.jpg" alt="cover photo" />
                </div>
            </div>
            <div class="samples__wrapper">
                <h2 class="samples__title">Recent blogs</h2>
                <div class="sample1">
                    <div class="sample__text">
                        <h2 class="text__heading">
                            The Future of Cloud Computing
                        </h2>
                        <p class="text__desc">
                            In this post we take a look at Cloud Computing and
                            the recent changes that have been introduced to the
                            field.
                        </p>
                        <div>
                            <a href="#" class="post__view">View Post</a>
                        </div>
                    </div>
                    <div class="sample__img">
                        <img src="@/assets/cloud.jpg" alt="cloud computing" />
                    </div>
                </div>
                <div class="sample2">
                    <div class="sample__img">
                        <img
                            src="https://i.pinimg.com/564x/48/52/6a/48526a98493907f2dc33893a718ba1df.jpg"
                            alt="web dev"
                        />
                    </div>
                    <div class="sample__text">
                        <h2 class="text__heading">
                            Are you still using HTML and CSS?
                        </h2>
                        <p class="text__desc">
                            In this post we take a look at the fundamental
                            languages, html and css.
                        </p>
                        <div>
                            <a href="#" class="post__view">View Post</a>
                        </div>
                    </div>
                </div>
                <div v-if="!user" class="moreblogs">
                    <p class="more__text">
                        Never miss a moment. Access all posts by registering for
                        your free account today!
                    </p>
                    <RouterLink to="/loginpage" class="cta"
                        >Register</RouterLink
                    >
                </div>
                <div v-if="user" class="class">
                    <p class="more__blogs">
                        Explore more of our blogs in our blogs page .
                    </p>
                    <RouterLink to="/blogs" class="cta"
                        >Explore More</RouterLink
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { useStore } from "vuex";
    import { computed } from "vue";

    const store = useStore();

    const user = computed(() => {
        return store.state.user;
    });
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
    img {
        width: 100%;
    }

    .first__wrapper {
        display: flex;
        flex-direction: column;
        gap: 2em;
        align-items: center;
        height: 90vh;
    }

    .home__heading {
        color: var(--color1);
        font-family: "Playfair Display", serif;
        font-size: 3rem;
        text-align: left;
    }

    .home__heading::after {
        content: "";
        width: 90%;
        height: 2px;
        background: var(--color1);
        display: block;
        margin: auto;
    }

    .text__heading {
        color: var(--color1);
    }

    .home__desc {
        padding: 1.5em 0;
    }

    .cta {
        color: white;
        text-decoration: none;
        background-color: var(--color2);
        margin: 2em 0;
        padding: 0.5em 1em;
        position: relative;
        z-index: 1;
        transition: transform 400ms ease-in;
    }

    .cta::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: hsla(223, 47%, 23%, 0.5);
        z-index: -1;
        transform: scaleX(0);
        transform-origin: right;
    }

    .cta:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }

    .sample1,
    .sample2 {
        padding: 1em;
    }

    .samples__title {
        text-align: center;
        padding-bottom: 2em;
        color: var(--color2);
    }

    .sample__text {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 0.5em;
        padding: 1em 0;
    }

    .sample2 {
        display: flex;
        flex-direction: column-reverse;
    }

    .section__wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 2em 0;
        max-width: 1200px;
        margin: auto;
    }

    .more__text,
    .more__blogs {
        font-size: 1.5rem;
        font-weight: 700;
        padding: 1.5em 0;
        color: var(--color2);
    }

    .more__text .cta:hover,
    .more__blogs .cta:hover {
        color: var(--color2);
        background-color: #fff;
    }

    .moreblogs,
    .class {
        padding: 1em;
    }

    .cta {
        margin-bottom: 1em;
    }

    @media (min-width: 35em) {
        .sample1,
        .sample2,
        .first__wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .home__wrapper {
            max-width: 1300px;
            margin: auto;
        }

        .sample__text:last-child {
            padding-left: 2em;
        }
    }
</style>
