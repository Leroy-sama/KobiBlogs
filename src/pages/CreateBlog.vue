<template>
	<section class="create">
		<div class="create__wrapper">
			<h1 class="container__head">Create Blog</h1>
			<p class="container__text">
				Whatever topic you want to write, just start typing on the
				editor below.
			</p>
			<div class="blog-info">
				<input
					type="text"
					id="blog-title"
					placeholder="Enter blog title"
					v-model="blogTitle"
				/>
				<div class="file-upload">
					<label for="blogphoto">Upload Cover Photo</label>
					<input
						type="file"
						ref="blogPhoto"
						id="blogphoto"
						accept=".png, .jpg, .jpeg, .webp"
						@change="fileChange"
					/>
					<BaseButton class="prev">Preview Photo</BaseButton>
					<span
						>File Chosen: {{ createblogStore.blogPhotoName }}</span
					>
				</div>
			</div>
			<div class="editor">
				<Editor
					v-model="blogHTML"
					editorStyle="height: 720px"
					class="editor-edit"
				/>
			</div>
			<div class="blog-actions">
				<BaseButton>Publish Blog</BaseButton>
				<BaseButton link to="/blog-preview">Blog Preview</BaseButton>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { ref, computed } from "vue";
	import Editor from "primevue/editor";
	import { useCreateblogStore } from "@/store/create-blog";
	import { useUserStore } from "@/store/user";
	import BaseButton from "@/components/ui/BaseButton.vue";

	const userStore = useUserStore();
	const createblogStore = useCreateblogStore();
	const value = ref("");
	const blogTitle = ref("");
	const error = ref(null);
	const errorMsg = ref(null);
	const file = ref(null);
	const blogPhoto = ref(null);

	const profileId = computed(() => {
		return userStore.profileId;
	});

	const blogPhotoName = computed(() => {
		return createblogStore.blogPhotoName;
	});

	const blogTitlestore = computed({
		get() {
			return createblogStore.blogTitle;
		},
		set(newValue) {
			createblogStore.updateTitle(newValue);
		},
	});

	const blogHTML = computed({
		get() {
			return createblogStore.blogHTML;
		},
		set(newValue) {
			createblogStore.updateHTML(newValue);
		},
	});

	const fileChange = () => {
		const files = blogPhoto.value.files;
		if (files && files.length > 0) {
			file.value = files[0];
			console.log(`Selected file: ${file.value.name}`);
		}
	};

	// console.log(value);
</script>

<style lang="css" scoped>
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

	.blog-info {
		display: grid;
		grid-template-columns: 40% 60%;
		gap: 1.5rem;
		padding-block: 2rem;
	}

	.file-upload {
		display: flex;
		gap: 1.5rem;
		align-items: center;
	}

	#blog-title {
		padding: 0.75rem 1.5rem;
		outline: none;
		font: inherit;
		/* max-width: 600px; */
	}

	label {
		background-color: var(--colorBlack);
		color: #fff;
		padding: 0.75rem 1.6rem;
		cursor: pointer;
	}

	input[type="file"] {
		display: none;
	}

	.blog-actions {
		display: flex;
		gap: 1rem;
	}
</style>
