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
				<BaseButton @click="updateBlog">Save Changes</BaseButton>
				<BaseButton link to="/blog-preview">Preview Changes</BaseButton>
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
		updateDoc,
		doc,
	} from "firebase/firestore";
	import { ref as VueRef, computed, onMounted } from "vue";
	import Editor from "primevue/editor";
	import { useCreateblogStore } from "@/store/create-blog";
	import { useUserStore } from "@/store/user";
	import { useFirebasePosts } from "@/store/firebasePosts";
	import { useRoute, useRouter } from "vue-router";
	import BaseButton from "@/components/ui/BaseButton.vue";
	import CoverPreview from "@/components/ui/CoverPreview.vue";
	import LoadingSpinner from "@/components/ui/LoadingSpinner.vue";

	const router = useRouter();
	const route = useRoute();
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
	const routeID = VueRef(null);
	const currentBlog = VueRef(null);

	onMounted(async () => {
		routeID.value = route.params.id;
		if (!firebasePosts.blogPosts.length) {
			await firebasePosts.getPost();
		}

		currentBlog.value = firebasePosts.blogPosts.find((post) => {
			return post.blogID === routeID.value;
		});
		createblogStore.setBlogState(currentBlog.value);
	});

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

	const updateBlog = async () => {
		const db = getFirestore(firebaseApp);
		const fbDBref = doc(db, "blogPosts", routeID.value); // Corrected to use 'doc' for a specific document

		if (blogTitlestore.value !== "" || blogHTML.value !== "") {
			try {
				loading.value = true;

				if (file.value) {
					const storageReference = storageRef(
						storage,
						`documents/BlogCoverPhotos/${createblogStore.blogPhotoName}`
					);

					// Upload the file
					await uploadBytes(storageReference, file.value);

					// Get the download URL
					const downLoadURL = await getDownloadURL(storageReference);

					// Update the document with the new blog content and photo
					await updateDoc(fbDBref, {
						blogHTML: blogHTML.value,
						blogTitle: blogTitlestore.value,
						blogCoverPhoto: downLoadURL,
						blogPhotoName: blogPhotoName.value,
						date: Date.now(),
					});
				} else {
					// Update the document without a new photo
					await updateDoc(fbDBref, {
						blogHTML: blogHTML.value,
						blogTitle: blogTitlestore.value,
						date: Date.now(),
					});
				}

				// Refresh the post and navigate
				await firebasePosts.updatePost(routeID.value);
				loading.value = false;
				router.push(`/view-blog/${routeID.value}`);
			} catch (err) {
				loading.value = false;
				console.error("Error during blog update:", err);
				error.value = true;
				errorMsg.value = "An error occurred while updating the blog.";
				setTimeout(() => {
					error.value = false;
				}, 5000);
			}
		} else {
			error.value = true;
			errorMsg.value = "Please enter a blog title and blog HTML.";
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
