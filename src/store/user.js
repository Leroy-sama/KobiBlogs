import { defineStore } from "pinia";
import { firebaseApp } from "@/firebase/firebaseInit";
import { getAuth } from "firebase/auth";
import { getDoc, getFirestore, doc } from "firebase/firestore";

export const useUserStore = defineStore("userStore", {
	state: () => ({
		editPost: null,
		user: null,
		profileEmail: null,
		profileUsername: null,
		profileId: null,
		profileInitials: null,
	}),
	// getters: {
	// 	updateUser(state) {
	// 		return state.user;
	// 	},
	// },
	actions: {
		updateUser(user) {
			this.user = user;
		},

		async getCurrentUser() {
			const db = getFirestore(firebaseApp);
			const auth = getAuth(firebaseApp);
			const database = doc(db, "users", auth.currentUser.uid);
			const dbResults = await getDoc(database);
			console.log(dbResults);
			this.profileId = dbResults.id;
			this.profileEmail = dbResults.data().email;
			this.profileUsername = dbResults.data().username;
			this.profileInitials = this.profileUsername
				.match(/(\b\S)?/g)
				.join("");
		},
	},
});
