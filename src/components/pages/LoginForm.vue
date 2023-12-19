<template>
    <section>
        <div class="login">
            <p class="form-question">
                Don't have an account?
                <RouterLink to="/register">Register</RouterLink>
            </p>
            <h1 class="form__title">Sign In to KobiBlogs</h1>
            <form @submit.prevent="submitForm">
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

    const email = reactive({
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
        if (email.val === "" || !email.val.includes("@")) {
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
        const formData = {
            email: email,
            password: password,
        };

        console.log(formData);
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
