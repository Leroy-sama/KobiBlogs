import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/pages/HomePage.vue";

const routes = [
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
		component: () => import("@/components/pages/BlogDetails.vue"),
	},
	{
		path: "/create-blog",
		component: () => import("@/components/pages/CreateBlog.vue"),
	},
	{
		path: "/loginpage",
		component: () => import("@/components/pages/LoginPage.vue"),
	},
	{
		path: "/login",
		component: () => import("@/components/pages/LoginForm.vue"),
	},
	{
		path: "/register",
		component: () => import("@/components/pages/RegisterForm.vue"),
	},
	{
		path: "/forgot",
		component: () => import("@/components/pages/ForgotPassword.vue"),
	},
	{
		path: "/profile",
		component: () => import("@/components/user/UserProfile.vue"),
	},
	{
		path: "/admin",
		component: () => import("@/components/user/Admin.vue"),
	},
	{
		path: "/blog-preview",
		component: () => import("@/components/pages/BlogPreview.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
