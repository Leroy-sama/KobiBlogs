import { firebaseApp } from "@/firebase/firebaseInit";
import {
	collection,
	getDocs,
	getFirestore,
	orderBy,
	query,
} from "firebase/firestore";
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
						blogHTML: doc.data().blogHTML,
						date: doc.data().date,
					};
					this.blogPosts.push(data);
				});
				this.postLoaded = true;
				console.log(this.blogPosts);
			} catch (err) {
				console.log(err, "Error fetching posts");
			}
		},
	},
});
