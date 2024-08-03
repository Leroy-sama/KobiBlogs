<template>
	<div>
		<h2 class="blog__heading">All Posts</h2>
	</div>
	<div class="blogs">
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
</template>

<script setup>
	import BlogItem from "@/components/items/BlogItem.vue";
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
