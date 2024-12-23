<template>
	<div class="post">
		<div class="post-img">
			<span class="tag">{{ category }}</span>
			<RouterLink :to="`/blogs/${id}`"
				><img :src="blogCoverPhoto" alt=""
			/></RouterLink>
		</div>
		<div class="post__details">
			<RouterLink :to="`/blogs/${id}`" class="post__link">
				<h2 class="post__head">{{ blogTitle }}</h2>
			</RouterLink>
			<div class="post__desc" v-html="truncatedHtml"></div>
			<div class="date-flex">
				<IconDate />
				<span class="date">{{ formattedDate }}</span>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { computed } from "vue";
	import IconDate from "@/assets/icons/IconDate.vue";

	const props = defineProps([
		"id",
		"category",
		"blogTitle",
		"blogCoverPhoto",
		"blogDate",
		"blogDesc",
	]);
	const truncatedHtml = computed(() => {
		const strippedHtml = props.blogDesc.replace(/<[^>]*>/g, "");

		const words = strippedHtml.split(" ").slice(0, 20);

		return words.join(" ") + (words.length >= 20 ? "..." : "");
	});

	const formattedDate = computed(() => {
		if (!props.blogDate) return "Unknown date";
		const actualDate = new Date(props.blogDate);
		const options = { year: "numeric", month: "long", day: "numeric" };
		return actualDate.toLocaleDateString("en-US", options);
	});
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
