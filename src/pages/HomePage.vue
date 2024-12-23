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
				<LatestPost />
				<div class="otherposts">
					<BlogItem
						v-for="blog in firebasePosts.blogPosts.slice(1, 4)"
						:key="blog.id"
						:id="blog.id"
						:blogCoverPhoto="blog.blogCoverPhoto"
						:blogTitle="blog.blogTitle"
						:blogDesc="blog.blogHTML"
						:blogDate="blog.date"
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
	import BlogItem from "../components/items/BlogItem.vue";
	import LatestPost from "@/components/ui/LatestPost.vue";
	import { useBlogStore } from "@/store/blogs";
	import { useFirebasePosts } from "@/store/firebasePosts";

	const blogStore = useBlogStore();
	const firebasePosts = useFirebasePosts();

	console.log(firebasePosts.blogPosts[0]);
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
		font-size: 2.5rem;
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

	@media (min-width: 700px) {
	}

	@media (min-width: 1000px) {
		.hero__head {
			font-size: 2.5rem;
		}
	}
</style>
