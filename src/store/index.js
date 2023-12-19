import { createStore } from "vuex";
import { getAuth } from "firebase/auth";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "@/firebase/firebaseInit";

const store = createStore({
    state() {
        return {
            sampleBlogCards: [],
            editPost: null,
            user: null,
            profileEmail: null,
            profileFirstName: null,
            profileLastName: null,
            profileUsername: null,
            profileId: null,
            profileInitials: null,
        };
    },
    mutations: {
        toggleEditPost(state, payload) {
            state.editPost = payload;
        },
        updateUser(state, payload) {
            state.user = payload;
        },
        setProfileInfo(state, doc) {
            state.profileId = doc.id;
            state.profileEmail = doc.data().email;
            state.profileFirstName = doc.data().firstName;
            state.profileLastName = doc.data().lastName;
            state.profileUsername = doc.data().username;
        },
        setProfileInitials(state) {
            state.profileInitials =
                state.profileFirstName.match(/(\b\S)?/g).join("") +
                state.profileLastName.match(/(\b\S)?/g).join("");
        },
    },
    actions: {
        async getCurrentUser({ commit }) {
            const auth = getAuth(firebaseApp);
            const db = getFirestore(firebaseApp);
            const userDocRef = doc(db, "users", auth.currentUser.uid);
            const userDocSnapshot = await getDoc(userDocRef);
            commit("setProfileInfo", userDocSnapshot);
            commit("setProfileInitials");
            console.log(userDocSnapshot);
        },
    },
});

export default store;
