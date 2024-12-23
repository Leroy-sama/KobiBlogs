import { defineStore } from "pinia";

export const useCreateblogStore = defineStore("createblogStore", {
	state: () => ({
		blogHTML: "Write your blog title here",
		blogTitle: "",
		blogPhotoName: "",
		blogPhotoFileURL: null,
		blogPhotoPreview: null,
	}),
	actions: {
		updateTitle(newTitle) {
			this.blogTitle = newTitle;
		},
		updateHTML(newHTML) {
			this.blogHTML = newHTML;
		},
		fileNameChange(newFileName) {
			this.blogPhotoName = newFileName;
		},
		createFileURL(URL) {
			this.blogPhotoFileURL = URL;
		},
		openPhotoPreview() {
			this.blogPhotoPreview = !this.blogPhotoPreview;
		},
	},
});
