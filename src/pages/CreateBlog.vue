<template>
	<section class="create">
		<div class="create__wrapper">
			<h1 class="container__head">Create Blog</h1>
			<p class="container__text">
				Whatever topic you want to write, just start typing on the
				editor below.
			</p>
			<div class="editor">
				<Editor
					v-model="value"
					editorStyle="height: 720px"
					class="editor-edit"
				/>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { ref } from "vue";
	import Editor from "primevue/editor";

	const value = ref("");
</script>

<style lang="css" scoped>
	.create {
	}

	.create__wrapper {
		width: min(90%, 80rem);
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

	.editor-edit {
		border: 1px solid var(--colorBlack);
		margin-block: 2rem;
		border-radius: 10px;
	}
</style>
