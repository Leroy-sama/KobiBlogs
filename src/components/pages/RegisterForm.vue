<template>
    <section>
        <div class="register">
            <p class="form-question">
                Already have an account?
                <RouterLink to="/login">Login</RouterLink>
            </p>
            <h1 class="form__title">Create your KobiBlogs Account</h1>
            <form @submit.prevent="submitForm">
                <div
                    class="form__control"
                    :class="{ invalid: !firstName.isValid }"
                >
                    <input
                        type="text"
                        placeholder="First Name"
                        id="firstName"
                        v-model="firstName.val"
                        @blur="clearValidity(firstName)"
                    />
                    <p class="err-msg" v-if="!firstName.isValid">
                        First name must not be empty
                    </p>
                </div>
                <div
                    class="form__control"
                    :class="{ invalid: !lastName.isValid }"
                >
                    <input
                        type="text"
                        placeholder="Last Name"
                        id="lastName"
                        v-model="lastName.val"
                        @blur="clearValidity(lastName)"
                    />
                    <p class="err-msg" v-if="!lastName.isValid">
                        Last name must not be empty
                    </p>
                </div>
                <div
                    class="form__control"
                    :class="{ invalid: !username.isValid }"
                >
                    <input
                        type="text"
                        placeholder="Username"
                        id="username"
                        v-model="username.val"
                        @blur="clearValidity(username)"
                    />
                    <p class="err-msg" v-if="!username.isValid">
                        Username must not be empty
                    </p>
                </div>
                <div class="form__control" :class="{ invalid: !email.isValid }">
                    <input
                        type="email"
                        placeholder="Email Address"
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
                    <input
                        type="password"
                        placeholder="Password"
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
            <p class="err-msg" v-if="!formIsValid">
                Please fix the above errors and submit again
            </p>
        </div>
    </section>
</template>

<script setup>
    import { reactive, ref } from "vue";

    const firstName = reactive({
        val: "",
        isValid: true,
    });
    const lastName = reactive({
        val: "",
        isValid: true,
    });
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
        if (firstName.val === "") {
            firstName.isValid = false;
            formIsValid.value = false;
        }
        if (lastName.val === "") {
            lastName.isValid = false;
            formIsValid.value = false;
        }
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

    const submitForm = () => {
        validateForm();

        if (!formIsValid) {
            return;
        }

        const userData = {
            firstName: firstName.val,
            lastName: lastName,
            email: email,
            username: username,
            password: password,
        };

        console.log(userData);
    };
</script>

<style scoped>
    <style scoped > .form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .form__title {
        color: rgb(2, 2, 15);
    }

    .form__control {
        padding: 0.5em 0;
    }

    .form__control input {
        max-width: 600px;
        width: 100%;
        outline: var(--color2);
        border: none;
        background-color: whitesmoke;
        padding: 1em;
    }

    .invalid input {
        border: 1px solid salmon;
        background-color: rgb(255, 187, 179);
    }

    .err-msg {
        color: salmon;
    }
    .register {
        display: grid;
        place-content: center;
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
        padding: 1em 1.5em;
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
