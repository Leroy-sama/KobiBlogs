<template>
    <div class="create-post">
        <CoverPreview
            v-show="store.state.blogPhotoPreview"
            placeholder="Enter Blog Title"
            v-model="blogTitle"
        />
        <div class="container">
            <div :class="{ invisible: !error }" class="err-message">
                <p><span>Error:</span>{{ errorMsg }}</p>
            </div>
            <div class="blog-info">
                <input
                    type="text"
                    placeholder="Enter Blog Title"
                    v-model="blogTitle"
                />
                <div class="upload-file">
                    <label for="blog-photo">Upload Cover Photo</label>
                    <input
                        type="file"
                        ref="blogPhoto"
                        id="blog-photo"
                        @change="fileChange"
                        accept=".png, .jpg, .jpeg"
                    />
                    <button
                        @click="openPreview"
                        class="preview"
                        :class="{
                            'button-inactive': !store.state.blogPhotoFileURL,
                        }"
                    >
                        Preview Photo
                    </button>
                    <span>File Chosen: {{ store.state.blogPhotoName }}</span>
                </div>
            </div>
            <div class="editor">
                <QuillEditor
                    theme="snow"
                    toolbar="full"
                    v-model="blogHTML"
                    @image-added="imageHandler"
                />
            </div>
            <div class="blog-actions">
                <button @click="uploadBlog">Publish Blog</button>
                <RouterLink class="router-button" to="/blog-preview"
                    >Post Preview</RouterLink
                >
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useStore } from "vuex";
    import { ref, computed } from "vue";
    import CoverPreview from "@/ui/CoverPreview.vue";
    import { QuillEditor } from "@vueup/vue-quill";
    import { getStorage, getDownloadURL } from "firebase/storage";
    import { getFirestore } from "firebase/firestore";
    import { firebaseApp } from "@/firebase/firebaseInit";

    const store = useStore();
    const error = ref(null);
    const errorMsg = ref(null);
    const file = ref(null);
    const blogPhoto = ref(null);

    const profileId = computed(() => {
        return store.state.profileId;
    });

    const blogCoverPhotoName = computed(() => {
        return store.state.blogPhotoName;
    });

    const blogTitle = computed({
        get() {
            return store.state.blogTitle.value;
        },
        set(payload) {
            store.commit("updateBlogTitle", payload);
        },
    });
    const blogHTML = computed({
        get() {
            return store.state.blogHTML.value;
        },
        set(payload) {
            store.commit("newBlogPost", payload);
        },
    });

    const fileChange = () => {
        file.value = blogPhoto.value.files[0];
        const fileName = file.value.name;
        store.commit("fileNameChange", fileName);
        store.commit("createFileURL", URL.createObjectURL(file.value));
    };

    const openPreview = () => {
        store.commit("openPhotoPreview");
    };

    const imageHandler = async (
        file,
        QuillEditor,
        cursorLocation,
        resetUploader
    ) => {
        const storage = getStorage(firebaseApp);

        const imageRef = ref(
            storage,
            `documents/blogPhotos/${file.value.name}`
        );

        const uploadTask = put(imageRef, file.value);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                console.log(snapshot);
            },
            (error) => {
                console.log(error);
            },
            async () => {
                const downloadURL = await imageRef.getDownloadURL();
                QuillEditor.insertEmbed(cursorLocation, "image", downloadURL);
                resetUploader();
                console.log(cursorLocation);
            }
        );
    };

    const uploadBlog = () => {
        if (blogTitle.length !== 0 && blogHTML.length !== 0) {
            if (file.value) {
                //
                return;
            }
            error.value = true;
            errorMsg.value = "Please ensure you uploaded a cover photo";
            setTimeout(() => {
                error.value = false;
            }, 5000);
        }
        error.value = true;
        errorMsg.value =
            "Please ensure blogtitle and blog post has been filled";
        setTimeout(() => {
            error.value = false;
        }, 5000);
    };
</script>

<style lang="scss">
    .create-post {
        position: relative;
        height: 100%;

        button {
            margin-top: 0;
        }

        .router-button {
            text-decoration: none;
            color: #fff;
        }

        label,
        button,
        .router-button {
            transition: 0.5s ease-in-out all;
            align-self: center;
            font-size: 14px;
            cursor: pointer;
            border-radius: 20px;
            padding: 12px 24px;
            color: #fff;
            background-color: #303030;
            text-decoration: none;

            &:hover {
                background-color: rgba(48, 48, 48, 0.7);
            }
        }

        .container {
            position: relative;
            height: 100%;
            padding: 10px 25px 60px;
        }

        // error styling
        .invisible {
            opacity: 0 !important;
        }

        .err-message {
            width: 100%;
            padding: 12px;
            border-radius: 8px;
            color: #fff;
            margin-bottom: 10px;
            background-color: #303030;
            opacity: 1;
            transition: 0.5s ease all;

            p {
                font-size: 14px;
            }

            span {
                font-weight: 600;
            }
        }

        .blog-info {
            display: flex;
            margin-bottom: 32px;

            input:nth-child(1) {
                min-width: 300px;
            }

            input {
                transition: 0.5s ease-in-out all;
                padding: 10px 4px;
                border: none;
                border-bottom: 1px solid #303030;

                &:focus {
                    outline: none;
                    box-shadow: 0 1px 0 0 #303030;
                }
            }

            .upload-file {
                flex: 1;
                margin-left: 16px;
                position: relative;
                display: flex;

                input {
                    display: none;
                }

                .preview {
                    margin-left: 16px;
                    text-transform: initial;
                }

                span {
                    font-size: 12px;
                    margin-left: 16px;
                    align-self: center;
                }
            }
        }

        .editor {
            height: 60vh;
            display: flex;
            flex-direction: column;

            .quillWrapper {
                position: relative;
                display: flex;
                flex-direction: column;
                height: 100%;
            }

            .ql-container {
                display: flex;
                flex-direction: column;
                height: 100%;
                overflow: scroll;
            }

            .ql-editor {
                padding: 20px 16px 30px;
            }
        }

        .blog-actions {
            margin-top: 32px;

            button {
                margin-right: 16px;
            }
        }
    }
</style>
