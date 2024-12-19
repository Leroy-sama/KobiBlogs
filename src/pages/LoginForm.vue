<template>
	<section class="login">
		<div class="login__wrapper">
			<h1 class="login__head">Login</h1>

			<div class="socials">
				<div class="google">
					<Google />
					<p>Continue with Google</p>
				</div>
			</div>
			<OrItem />
			<p class="login__text">
				Enter your account details to login to your account
			</p>
			<div class="form-box">
				<form @submit.prevent="signIn">
					<div
						class="form-control"
						:class="{ invalid: !email.isValid }"
					>
						<label for="email">Email Address</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="example@me.com"
							v-model="email.val"
							@blur="clearValidity(email)"
						/>
						<p class="err__msg" v-if="!email.isValid">
							Email must not be empty
						</p>
					</div>
					<div
						class="form-control"
						:class="{ invalid: !password.isValid }"
					>
						<label for="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="********"
							v-model="password.val"
							@blur="clearValidity(password)"
						/>
						<p class="err__msg" v-if="!password.isValid">
							Email must not be empty
						</p>
					</div>
					<div class="ctas">
						<RouterLink to="/forgot">Forgot Password?</RouterLink>
						<div class="check">
							<input
								type="checkbox"
								name="checkbox"
								id="checkbox"
							/>
							<label for="checkbox">Remember Me</label>
						</div>
					</div>
					<div v-show="error" class="err">
						<p class="err__msg">{{ errorMsg }}</p>
					</div>
					<div class="btn">
						<BaseButton>Sign In</BaseButton>
					</div>
				</form>
				<p class="login__quiz">
					Not a member?
					<RouterLink to="/register">Sign Up</RouterLink>
				</p>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { reactive, ref } from "vue";
	import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
	import { firebaseApp } from "@/firebase/firebaseInit.js";
	import { RouterLink, useRouter } from "vue-router";

	import Google from "@/assets/icons/Google.vue";
	import OrItem from "@/components/items/OrItem.vue";

	const router = useRouter();

	const email = reactive({
		val: "",
		isValid: true,
	});
	const password = reactive({
		val: "",
		isValid: true,
	});

	const error = ref(null);
	const errorMsg = ref("");

	const formIsValid = ref(true);

	const clearValidity = (input) => {
		input.isValid = true;
	};

	const validateForm = () => {
		formIsValid.value = true;
		if (email.val === "" || !email.val.includes("@")) {
			email.isValid = false;
			formIsValid.value = false;
		}
		if (!password.val || password.val < 0) {
			password.isValid = false;
			formIsValid.value = false;
		}
	};

	const signIn = async () => {
		validateForm();
		if (!formIsValid.value) {
			return;
		}

		if (formIsValid.value) {
			const firebaseAuth = getAuth(firebaseApp);
			try {
				const loginUser = await signInWithEmailAndPassword(
					firebaseAuth,
					email.val,
					password.val
				);
				router.push("/");
				console.log(loginUser.user.uid);
				error.value = false;
				errorMsg.value = "";
			} catch (err) {
				error.value = true;
				errorMsg.value = err.message;
			}
		}
	};
</script>

<style lang="css" scoped>
	.login {
		min-height: 70vh;
	}

	.login__wrapper {
		max-width: 600px;
		margin-inline: auto;
		padding: 2rem 1rem;
	}

	.login__head,
	.login__text {
		text-align: center;
		color: rgb(2, 2, 15);
	}

	.login__head {
		font-size: 2.5rem;
	}

	.google {
		display: flex;
		gap: 1.5rem;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--color2);
		padding: 0.5rem;
	}

	form {
		display: grid;
		gap: 1rem;
		padding-block: 2rem;
		/* margin-inline: auto; */
	}

	.form-control label {
		display: block;
		padding: 0.5rem 0;
	}

	.form-control input {
		font: inherit;
		padding: 0.8rem;
		width: 100%;
		outline: var(--color2);
		position: relative;
	}

	.ctas {
		display: flex;
		justify-content: space-between;
	}

	.check {
		display: flex;
		gap: 0.5rem;
	}

	.invalid input {
		border: 1px solid rgb(255, 80, 60);
		background-color: rgb(255, 187, 179);
	}

	.err__msg {
		color: rgb(255, 80, 60);
		font-size: 0.8rem;
	}

	.login__quiz > a {
		text-decoration: none;
	}

	.btn button {
		width: 100%;
		cursor: pointer;
		border: 0;
		background: var(--color2);
		color: #fff;
		padding: 0.7em 1.5em;
		position: relative;
		z-index: 1;
	}

	.btn button::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);

		z-index: -1;
		transition: transform 300ms ease-in;
	}

	.btn button::after {
		transform: scaleX(0);
		transform-origin: right;
	}

	.btn button:hover::after {
		transform: scaleX(1);
		transform-origin: left;
	}
</style>
