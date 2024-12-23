<template>
	<section class="blogs">
		<div class="wrapper">
			<h2 class="blogs__heading">All Posts</h2>
			<div class="blogs__blogs">
				<BlogItem
					v-for="blog in firebasePosts.blogPosts"
					:key="blog?.blogID"
					:blogID="blog?.blogID"
					:blogCoverPhoto="blog.blogCoverPhoto"
					:blogTitle="blog.blogTitle"
					:blogDesc="blog.blogHTML"
					:blogDate="blog.date"
				/>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { useFirebasePosts } from "@/store/firebasePosts";
	import BlogItem from "@/components/items/BlogItem.vue";

	const firebasePosts = useFirebasePosts();
</script>

<style scoped lang="css">
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
