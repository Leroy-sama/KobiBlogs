import { defineStore } from "pinia";
import { firebaseApp } from "@/firebase/firebaseInit";
import { getAuth } from "firebase/auth";
import { getDoc, getFirestore, doc, updateDoc } from "firebase/firestore";

export const useUserStore = defineStore("userStore", {
	state: () => ({
		editPost: null,
		user: null,
		profileEmail: null,
		profileUsername: null,
		profileId: null,
		profileInitials: null,
	}),
	actions: {
		updateUser(user) {
			this.user = user;
		},
		updateUsername(newUsername) {
			this.profileUsername = newUsername;
			this.profileInitials = this.generateInitial(newUsername);
		},
		async updateUsersettings() {
			try {
				const db = getFirestore(firebaseApp);
				const auth = getAuth(firebaseApp);

				if (auth.currentUser) {
					const userDocRef = doc(db, "users", auth.currentUser.uid);
					await updateDoc(userDocRef, {
						username: this.profileUsername,
					});
					console.log("Username updated in firestore");
				} else {
					console.log("No user to update");
				}
			} catch (err) {
				console.log("Error updating", err);
			}
		},

		async getCurrentUser() {
			try {
				const db = getFirestore(firebaseApp);
				const auth = getAuth(firebaseApp);

				if (!auth.currentUser) {
					console.error("No authenticated user found");
					return;
				}

				const database = doc(db, "users", auth.currentUser.uid);
				const dbResults = await getDoc(database);

				if (!dbResults.exists()) {
					console.error("User document doesn't exist");
					return;
				}

				this.profileId = dbResults.id;
				this.profileEmail = dbResults.data().email;
				this.profileUsername = dbResults.data().username;
				this.profileInitials = this.generateInitial(
					this.profileUsername
				);
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		},
		generateInitial(name) {
			if (!name) {
				return "N/A";
			}
			return name
				.match(/(\b\S)?/g)
				.join("")
				.toUpperCase();
		},
	},
});
