import { defineStore } from "pinia";

export const useBlogStore = defineStore("blogStore", {
	state: () => ({
		blogs: [
			{
				id: "b01",
				category: "Apple",
				blogTitle: "New Apple watch Holder",
				blogCoverPhoto:
					"https://i.pinimg.com/564x/51/75/f2/5175f2a55bc8d44fc4c1b132477ac3ff.jpg",
				blogDate: "January 3, 2024",
				blogDesc:
					"Introducing the new Apple Watch Holder, a sleek and stylish solution for those looking to upgrade their fitness devices.",
			},
			{
				id: "b02",
				category: "web",
				blogTitle: "Are you still using HTML and CSS",
				blogCoverPhoto:
					"https://i.pinimg.com/564x/48/52/6a/48526a98493907f2dc33893a718ba1df.jpg",
				blogDate: "May 15, 2024",
				blogDesc:
					"With the introduction of more and more web frameworks, is HTML and CSS still being used?",
			},
			{
				id: "b03",
				category: "ML",
				blogTitle: "Machine Learning indepth",
				blogCoverPhoto:
					"https://i.pinimg.com/564x/34/16/cc/3416cc88543f5e6601b7854878ce0899.jpg",
				blogDate: "June 8, 2024",
				blogDesc:
					"Learn how you can get started in machine learning and break into the competitive ML scene",
			},
			{
				id: "b04",
				category: "AI",
				blogTitle: "Innovative AI Applications in the Real World",
				blogCoverPhoto:
					"https://i.pinimg.com/564x/33/f8/5a/33f85ae4b62c8bbaf20283852fa74655.jpg",
				blogDate: "June 27, 2024",
				blogDesc:
					"Discover how AI can help businesses improve their customer experience and drive more sales.",
			},
			{
				id: "b05",
				category: "web",
				blogTitle: "Nodejs vs django for backend",
				blogCoverPhoto:
					"https://i.pinimg.com/564x/03/ce/f0/03cef0ed8e57fae5083c6b498188ce65.jpg",
				blogDate: "July 19, 2024",
				blogDesc:
					"We take a deep dive in Nodejs and django to look at the pros and cons of using either.",
			},
			{
				id: "b06",
				category: "Web",
				blogTitle: "A look at wordpress and uses",
				blogCoverPhoto:
					"https://i.pinimg.com/564x/3b/1d/7e/3b1d7e4ae14bd472645a004040bca8c5.jpg",
				blogDate: "July 30, 2024",
				blogDesc:
					"Wordpress blog description for the latest version of Wordpress (http://wordpress.org).",
			},
		],
	}),
});
