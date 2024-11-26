<script setup>
	import { RouterView } from "vue-router";
	import TheHeader from "./layout/TheHeader.vue";
	import TheFooter from "./layout/TheFooter.vue";

	import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
	import { firebaseApp } from "./firebase/firebaseInit";
	import { onMounted } from "vue";
	import { useUserStore } from "./store/user";

	onMounted(() => {
		const userStore = useUserStore();
		const auth = getAuth(firebaseApp);
		onAuthStateChanged(auth, (user) => {
			userStore.updateUser(user);
			if (user) {
				userStore.getCurrentUser();
				const uid = user.uid;
				console.log(uid);
				console.log(userStore.profileEmail);
			} else {
				console.log("No active user");
			}
		});
	});
</script>

<template>
	<TheHeader />
	<RouterView />
	<TheFooter />
</template>

<style lang="css">
	@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

	:root {
		--color1: hsl(245, 75%, 52%);
		--color2: hsl(223, 47%, 23%);
		--color3: hsl(224, 23%, 55%);
		--color4: hsla(223, 47%, 23%, 0.5);
		--color5: hsl(0, 0%, 27%);
		--colorBlack: rgb(2, 2, 15);
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Raleway", system-ui, sans-serif;
		line-height: 1.5;
	}

	a {
		text-decoration: none;
	}

	img {
		width: 100%;
	}

	.post__view {
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
	}
</style>
