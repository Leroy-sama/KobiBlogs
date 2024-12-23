<template>
	<section class="blogview">
		<div class="wrapper" v-if="selectedBlog">
			<h2 class="blogview__head">{{ selectedBlog?.blogTitle }}</h2>
			<h4>{{ formDate }}</h4>
			<img :src="selectedBlog?.blogCoverPhoto" alt="" />
			<div
				class="blogview__content"
				v-html="selectedBlog?.blogHTML"
			></div>
		</div>
	</section>
</template>

<script setup>
	import { onMounted, ref, computed } from "vue";
	import { useFirebasePosts } from "@/store/firebasePosts";
	import { useRoute } from "vue-router";

	const selectedBlog = ref(null);
	const firebasePosts = useFirebasePosts();
	const route = useRoute();
	const id = route.params.id;

	onMounted(async () => {
		if (!firebasePosts.blogPosts.length) {
			await firebasePosts.getPost();
		}

		selectedBlog.value = firebasePosts.blogPosts.find((post) => {
			return post.blogID === id;
		});
	});

	const formDate = computed(() => {
		const actualDate = new Date(selectedBlog.value.date);
		const options = { year: "numeric", month: "long", day: "numeric" };
		return actualDate.toLocaleDateString("en-US", options);
	});
</script>

<style lang="scss" scoped>
	.blogview {
		min-height: 100vh;
	}
</style>
