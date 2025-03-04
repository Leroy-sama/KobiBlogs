import { firebaseApp } from "@/firebase/firebaseInit";
import {
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	orderBy,
	query,
	deleteDoc,
} from "firebase/firestore";
import { getStorage, deleteObject } from "firebase/storage";
import { ref as storeRef } from "firebase/storage";
import { defineStore } from "pinia";

export const useFirebasePosts = defineStore("firebasePosts", {
	state: () => ({
		blogPosts: [],
		postLoaded: null,
	}),
	actions: {
		async getPost() {
			try {
				const db = getFirestore(firebaseApp);
				const databaseRef = collection(db, "blogPosts");
				const q = query(databaseRef, orderBy("date", "desc"));
				const dbResults = await getDocs(q);
				this.blogPosts = [];
				dbResults.forEach((doc) => {
					const data = {
						blogID: doc.id,
						blogTitle: doc.data().blogTitle,
						blogCoverPhoto: doc.data().blogCoverPhoto,
						blogPhotoName: doc.data().blogPhotoName,
						blogHTML: doc.data().blogHTML,
						date: doc.data().date,
						category: doc.data().category,
					};
					this.blogPosts.push(data);
				});
				this.postLoaded = true;
			} catch (err) {
				console.log(err, "Error fetching posts");
			}
		},
		async deleteBlog(blogID) {
			try {
				const db = getFirestore(firebaseApp);
				const storage = getStorage(firebaseApp);
				const blogRef = doc(db, "blogPosts", blogID);
				const blogDoc = await getDoc(blogRef);

				const photoName = blogDoc.data().blogPhotoName;
				if (photoName) {
					const storageRef = storeRef(
						storage,
						`documents/BlogCoverPhotos/${photoName}`
					);
					await deleteObject(storageRef);
				}
				await deleteDoc(blogRef);
				await this.getPost();
			} catch (err) {
				console.log(err, "Error getting blog");
				throw err;
			}
		},
		async updatePost(blogID) {
			console.log("updated", blogID);
		},
	},
});
