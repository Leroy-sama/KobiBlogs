import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import { firebaseApp } from "@/firebase/firebaseInit";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
			requiresAuth: false,
		},
	},
	{
		path: "/blogs",
		component: () => import("../pages/BlogsPage.vue"),
		meta: {
			title: "Blogs",
			requiresAuth: false,
		},
	},
	{
		path: "/blogs/:id",
		component: () => import("../pages/BlogDetails.vue"),
		meta: {
			title: "Blog Details",
			requiresAuth: false,
		},
	},
	{
		path: "/create-blog",
		component: () => import("../pages/CreateBlog.vue"),
		meta: {
			title: "Create Blog",
			requiresAuth: true,
		},
	},
	{
		path: "/login",
		component: () => import("../pages/LoginForm.vue"),
		meta: {
			title: "Login",
			requiresAuth: false,
		},
	},
	{
		path: "/register",
		component: () => import("../pages/RegisterForm.vue"),
		meta: {
			title: "Register",
			requiresAuth: false,
		},
	},
	{
		path: "/forgot",
		component: () => import("../pages/ForgotPassword.vue"),
		meta: {
			title: "Forgot Password",
			requiresAuth: false,
		},
	},
	{
		path: "/profile",
		component: () => import("../components/user/UserProfile.vue"),
		meta: {
			title: "Profile",
			requiresAuth: true,
		},
	},
	{
		path: "/admin",
		component: () => import("../components/user/Admin.vue"),
		meta: {
			title: "Admin",
			requiresAuth: true,
		},
	},
	{
		path: "/blog-preview",
		component: () => import("../pages/BlogPreview.vue"),
		meta: {
			title: "Blog Preview",
			requiresAuth: true,
		},
	},
	{
		path: "/view-blog/:id",
		component: () => import("../pages/ViewBlog.vue"),
		meta: {
			title: "View Blog",
			requiresAuth: false,
		},
	},
	{
		path: "/edit-blog/:id",
		component: () => import("../pages/EditBlog.vue"),
		meta: {
			title: "Edit Blog",
			requiresAuth: true,
		},
	},
	{
		path: "/:catchAll(.*)",
		component: () => import("../pages/NotFound.vue"),
		meta: {
			title: "Not Found",
			requiresAuth: false,
		},
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	},
});

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} | KobiBlogs`;
	next();
});

const getCurrentUser = () => {
	return new Promise((resolve) => {
		const auth = getAuth(firebaseApp);
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			unsubscribe();
			resolve(user);
		});
	});
};

router.beforeEach(async (to, from, next) => {
	try {
		const user = await getCurrentUser();

		if (to.matched.some((record) => record.meta.requiresAuth)) {
			if (user) {
				next();
			} else {
				next({ path: "/login" });
			}
		} else {
			if (user && (to.path === "/login" || to.path === "/register")) {
				next({ path: "/" });
			} else {
				next();
			}
		}
	} catch (err) {
		console.error("Authentication error:", err);
		next({ path: "/login" });
	}

	// let user = null;
	// const auth = getAuth(firebaseApp);
	// onAuthStateChanged(auth, (user) => {
	// 	if (user) {
	// 		this.user = user;
	// 		console.log(user);
	// 	}
	// });
	// if (to.matched.some((res) => res.meta.requiresAuth)) {
	// 	if (user) {
	// 		next();
	// 	} else {
	// 		return next({ path: "/" });
	// 	}
	// } else {
	// 	return next();
	// }
});

export default router;
