<template>
	<div class="blogview">
		<div class="wrapper">
			<h2>{{ blogTitle }}</h2>
			<img :src="blogCoverPhoto" :alt="blogCoverPhoto" />
			<div class="blogview__content" v-html="blogHTML"></div>
		</div>
	</div>
</template>

<script setup>
	import { computed } from "vue";
	import { useCreateblogStore } from "@/store/create-blog";

	const createblogStore = useCreateblogStore();
	const blogTitle = computed(() => {
		return createblogStore.blogTitle;
	});

	const blogHTML = computed(() => {
		return createblogStore.blogHTML;
	});

	const blogCoverPhoto = computed(() => {
		return createblogStore.blogPhotoFileURL;
	});
</script>

<style lang="scss" scoped>
	.blog-view {
		min-height: 100vh;

		h2 {
			margin-bottom: 16px;
			font-weight: 400;
			font-size: 2.5rem;
		}

		img {
			width: 100%;
			margin-bottom: 32px;
		}
	}
</style>
