<template>
	<footer>
		<div class="footer__wrapper">
			<div class="footer__socials">
				<h3 class="socials__heading">KobiBlogs</h3>
				<div class="socials">
					<Icon icon="pajamas:twitter" color="white" width="30" />
					<Icon
						icon="ic:baseline-facebook"
						width="30"
						color="white"
					/>
					<Icon icon="mdi:instagram" width="30" color="white" />
				</div>
			</div>
			<div class="useful-links">
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/blogs">Blogs</RouterLink>
				<RouterLink v-if="user" to="/create-blog"
					>Create Post</RouterLink
				>
				<RouterLink v-else to="/login">Login/Register</RouterLink>
			</div>
			<div class="copyright">
				<p class="cr">copyright 2023. All Rights Reserved</p>
			</div>
		</div>
	</footer>
</template>

<script setup>
	import { Icon } from "@iconify/vue";
	import { useUserStore } from "@/store/user";
	import { computed } from "vue";

	const userStore = useUserStore();
	const user = computed(() => {
		return userStore.user;
	});
</script>

<style scoped>
	footer {
		margin-top: 1em;
		background-color: black;
	}

	.footer__wrapper {
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding-block: 2rem;
		gap: 2em;
		width: min(90%, 80rem);
		margin-inline: auto;
	}

	.socials__heading {
		color: white;
		padding-bottom: 1em;
	}

	.socials {
		display: flex;
		gap: 1em;
		padding: 0;
	}

	.useful-links {
		display: flex;
		gap: 1em;
	}

	.useful-links a {
		color: white;
		text-decoration: none;
	}

	.useful-links a:hover {
		color: var(--color1);
	}

	.cr {
		color: white;
	}

	@media (min-width: 35em) {
		.footer__wrapper {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			max-width: 1200px;
		}

		.useful-links {
			flex-direction: column;
		}
	}
</style>
