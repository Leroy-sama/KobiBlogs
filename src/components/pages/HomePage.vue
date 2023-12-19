<template>
    <section class="home">
        <div class="home__wrapper">
            <div class="first__wrapper">
                <div class="home__text">
                    <h1 class="home__heading">Welcome</h1>
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
                            In this post we take a look at...
                        </p>
                        <a href="#">View Post</a>
                    </div>
                    <div class="sample__img">
                        <img src="@/assets/cloud.jpg" alt="cloud computing" />
                    </div>
                </div>
                <div class="sample2">
                    <div class="sample__img">
                        <img src="@/assets/web-dev.jpg" alt="web dev" />
                    </div>
                    <div class="sample__text">
                        <h2 class="text__heading">
                            Are you still using HTML and CSS?
                        </h2>
                        <p class="text__desc">
                            In this post we take a look at...
                        </p>
                        <a href="#">View Post</a>
                    </div>
                </div>
                <div class="moreblogs">
                    <p class="more__text">
                        Never miss a moment. Access all posts by registering for
                        your free account today!
                    </p>
                    <a href="#" class="cta">Register</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
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

    .samples__title {
        text-align: center;
    }

    .sample2 {
        display: flex;
        flex-direction: column-reverse;
    }

    .more__text {
        font-size: 1.5rem;
        font-weight: 700;
        padding: 1.5em 0;
    }

    .cta {
        margin-bottom: 1em;
    }

    @media (min-width: 35em) {
        .sample1,
        .sample2,
        .first__wrapper {
            display: flex;
            flex-direction: row;
        }
    }
</style>
