<template>
	<section class="forgot">
		<BaseModal
			v-if="modalActive"
			:modalMessage="modalMessage"
			@close-modal="closeModal"
		/>
		<LoadingSpinner v-if="loading" />
		<div class="forgot__wrapper">
			<h2>Forgot Password</h2>
			<p>
				Forgot password? Enter your email to reset it.
				hbeieuiueiuweiwyjbieiheowio wubeuiwowifdireoi abIBOB BP phi
			</p>

			<div class="form-box">
				<form>
					<div class="form-control">
						<label for="email">Email Address</label>
						<input
							type="email"
							placeholder="example@me.com"
							v-model="email"
						/>
					</div>
					<div class="sbt-btn">
						<BaseButton @click.prevent="resetPassword">
							Reset
						</BaseButton>
					</div>
				</form>
				<p>Back to <RouterLink to="/login">Login</RouterLink></p>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { ref } from "vue";
	import BaseModal from "@/components/ui/BaseModal.vue";
	import LoadingSpinner from "../components/ui/LoadingSpinner.vue";
	import { getAuth, sendPasswordResetEmail } from "firebase/auth";

	const email = ref(null);
	const modalActive = ref(null);
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

<style lang="css" scoped>
	.forgot {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 80vh;
	}

	.forgot__wrapper {
		max-width: 500px;
		margin-inline: auto;
		padding-inline: 1rem;
	}

	.forgot__wrapper h2 {
		font-size: 2.5rem;
	}

	form {
		display: grid;
		gap: 1rem;
		padding-block: 2rem;
	}

	.form-control input {
		font: inherit;
		padding: 0.8rem;
		width: 100%;
		outline: var(--colorBlack);
	}

	.sbt-btn button {
		font: inherit;
		width: 100%;
		padding: 0.8rem;
		background-color: var(--color2);
		color: white;
		border: 1px solid var(--color2);
		cursor: pointer;
	}
</style>
