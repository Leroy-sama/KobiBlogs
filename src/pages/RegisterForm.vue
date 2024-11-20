<template>
	<section class="register">
		<div class="register__wrapper">
			<h1 class="register__head">Sign Up</h1>
			<p class="register__text">
				Enter your details to create an account
			</p>
			<div class="form-box">
				<form @submit.prevent="register">
					<div
						class="form__control"
						:class="{ invalid: !username.isValid }"
					>
						<label for="username">Username</label>
						<input
							type="text"
							placeholder="eg. user11"
							id="username"
							v-model="username.val"
							@blur="clearValidity(username)"
						/>
						<p class="err-msg" v-if="!username.isValid">
							Username must not be empty
						</p>
					</div>
					<div
						class="form__control"
						:class="{ invalid: !email.isValid }"
					>
						<label for="email">Email Address</label>
						<input
							type="email"
							placeholder="example@me.com"
							id="email"
							v-model="email.val"
							@blur="clearValidity(email)"
						/>
						<p class="err-msg" v-if="!email.isValid">
							Email must not be empty
						</p>
					</div>
					<div
						class="form__control"
						:class="{ invalid: !password.isValid }"
					>
						<label for="password">Password</label>
						<input
							type="password"
							placeholder="********"
							id="password"
							v-model.number="password.val"
							@blur="clearValidity(password)"
						/>
						<p class="err-msg" v-if="!password.isValid">
							Password mustbe 6 characters and above
						</p>
					</div>
					<div class="form__control btn">
						<button type="submit">Sign Up</button>
					</div>
				</form>
				<p class="form-question">
					Already have an account?
					<RouterLink to="/login">Login</RouterLink>
				</p>
			</div>
			<!-- <p class="err-msg" v-if="!formIsValid">
				Please fix the above errors and submit again
			</p> -->
		</div>
	</section>
</template>

<script setup>
	import { reactive, ref } from "vue";
	import { getFirestore, doc, setDoc } from "firebase/firestore";
	import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
	import { firebaseApp } from "@/firebase/firebaseInit.js";
	import { useRouter } from "vue-router";

	const router = useRouter();

	const email = reactive({
		val: "",
		isValid: true,
	});
	const username = reactive({
		val: "",
		isValid: true,
	});
	const password = reactive({
		val: "",
		isValid: true,
	});
	const formIsValid = ref(true);

	const clearValidity = (input) => {
		input.isValid = true;
	};

	const validateForm = () => {
		formIsValid.value = true;
		if (username.val === "") {
			username.isValid = false;
			formIsValid.value = false;
		}
		if (email.val === "") {
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

	//     const userData = {
	//         firstName: firstName.val,
	//         lastName: lastName,
	//         email: email,
	//         username: username,
	//         password: password,
	//     };

	//     console.log(userData);
	// };

	const register = async () => {
		validateForm();
		if (!formIsValid) {
			return;
		}

		if (formIsValid) {
			const firebaseAuth = getAuth(firebaseApp);
			const createUser = await createUserWithEmailAndPassword(
				firebaseAuth,
				email.val,
				password.val
			);
			console.log(createUser.user);
			const db = getFirestore(firebaseApp);
			const userUid = createUser.user.uid;
			const userData = {
				username: username.val,
				email: email.val,
			};
			const userDocRef = doc(db, "users", userUid);
			await setDoc(userDocRef, userData);
			console.log("user data stored in Firestore:", userData);
			router.push("/home");
		}
	};
</script>

<style lang="css" scoped>
	.register__wrapper {
		max-width: 600px;
		margin-inline: auto;
		padding-block: 2rem;
	}

	.register__head,
	.register__text {
		text-align: center;
		color: var(--colorBlack);
	}

	.register__head {
		font-size: 2.5rem;
	}

	form {
		display: grid;
		gap: 1rem;
		padding-block: 2rem;
		/* margin-inline: auto; */
	}

	.form__control label {
		display: block;
		padding: 0.5rem 0;
	}

	.form__control input {
		font: inherit;
		padding: 0.8rem;
		width: 100%;
		outline: var(--color2);
		position: relative;
	}

	.invalid input {
		border: 1px solid salmon;
		background-color: rgb(255, 187, 179);
	}

	.err-msg {
		color: salmon;
		font-size: 0.8rem;
	}

	.btn {
	}

	.btn button {
		cursor: pointer;
		border: 0;
		background: var(--color2);
		color: #fff;
		padding: 1em 1.5em;
		position: relative;
		z-index: 1;
		width: 100%;
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
