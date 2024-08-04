<template>
	<section>
		<div class="login">
			<p class="form-question">
				Don't have an account?
				<RouterLink to="/register">Register</RouterLink>
			</p>
			<h1 class="form__title">Sign In to KobiBlogs</h1>
			<form @submit.prevent="signIn">
				<div class="form__control">
					<input
						type="email"
						placeholder="Email Address"
						id="email"
						v-model="email.val"
						@blur="clearValidity(email)"
					/>
				</div>
				<div class="form__control">
					<input
						type="password"
						placeholder="Password"
						id="password"
						v-model.number="password.val"
						@blur="clearValidity(password)"
					/>
				</div>
				<div class="form__control btn">
					<button type="submit">Login</button>
				</div>
				<div class="forgot">
					<p>
						Forgot password?<RouterLink to="/forgot"
							>Reset</RouterLink
						>
					</p>
				</div>
			</form>
		</div>
	</section>
</template>

<script setup>
	import { reactive, ref } from "vue";
	import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
	import { firebaseApp } from "@/firebase/firebaseInit.js";
	import { useRouter } from "vue-router";

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

	// const submitForm = () => {
	//     validateForm();

	//     if (!formIsValid) {
	//         return;
	//     }
	//     const formData = {
	//         email: email,
	//         password: password,
	//     };

	//     console.log(formData);
	// };

	const signIn = async () => {
		validateForm();
		if (!formIsValid) {
			return;
		}

		if (formIsValid) {
			const firebaseAuth = getAuth(firebaseApp);
			try {
				const loginUser = await signInWithEmailAndPassword(
					firebaseAuth,
					email.val,
					password.val
				);
				router.push("/home");
				console.log(loginUser.user.uid);
			} catch (err) {
				error.value = true;
				errorMsg.value = err.message;
			}
		}
	};
</script>

<style scoped>
	.login {
		display: grid;
		place-content: center;
		padding: 4em 0;
	}

	.form__title {
		color: rgb(2, 2, 15);
	}

	.form__control {
		padding: 0.5em 0;
	}

	.form__control input {
		max-width: 700px;
		width: 100%;
		outline: var(--color2);
		border: none;
		border-bottom: 1px solid var(--colorBlack);

		padding: 1em 0;
		position: relative;
	}

	.form__control input::placeholder {
		position: absolute;
		font-size: 1rem;
	}

	.form__control input:focus::placeholder {
		position: absolute;
		top: 0;
		left: 0;
		font-size: 0.7rem;
		text-transform: uppercase;
	}
	.invalid input {
		border: 1px solid salmon;
		background-color: rgb(255, 187, 179);
	}

	.err-msg {
		color: salmon;
	}

	.btn {
		display: flex;
		justify-content: center;
	}

	.btn button {
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
