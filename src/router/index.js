import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const routes = [
	{
		path: "/home",
		redirect: "/",
	},
	{
		path: "/",
		component: HomePage,
		meta: {
			title: "Home",
		},
	},
	{
		path: "/blogs",
		component: () => import("../pages/BlogsPage.vue"),
		meta: {
			title: "Blogs",
		},
	},
	{
		path: "/blogs/1",
		component: () => import("../pages/BlogDetails.vue"),
		meta: {
			title: "Blog Details",
		},
	},
	{
		path: "/create-blog",
		component: () => import("../pages/CreateBlog.vue"),
		meta: {
			title: "Create Blog",
		},
	},
	{
		path: "/login",
		component: () => import("../pages/LoginForm.vue"),
		meta: {
			title: "Login",
		},
	},
	{
		path: "/register",
		component: () => import("../pages/RegisterForm.vue"),
		meta: {
			title: "Register",
		},
	},
	{
		path: "/forgot",
		component: () => import("../pages/ForgotPassword.vue"),
		meta: {
			title: "Forgot Password",
		},
	},
	{
		path: "/profile",
		component: () => import("../components/user/UserProfile.vue"),
		meta: {
			title: "Profile",
		},
	},
	{
		path: "/admin",
		component: () => import("../components/user/Admin.vue"),
		meta: {
			title: "Admin",
		},
	},
	{
		path: "/blog-preview",
		component: () => import("../pages/BlogPreview.vue"),
		meta: {
			title: "Blog Preview",
		},
	},
	{
		path: "/:catchAll(.*)",
		component: () => import("../pages/NotFound.vue"),
		meta: {
			title: "Not Found",
		},
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} | KobiBlogs`;
	next();
});

export default router;
