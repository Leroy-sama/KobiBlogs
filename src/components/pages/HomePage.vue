<template>
	<section class="home">
		<div class="home__wrapper">
			<div class="hero">
				<div class="hero__text">
					<h1 class="hero__head">Welcome</h1>
					<p class="hero__desc">
						Weekly blog articles with all things tech including AI,
						Cloud computing, Web Development and more. Register
						today so you don't miss a moment.
					</p>
				</div>
			</div>
			<div class="posts">
				<div class="latest-post">
					<img src="@/assets/latest_post.webp" alt="" />
					<div class="latest-post__details">
						<span class="tag">AI</span>
						<h2 class="latest-post__title">
							Innovative AI Applications in the Real World
						</h2>
						<p class="latest-post__smalldesc">
							Discover how AI can help businesses improve their
							customer experience and drive more sales.
						</p>
						<span class="date">Jul 4, 2024</span>
					</div>
				</div>
				<div class="otherposts">
					<div class="post">
						<div class="post-img">
							<span class="tag">Apple</span>
							<img src="@/assets/watch_post.webp" alt="" />
						</div>

						<div class="post__details">
							<h2 class="post__head">New Apple watch Holder</h2>
							<p class="post__desc">
								Introducing the new Apple Watch Holder, a sleek
								and stylish solution for those looking to
								upgrade their fitness devices.
							</p>
							<span class="date">Jun 12, 2024</span>
						</div>
					</div>
					<div class="post">
						<div class="post-img">
							<span class="tag">Web</span>
							<img src="@/assets/web-dev.jpg" alt="" />
						</div>

						<div class="post__details">
							<h2 class="post__head">
								Nodejs vs django for backend
							</h2>
							<p class="post__desc">
								Nodejs for backend is not available in the
								backend version of the website and is not
								available in the backend version of the
							</p>
							<span class="date">Jun 12, 2024</span>
						</div>
					</div>
					<div class="post">
						<div class="post-img">
							<span class="tag">Setup</span>
							<img src="@/assets/cable_post.webp" alt="" />
						</div>
						<div class="post__details">
							<h2 class="post__head">
								Cable management made easy
							</h2>
							<p class="post__desc">
								A well connected workspace often means one
								thing: lots of cables. Taking control of all the
								cable.
							</p>
							<span class="date">Jun 12, 2024</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { useStore } from "vuex";
	import { computed } from "vue";

	const store = useStore();

	const user = computed(() => {
		return store.state.user;
	});
</script>

<style lang="css" scoped>
	img {
		width: 100%;
	}

	.home__wrapper {
		margin: 0 1.5rem;
	}

	.hero {
		padding: 1.5rem 0;
	}

	.hero__head {
		font-size: 2rem;
		color: var(--color1);
	}

	.hero__desc {
		padding: 1rem 0;
	}

	.hero__head,
	.hero__desc {
		text-align: center;
	}

	/*******************************************/

	/* POSTS */

	.latest-post {
		background-color: rgb(6, 2, 19);
	}

	.latest-post__details {
		padding: 1rem;
		display: grid;
		gap: 0.5rem;
	}

	.latest-post__details .tag {
		background-color: wheat;
		padding: 0.5rem;
	}

	.latest-post__title {
		color: white;
	}

	.latest-post__smalldesc {
		color: rgb(241, 241, 241);
	}

	.latest-post__details .date {
		color: rgb(238, 238, 238);
		font-size: 0.8rem;
	}

	.otherposts {
		margin: 1.5rem 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

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
		aspect-ratio: 1 / 1;
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

	@media (min-width: 700px) {
	}

	@media (min-width: 1000px) {
		.home__wrapper {
			max-width: 1200px;
			margin: 0 auto;
		}

		.hero__head {
			font-size: 2.5rem;
		}

		.latest-post {
			display: flex;
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
