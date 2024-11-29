<template>
	<div class="post">
		<div class="post-img">
			<span class="tag">{{ category }}</span>
			<RouterLink to="/blogs/1"
				><img :src="blogCoverPhoto" alt=""
			/></RouterLink>
		</div>
		<div class="post__details">
			<RouterLink to="/blogs/1" class="post__link">
				<h2 class="post__head">{{ blogTitle }}</h2>
			</RouterLink>
			<p class="post__desc">
				{{ blogDesc }}
			</p>
			<div class="date-flex">
				<Date />
				<span class="date">{{ blogDate }}</span>
			</div>
		</div>
	</div>
</template>

<script setup>
	import Date from "@/assets/icons/Date.vue";

	const props = defineProps([
		"id",
		"category",
		"blogTitle",
		"blogCoverPhoto",
		"blogDate",
		"blogDesc",
	]);
</script>

<style scoped>
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
		aspect-ratio: 4/3;
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

	.post__link {
		text-decoration: none;
		color: var(--colorBlack);
	}

	.date-flex {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
