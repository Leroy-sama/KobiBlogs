<template>
	<main>
		<div class="wrapper">
			<div class="create-post">
				<div class="container">
					<h1 class="container__head">
						Actively looking for an editor
					</h1>
					<p class="container__text">
						I have tried PrimeVue, vue quill and some others i can't
						remember but they have issues. Bear with me please,
						updates incoming!!
					</p>
				</div>
			</div>
			<div class="editor">
				<Editor v-model="value" editorStyle="height: 320px" />
			</div>
		</div>
	</main>
</template>

<script setup>
	import { ref } from "vue";

	import Editor from "primevue/editor";

	const isEven = (num) => num % 2 === 0;
</script>

<style lang="css" scoped>
	main {
		min-height: 70vh;
		padding: 2rem;
	}

	.wrapper {
		max-width: 1200px;
		margin-inline: auto;
	}

	.container__head {
		text-align: center;
		font-size: 3rem;
		color: var(--colorBlack);
	}

	.container__text {
		text-align: center;
	}

	.editor {
		border-radius: 2px solid red;
	}
</style>
