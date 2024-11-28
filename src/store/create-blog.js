import { defineStore } from "pinia";

export const useCreateblogStore = defineStore("createblogStore", {
	state: () => ({
		blogHTML: "Write your blog title here",
		blogTitle: "",
		blogPhotoName: "",
		blogPhotoFileURL: null,
		blogPhotoPreview: null,
	}),
});
