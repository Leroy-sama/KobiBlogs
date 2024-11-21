<template>
	<section class="blogs">
		<div class="blogs__wrapper">
			<h2 class="blogs__heading">All Posts</h2>
			<div class="blogs__blogs">
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
	</section>
</template>

<script setup>
	import { useBlogStore } from "@/store/blogs";
	import BlogItem from "@/components/items/BlogItem.vue";

	const blogStore = useBlogStore();
</script>

<style scoped lang="css">
	.blogs__wrapper {
		width: min(90%, 80rem);
		margin-inline: auto;
	}

	.blogs__blogs {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.blogs__heading {
		text-align: center;
		color: var(--color2);
		font-size: 2rem;
		padding: 1.5rem;
	}

	/* .blog__heading::after {
		content: "";
		width: 20%;
		height: 2px;
		background: var(--color2);
		display: block;
		margin: auto;
	} */
</style>
