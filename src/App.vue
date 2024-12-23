<script setup>
	import { RouterView } from "vue-router";
	import TheHeader from "./layout/TheHeader.vue";
	import TheFooter from "./layout/TheFooter.vue";

	import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
	import { firebaseApp } from "./firebase/firebaseInit";
	import { onMounted } from "vue";
	import { useUserStore } from "./store/user";
	import { useFirebasePosts } from "./store/firebasePosts";

	onMounted(() => {
		const userStore = useUserStore();
		const firebasePosts = useFirebasePosts();
		const auth = getAuth(firebaseApp);
		onAuthStateChanged(auth, (user) => {
			userStore.updateUser(user);
			if (user) {
				userStore.getCurrentUser();
				const uid = user.uid;
				console.log(uid);
			} else {
				console.log("No active user");
			}
		});
		firebasePosts.getPost();
	});
</script>

<template>
	<main>
		<TheHeader />
		<RouterView />
		<TheFooter />
	</main>
</template>

<style lang="css">
	@import url("https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap");

	:root {
		--color1: hsl(245, 75%, 52%);
		--color2: hsl(223, 47%, 23%);
		--color3: hsl(224, 23%, 55%);
		--color4: hsla(223, 47%, 23%, 0.5);
		--color5: hsl(0, 0%, 27%);
		--colorBlack: rgb(2, 2, 15);

		--ff-primary: "Nunito Sans", serif;
		--ff-accent: "Newsreader", serif;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		margin: 0;
		font-family: var(--ff-primary);
	}

	h1,
	h2,
	h3,
	h4 {
		line-height: 1.1;
		font-family: var(--ff-accent);
		margin: 0;
	}

	p {
		line-height: 1.5;
	}

	a {
		text-decoration: none;
	}

	img {
		width: 100%;
	}

	.wrapper {
		width: min(90%, 90rem);
		margin-inline: auto;
	}

	/* .post__view {
		text-decoration: none;
		color: #eb1616;
		position: relative;
		font-weight: 700;
	}

	.post__view::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background: currentColor;

		transform: scaleX(0);
		transform-origin: left;
		transition: transform 350ms ease-in;
	}

	.post__view:hover::after {
		transform: scaleX(1);
	} */
</style>
