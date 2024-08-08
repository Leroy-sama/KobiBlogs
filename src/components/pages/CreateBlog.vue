<template>
	<main>
		<div class="create-post">
			<div class="container">
				<h1 class="container__head">Actively looking for an editor</h1>
				<p class="container__text">
					I have tried PrimeVue, vue quill and some others i can't
					remember but they have issues. Bear with me please, updates
					incoming!!
				</p>
			</div>
		</div>
	</main>
</template>

<script setup>
	import { ref } from "vue";
</script>

<style lang="css" scoped>
	main {
		min-height: 70vh;
		padding: 2rem;
	}

	.container__head {
		text-align: center;
		font-size: 3rem;
		color: var(--colorBlack);
	}

	.container__text {
		text-align: center;
	}
</style>
