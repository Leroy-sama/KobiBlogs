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
						<div class="span-box">
							<span class="tag">AI</span>
						</div>
						<h2 class="latest-post__title">
							Innovative AI Applications in the Real World
						</h2>
						gap: 1.5rem;
						<p class="latest-post__smalldesc">
							Discover how AI can help businesses improve their
							customer experience and drive more sales.
						</p>
						<span class="date">Jul 4, 2024</span>
					</div>
				</div>
				<div class="otherposts">
					<BlogItem
						v-for="blog in blogStore.blogs.slice(0, 3)"
						:key="blog.id"
						:category="blog.category"
						:blogCoverPhoto="blog.blogCoverPhoto"
						:blogTitle="blog.blogTitle"
						:blogDesc="blog.blogDesc"
						:blogDate="blog.blogDate"
					/>
				</div>
			</div>
			<div class="btn">
				<BaseButton link to="/blogs">All Blogs</BaseButton>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { computed } from "vue";
	import BlogItem from "../components/items/BlogItem.vue";
	import { useBlogStore } from "@/store/blogs";

	const blogStore = useBlogStore();

	const limitedBlogs = computed(() => {});
</script>

<style lang="css" scoped>
	img {
		width: 100%;
	}

	.home__wrapper {
		width: min(90%, 80rem);
		margin: 0 auto;
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
		padding: 1.5rem;
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

	.btn {
		text-align: center;
		/* display: flex;
		justify-content: center; */
	}

	/* .btn a {
		cursor: pointer;
		border: 0;
		background: var(--color2);
		color: #fff;
		padding: 0.75em 1.5em;
		text-decoration: none;
		position: relative;
		z-index: 1;
	}

	.btn a::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);

		z-index: -1;
		transition: transform 300ms ease-in;
	}

	.btn a::after {
		transform: scaleX(0);
		transform-origin: right;
	}

	.btn a:hover::after {
		transform: scaleX(1);
		transform-origin: left;
	} */

	@media (min-width: 700px) {
	}

	@media (min-width: 1000px) {
		.hero__head {
			font-size: 2.5rem;
		}

		.latest-post {
			display: flex;
		}

		.latest-post img {
			max-width: 700px;
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
