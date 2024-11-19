import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

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
		component: () => import("../pages/BlogsPage.vue"),
	},
	{
		path: "/create-blog",
		component: () => import("../pages/CreateBlog.vue"),
	},
	{
		path: "/login",
		component: () => import("../pages/LoginForm.vue"),
	},
	{
		path: "/register",
		component: () => import("../pages/RegisterForm.vue"),
	},
	{
		path: "/forgot",
		component: () => import("../pages/ForgotPassword.vue"),
	},
	{
		path: "/profile",
		component: () => import("../components/user/UserProfile.vue"),
	},
	{
		path: "/admin",
		component: () => import("../components/user/Admin.vue"),
	},
	{
		path: "/blog-preview",
		component: () => import("../pages/BlogPreview.vue"),
	},
	{
		path: "/:catchAll(.*)",
		component: () => import("../pages/NotFound.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
