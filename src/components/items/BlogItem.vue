<template>
	<div class="post">
		<div class="post-img">
			<!-- <span class="tag">{{ category }}</span> -->
			<RouterLink :to="`/view-blog/${blogID}`"
				><img :src="blogCoverPhoto" alt=""
			/></RouterLink>
			<div class="post__actions" v-if="isEditMode">
				<button class="action-btn">
					<IconDelete
						@click="firebasePosts.deleteBlog(blogID)"
						class="action-delete"
					/>
				</button>
			</div>
		</div>
		<div class="post__details">
			<RouterLink :to="`/view-blog/${blogID}`" class="post__link">
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
	import { useFirebasePosts } from "@/store/firebasePosts";
	import { useRouter } from "vue-router";
	import IconDate from "@/assets/icons/IconDate.vue";
	import IconDelete from "@/assets/icons/IconDelete.vue";
	import IconEdit from "@/assets/icons/IconEdit.vue";

	const props = defineProps([
		"blogID",
		"blogTitle",
		"blogCoverPhoto",
		"blogDate",
		"blogDesc",
		"isEditMode",
	]);

	const firebasePosts = useFirebasePosts();
	const router = useRouter();
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

	// const editBlogPost = () => {
	// 	router.push(`/edit-blog/${props.blogID}`);
	// };
</script>

<style lang="css" scoped>
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

	.post__actions {
		position: absolute;
		top: 1rem;
		right: 1rem;
		display: flex;
		gap: 1rem;
	}

	.action-btn {
		background-color: whitesmoke;
		border: none;
		padding: 0.5rem;

		border-radius: 30px;
		cursor: pointer;
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
