<template>
	<section class="create">
		<CoverPreview v-if="createblogStore.blogPhotoPreview" />

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
					v-model="blogTitlestore"
				/>
				<div class="file-upload">
					<label for="blogphoto">Upload Cover Photo</label>
					<input
						type="file"
						ref="blogPhoto"
						id="blogphoto"
						accept=".png, .jpg, .jpeg, .webp"
						@change="fileChange2"
					/>
					<BaseButton class="prev" @click="openPreview"
						>Preview Photo</BaseButton
					>
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
			<p v-if="error" style="color: red">{{ errorMsg }}</p>
			<div class="blog-actions">
				<BaseButton @click="uploadBlog">Publish Blog</BaseButton>
				<BaseButton link to="/blog-preview">Blog Preview</BaseButton>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { ref, computed, onUnmounted } from "vue";
	import Editor from "primevue/editor";
	import { useCreateblogStore } from "@/store/create-blog";
	import { useUserStore } from "@/store/user";
	import BaseButton from "@/components/ui/BaseButton.vue";
	import CoverPreview from "@/components/ui/CoverPreview.vue";

	const userStore = useUserStore();
	const createblogStore = useCreateblogStore();
	const error = ref(null);
	const errorMsg = ref(null);
	const file = ref(null);
	const blogPhoto = ref(null);

	const openPreview = () => {
		createblogStore.openPhotoPreview();
	};

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

	const fileURL = ref("");

	// const fileChange = () => {
	// 	const files = blogPhoto.value?.files;
	// 	if (!files || files.length === 0) {
	// 		console.error("No file selected");
	// 		return;
	// 	}

	// 	if (fileURL.value) URL.revokeObjectURL(fileURL.value);

	// 	file.value = files[0];
	// 	fileURL.value = URL.createObjectURL(file.value);

	// 	console.log(`Selected file: ${file.value.name}`);
	// 	console.log(`Generated file URL: ${fileURL.value}`);

	// 	createblogStore.fileNameChange(file.value.name);
	// 	createblogStore.createFileURL(fileURL.value);

	// 	// Verify if store updates correctly
	// 	console.log("Store state:", createblogStore.$state);
	// };

	const fileChange2 = (event) => {
		file.value = event.target.files[0];
		console.log(file.value);
		const fileName = file.value.name;
		console.log(fileName);
		createblogStore.fileNameChange(fileName);
		fileURL.value = URL.createObjectURL(file.value);
		createblogStore.createFileURL(fileURL.value);
	};

	// onUnmounted(() => {
	// 	if (fileURL.value) URL.revokeObjectURL(fileURL.value); // Cleanup on unmount
	// });

	const uploadBlog = () => {
		console.log("Clicked");
		if (blogTitlestore.value === "" && blogHTML.value === "") {
			error.value = true;
			errorMsg.value = "Please enter a blog title and blog HTML";
			setTimeout(() => {
				error.value = false;
			}, 5000);
		} else {
			error.value = false;
			console.log(blogTitlestore.value);
		}
	};
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
		/* margin-top: 2rem; */
		border-radius: 10px;
	}

	.blog-info {
		display: grid;
		grid-template-columns: 40% 60%;
		gap: 1.5rem;
		padding-block: 2rem;
	}

	.file-upload {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
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
