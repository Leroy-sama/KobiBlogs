<template>
	<div class="latest-post">
		<img :src="firstBlog.blogCoverPhoto" alt="" />
		<div class="latest-post__details">
			<div class="span-box">
				<span class="tag">{{ firstBlog.category }}</span>
			</div>
			<h2 class="latest-post__title">
				{{ firstBlog.blogTitle }}
			</h2>
			<p class="latest-post__smalldesc">
				{{ firstBlog.blogDesc }}
			</p>
			<div class="date-di">
				<Date />
				<span class="date">{{ firstBlog.blogDate }}</span>
			</div>
		</div>
	</div>
</template>

<script lang="js" setup>
	   import { computed } from 'vue';
	      import { useBlogStore } from '@/store/blogs';
	import Date from '@/assets/icons/Date.vue';

	   const blogStore = useBlogStore();
	   const firstBlog = computed(() => blogStore.blogs[0]);
</script>

<style lang="css" scoped>
	.latest-post {
		background-color: rgb(6, 2, 19);
	}

	.latest-post__details {
		padding: 1.5rem;
		display: grid;
		gap: 1rem;
	}

	.latest-post__details .tag {
		background-color: wheat;
		font-size: 0.7rem;
		text-transform: uppercase;
		font-weight: 700;
		padding: 0.5rem;
	}

	.latest-post__title {
		color: white;
	}

	.latest-post__smalldesc {
		color: rgb(241, 241, 241);
	}

	.date-di {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.latest-post__details .date {
		color: rgb(238, 238, 238);
		font-size: 0.8rem;
	}

	@media (min-width: 1000px) {
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
