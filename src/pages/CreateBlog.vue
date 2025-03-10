<template>
	<section class="create">
		<CoverPreview v-if="createblogStore.blogPhotoPreview" />
		<LoadingSpinner v-show="loading" />
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
				<div class="category">
					<label for="blog-category">Category</label>
					<select
						id="blog-category"
						v-model="selectedCategory"
						@change="handleCategoryChange"
					>
						<option value="" disabled>Select a category</option>
						<option
							v-for="category in predefinedCategories"
							:key="category"
							:value="category"
						>
							{{ category }}
						</option>
						<option value="other">Other</option>
						<option value="addCategory">Add Category</option>
					</select>
					<input
						v-if="showCustomCategoryInput"
						type="text"
						id="custom-category"
						placeholder="Enter your own category"
						v-model="customCategory"
					/>
				</div>
			</div>

			<div class="category-section">
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
	import { firebaseApp } from "@/firebase/firebaseInit";
	import {
		getDownloadURL,
		getStorage,
		uploadBytes,
		ref as storageRef,
	} from "firebase/storage";
	import {
		getFirestore,
		collection,
		addDoc,
		serverTimestamp,
		updateDoc,
	} from "firebase/firestore";
	import { ref as VueRef, computed } from "vue";
	import Editor from "primevue/editor";
	import { useCreateblogStore } from "@/store/create-blog";
	import { useUserStore } from "@/store/user";
	import { useFirebasePosts } from "@/store/firebasePosts";
	import { useRouter } from "vue-router";
	import BaseButton from "@/components/ui/BaseButton.vue";
	import CoverPreview from "@/components/ui/CoverPreview.vue";
	import LoadingSpinner from "@/components/ui/LoadingSpinner.vue";

	const router = useRouter();
	const userStore = useUserStore();
	const createblogStore = useCreateblogStore();
	const firebasePosts = useFirebasePosts();
	const error = VueRef(null);
	const errorMsg = VueRef(null);
	const file = VueRef(null);
	const blogPhoto = VueRef(null);
	const storage = getStorage(firebaseApp);
	const db = getFirestore(firebaseApp);
	const loading = VueRef(null);

	const predefinedCategories = VueRef([
		"Technology",
		"Lifestyle",
		"Travel",
		"Food",
		"Health",
		"Education",
	]);
	const selectedCategory = VueRef("");
	const customCategory = VueRef("");
	const showCustomCategoryInput = computed(() => {
		return selectedCategory.value === "addCategory";
	});

	const handleCategoryChange = () => {
		if (selectedCategory.value !== "addCategory") {
			customCategory.value = "";
		}

		blogCategory.value =
			selectedCategory.value === "addCategory"
				? customCategory.value
				: selectedCategory.value;
	};

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

	const blogCategory = computed({
		get() {
			return createblogStore.category;
		},
		set(newValue) {
			createblogStore.updateCategory(newValue);
		},
	});

	const fileURL = VueRef("");

	const fileChange2 = (event) => {
		file.value = event.target.files[0];
		console.log(file.value);
		const fileName = file.value.name;
		console.log(fileName);
		createblogStore.fileNameChange(fileName);
		fileURL.value = URL.createObjectURL(file.value);
		createblogStore.createFileURL(fileURL.value);
	};

	const uploadBlog = async () => {
		if (blogTitlestore.value === "" || blogHTML.value === "") {
			error.value = true;
			errorMsg.value = "Please enter a blog title and blog HTML";
			setTimeout(() => {
				error.value = false;
			}, 5000);
			return;
		}

		if (!selectedCategory.value) {
			error.value = true;
			errorMsg.value = "Please select a category";
			setTimeout(() => {
				error.value = false;
			}, 5000);
			return;
		}

		if (!file.value) {
			error.value = true;
			errorMsg.value = "Please upload a cover photo";
			setTimeout(() => {
				error.value = false;
			}, 5000);
			return;
		}

		try {
			loading.value = true;
			const storageReference = storageRef(
				storage,
				`documents/BlogCoverPhotos/${createblogStore.blogPhotoName}`
			);
			await uploadBytes(storageReference, file.value).then((snap) => {
				console.log(snap, "Uploaded a cover photo");
			});

			const downLoadURL = await getDownloadURL(storageReference);
			console.log("Download URL: ", downLoadURL);

			const timestamp = Date.now();
			const databaseRef = collection(db, "blogPosts");

			const category =
				selectedCategory.value === "other"
					? customCategory.value
					: selectedCategory.value;

			const docRef = await addDoc(databaseRef, {
				blogHTML: blogHTML.value,
				blogCoverPhoto: downLoadURL,
				blogPhotoName: blogPhotoName.value,
				blogTitle: blogTitlestore.value,
				profileId: profileId.value,
				date: timestamp,
				category: category,
			});
			await updateDoc(docRef, {
				blogID: docRef.id,
			});

			await firebasePosts.getPost();
			loading.value = false;
			router.push(`/view-blog/${docRef.id}`);
		} catch (err) {
			loading.value = false;
			console.error("Error during blog upload:", err);
			error.value = true;
			errorMsg.value = "An error occurred while uploading the blog.";
			setTimeout(() => {
				error.value = false;
			}, 5000);
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
		align-items: center;
		gap: 1.5rem;
		padding-block: 2rem;
	}

	.category {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.category select {
		padding: 0.75rem;
	}

	.category input {
		padding: 0.75rem;
	}

	.file-upload {
		display: flex;
		gap: 1.5rem;
		align-items: center;
	}

	#blog-title {
		padding: 0.75rem;
		outline: none;
		font: inherit;
		/* max-width: 600px; */
	}

	.file-upload label {
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

	.category-section {
		display: flex;
		align-items: center;
	}

	.category-section select {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.category-section input[type="text"] {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
</style>
