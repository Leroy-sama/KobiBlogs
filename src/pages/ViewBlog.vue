<template>
	<section class="blogview">
		<div class="blog-wrapper" v-if="selectedBlog">
			<div class="content">
				<div class="header">
					<h2 class="blogview__head">
						{{ selectedBlog?.blogTitle }}
					</h2>
					<div class="blogview__date">
						<IconDate />
						<p class="blogview__date">{{ formDate }}</p>
					</div>
				</div>
				<img :src="selectedBlog?.blogCoverPhoto" alt="" />
				<div
					class="blogview__content"
					v-html="selectedBlog?.blogHTML"
				></div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { onMounted, ref, computed } from "vue";
	import { useFirebasePosts } from "@/store/firebasePosts";
	import { useRoute } from "vue-router";
	import IconDate from "@/assets/icons/IconDate.vue";

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
		background-color: #f4f4f4;
		opacity: 0;
		animation: fadeIn 0.5s ease-in-out forwards;

		@keyframes fadeIn {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}

		.content {
			display: grid;
			gap: 2rem;

			.header {
				display: grid;
				gap: 1rem;
				padding: 1rem 0;

				.blogview__head {
					font-size: 2.5rem;
					text-align: center;
				}

				.blogview__date {
					display: flex;
					gap: 0.5rem;
					justify-content: center;
					align-items: center;
				}
			}

			.blogview__content {
				font-size: 1.1rem;
				line-height: 1.8;
				color: var(--colorBlack);

				h1,
				h2,
				h3,
				h4,
				h5,
				h6 {
					margin-top: 1.5rem;
					margin-bottom: 1rem;
					color: var(--colorBlack);
				}

				p {
					margin-bottom: 1.5rem;
				}

				a {
					color: #007bff;
					text-decoration: none;

					&:hover {
						text-decoration: underline;
					}
				}

				ul,
				ol {
					margin-bottom: 1.5rem;
					padding-left: 1.5rem;
				}

				li {
					margin-bottom: 0.5rem;
				}

				blockquote {
					border-left: 4px solid #007bff;
					padding-left: 1rem;
					color: #666;
					margin: 1.5rem 0;
				}

				code {
					background-color: #f5f5f5;
					padding: 0.2rem 0.4rem;
					border-radius: 4px;
					font-family: monospace;
				}
			}
		}
	}
</style>
