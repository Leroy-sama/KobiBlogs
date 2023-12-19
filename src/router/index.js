import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/components/pages/HomePage.vue";
import BlogsPage from "@/components/pages/BlogsPage.vue";
import CreateBlog from "@/components/pages/CreateBlog.vue";
import LoginPage from "@/components/pages/LoginPage.vue";
import LoginForm from "@/components/pages/LoginForm.vue";
import RegisterForm from "@/components/pages/RegisterForm.vue";
import ForgotPassword from "@/components/pages/ForgotPassword.vue";
import UserProfile from "@/components/user/UserProfile.vue";
import Admin from "@/components/user/Admin.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: "/home",
        },
        {
            path: "/home",
            component: HomePage,
        },
        {
            path: "/blogs",
            component: BlogsPage,
        },
        {
            path: "/create-blog",
            component: CreateBlog,
        },
        {
            path: "/loginpage",
            component: LoginPage,
        },
        {
            path: "/login",
            component: LoginForm,
        },
        {
            path: "/register",
            component: RegisterForm,
        },
        {
            path: "/forgot",
            component: ForgotPassword,
        },
        {
            path: "/profile",
            component: UserProfile,
        },
        {
            path: "/admin",
            component: Admin,
        },
    ],
});

export default router;
