<template>
    <section>
        <div class="forgot">
            <BaseModal
                v-if="modalActive"
                :modalMessage="modalMessage"
                @close-modal="closeModal"
            />
            <LoadingSpinner v-if="loading" />
            <p>Back to <RouterLink to="/login">Login</RouterLink></p>
            <div class="text">
                <h2>Forgot Password</h2>
                <p>Forgot password? Enter your email to reset it.</p>
            </div>
            <form>
                <div class="form-control">
                    <input type="emal" placeholder="email" v-model="email" />
                </div>
                <div class="sbt-btn">
                    <button type="submit" @click.prevent="resetPassword">
                        Reset
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
    import { ref } from "vue";
    import BaseModal from "@/ui/BaseModal.vue";
    import LoadingSpinner from "@/ui/LoadingSpinner.vue";
    import { getAuth, sendPasswordResetEmail } from "firebase/auth";

    const email = ref(null);
    const modalActive = ref(false);
    const modalMessage = ref("");
    const loading = ref(null);

    const resetPassword = () => {
        loading.value = true;
        const auth = getAuth();
        sendPasswordResetEmail(auth, email.value)
            .then(() => {
                modalMessage.value =
                    "if your account exists, you will receive an email";
                loading.value = false;
                modalActive.value = true;
            })
            .catch((error) => {
                modalMessage.value = error.message;
                loading.value = false;
                modalActive.value = true;
            });
    };

    const closeModal = () => {
        modalActive.value = !modalActive.value;
        email.value = "";
    };
</script>

<style scoped>
    .forgot {
        display: grid;
        place-content: center;
        height: 60vh;
    }

    .form-control input {
        max-width: 600px;
        width: 100%;
    }

    .sbt-btn {
        display: flex;
        place-content: center;
    }
</style>
