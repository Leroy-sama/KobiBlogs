<template>
	<section class="blog" v-if="selectedBlog">
		<div class="blog__wrapper">
			<div class="blog__header">
				<h1 class="blog__head">
					{{ blogTitle }}
				</h1>
				<div class="blog__info">
					<div class="info-date">
						<Date />
						<span class="date">{{ blogDate }}</span>
					</div>
					<div class="info-person">
						<User />
						<span class="person">{{
							userStore.profileUsername
						}}</span>
					</div>
				</div>
			</div>
			<div class="blog__body">
				<img :src="blogCoverPhoto" :alt="blogTitle" />

				<h2 class="sect__head">{{ blogTitle }}</h2>
				<p class="sect__text">
					{{ blogDesc }}
				</p>
			</div>
			<div class="author">
				<div class="author__text">
					<span>Author</span>
					<p>{{ userStore.profileUsername }}</p>
				</div>
				<div class="author__img">
					<img
						src="https://i.pinimg.com/564x/9e/b8/4b/9eb84b2de52c5198527a56844298e61a.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	</section>
	<section v-else>
		<h1>Nothing to be found here</h1>
		<p>{{ id }}</p>
	</section>
</template>

<script lang="js" setup>
	import Date from '../assets/icons/Date.vue';
	import User from "../assets/icons/User.vue"
	import { useRoute } from 'vue-router';
	import { ref,onMounted, computed } from 'vue';
	import { useUserStore } from '@/store/user';
	import { useBlogStore } from '@/store/blogs';

	const blogStore = useBlogStore();
	const userStore = useUserStore();
	const route = useRoute();

	const selectedBlog = ref(null)
	const id = route.params.id;
	console.log(id)

	const blogTitle = computed(() => selectedBlog.value.blogTitle)
	const blogDate = computed(() => selectedBlog.value.blogDate)
	const blogDesc = computed(() => selectedBlog.value.blogDesc)
	const blogCoverPhoto = computed(() => selectedBlog.value.blogCoverPhoto)

	onMounted(() => {
		const blogs = blogStore.blogs
		selectedBlog.value = blogs.find((blog) => {
			return blog.id === id
		})

		console.log(selectedBlog.value)
	})
</script>

<style lang="css" scoped>
	.blog__wrapper {
		width: min(90%, 80rem);
		margin-inline: auto;
	}

	.blog__head {
		text-align: center;
		padding: 1rem;
		font-size: 3rem;
	}

	.blog__info {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.info-date,
	.info-person {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.date,
	.person {
		color: var(--color5);
		font-size: 0.8rem;
	}

	.blog__body {
		margin: 1.5rem;
	}

	.author {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	.author__text span {
		font-size: 2rem;
		font-weight: 700;
	}

	.author__img img {
		max-width: 150px;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		border-radius: 50%;
	}
</style>
