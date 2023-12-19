import { createStore } from "vuex";
import { getAuth } from "firebase/auth";
import { getDoc, doc, getFirestore, updateDoc } from "firebase/firestore";
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
        changeFirstName(state, payload) {
            state.profileFirstName = payload;
        },
        changeLastName(state, payload) {
            state.profileLastName = payload;
        },
        changeUsername(state, payload) {
            state.profileUsername = payload;
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
        async updatedUserSettings({ commit, state }) {
            const db = getFirestore(firebaseApp);
            const userDocRef = doc(db, "users", state.profileId);
            await updateDoc(userDocRef, {
                firstName: state.profileFirstName,
                lastName: state.profileLastName,
                username: state.profileUsername,
            });
            commit("setProfileInitials");
        },
    },
});

export default store;
