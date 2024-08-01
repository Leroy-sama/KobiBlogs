<template>
	<section class="home">
		<div class="home__wrapper">
			<div class="hero">
				<div class="hero__text">
					<h1 class="hero__head">Welcome</h1>
					<p class="hero__desc">
						Weekly blog articles with all things tech including AI,
						Cloud computing, Web Development and more. Register
						today so you don't miss a moment.
					</p>
				</div>
			</div>
			<div class="posts">
				<div class="latest-post">
					<img src="@/assets/img/latest_post.webp" alt="" />
					<div class="latest-post__details">
						<span class="tag">AI</span>
						<h2 class="latest-post__title">
							Innovative AI Applications in the Real World
						</h2>
						<p class="latest-post__smalldesc">
							Discover how AI can help businesses improve their
							customer experience and drive more sales.
						</p>
						<span class="date">Jul 4, 2024</span>
					</div>
				</div>
				<div class="otherposts">
					<BlogItem
						v-for="blog in blogStore.blogs"
						:key="blog.id"
						:category="blog.category"
						:blogCoverPhoto="blog.blogCoverPhoto"
						:blogTitle="blog.blogTitle"
						:blogDesc="blog.blogDesc"
						:blogDate="blog.blogDate"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { computed } from "vue";
	import BlogItem from "../items/BlogItem.vue";
	import { useBlogStore } from "@/store/blogs";

	const blogStore = useBlogStore();
</script>

<style lang="css" scoped>
	img {
		width: 100%;
	}

	.home__wrapper {
		margin: 0 1.5rem;
	}

	.hero {
		padding: 1.5rem 0;
	}

	.hero__head {
		font-size: 2rem;
		color: var(--color1);
	}

	.hero__desc {
		padding: 1rem 0;
	}

	.hero__head,
	.hero__desc {
		text-align: center;
	}

	/*******************************************/

	/* POSTS */

	.latest-post {
		background-color: rgb(6, 2, 19);
	}

	.latest-post__details {
		padding: 1rem;
		display: grid;
		gap: 0.5rem;
	}

	.latest-post__details .tag {
		background-color: wheat;
		padding: 0.5rem;
	}

	.latest-post__title {
		color: white;
	}

	.latest-post__smalldesc {
		color: rgb(241, 241, 241);
	}

	.latest-post__details .date {
		color: rgb(238, 238, 238);
		font-size: 0.8rem;
	}

	.otherposts {
		margin: 1.5rem 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.post-img {
		position: relative;
	}

	.post-img .tag {
		background-color: wheat;
		font-size: 0.7rem;
		text-transform: uppercase;
		font-weight: 700;
		padding: 0.5rem;
		position: absolute;
		top: 1rem;
		left: 1rem;
		z-index: 111;
	}

	.post-img img {
		aspect-ratio: 1 / 1;
		object-fit: cover;
	}

	.post__details {
		padding: 1rem 0;
		display: grid;
		gap: 0.8rem;
	}

	.post__details .date {
		color: rgb(49, 49, 49);
	}

	@media (min-width: 700px) {
	}

	@media (min-width: 1000px) {
		.home__wrapper {
			max-width: 1200px;
			margin: 0 auto;
		}

		.hero__head {
			font-size: 2.5rem;
		}

		.latest-post {
			display: flex;
		}

		.latest-post__details {
			display: flex;
			flex-direction: column;
		}

		.latest-post__title {
			font-size: 2.5rem;
		}
	}
</style>
