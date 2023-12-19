<template>
    <section>
        <div class="forgot">
            <Modal
                v-if="modalActive"
                :modalMessage="modalMessage"
                @close-modal="closeModal"
            />
            <Loading v-if="loading" />
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

    const email = ref(null);
    const modalActive = ref(false);
    const modalMessage = ref("");
    const loading = ref(null);

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
