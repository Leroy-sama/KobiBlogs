<script setup>
	import { RouterView } from "vue-router";
	import TheHeader from "@/components/layout/TheHeader.vue";
	import TheFooter from "@/components/layout/TheFooter.vue";
</script>

<template>
	<TheHeader />
	<RouterView />
	<TheFooter />
</template>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

	:root {
		--color1: hsl(245, 75%, 52%);
		--color2: hsl(223, 47%, 23%);
		--color3: hsl(224, 23%, 55%);
		--color4: hsla(223, 47%, 23%, 0.5);
		--color5: hsl(0, 0%, 27%);
		--colorBlack: hsl(251, 65%, 3%);
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Raleway", sans-serif;
		line-height: 1.5;
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
