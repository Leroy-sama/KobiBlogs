import { defineStore } from "pinia";
import blogImage1 from "@/assets/img/apple-watch.webp";
import blogImage7 from "@/assets/img/magsafe.webp";
import blogImage2 from "@/assets/img/html-css.webp";
import blogImage3 from "@/assets/img/ml.jpg";
import blogImage4 from "@/assets/img/ai.png";
import blogImage5 from "@/assets/img/nvd.png";
import blogImage6 from "@/assets/img/wp.png";

export const useBlogStore = defineStore("blogStore", {
	state: () => ({
		blogs: [
			{
				id: "b01",
				category: "Apple",
				blogTitle: "New Apple watch Holder",
				blogCoverPhoto: blogImage1,
				blogDate: "January 3, 2024",
				blogDesc:
					"Introducing the new Apple Watch Holder, a sleek and stylish solution for those looking to upgrade their fitness devices.",
			},
			{
				id: "b02",
				category: "web",
				blogTitle: "Are you still using HTML and CSS",
				blogCoverPhoto: blogImage2,
				blogDate: "May 15, 2024",
				blogDesc:
					"With the introduction of more and more web frameworks, is HTML and CSS still being used?",
			},
			{
				id: "b03",
				category: "ML",
				blogTitle: "Machine Learning indepth",
				blogCoverPhoto: blogImage3,
				blogDate: "June 8, 2024",
				blogDesc:
					"Learn how you can get started in machine learning and break into the competitive ML scene",
			},
			{
				id: "b04",
				category: "AI",
				blogTitle: "Innovative AI Applications in the Real World",
				blogCoverPhoto: blogImage4,
				blogDate: "June 27, 2024",
				blogDesc:
					"Discover how AI can help businesses improve their customer experience and drive more sales.",
			},
			{
				id: "b05",
				category: "web",
				blogTitle: "Nodejs vs django for backend",
				blogCoverPhoto: blogImage5,
				blogDate: "July 19, 2024",
				blogDesc:
					"We take a deep dive in Nodejs and django to look at the pros and cons of using either.",
			},
			{
				id: "b06",
				category: "Web",
				blogTitle: "A look at wordpress and uses",
				blogCoverPhoto: blogImage6,
				blogDate: "July 30, 2024",
				blogDesc:
					"Wordpress blog description for the latest version of Wordpress (http://wordpress.org).",
			},
			{
				id: "b07",
				category: "ML",
				blogTitle: "The New Magsafe",
				blogCoverPhoto: blogImage7,
				blogDate: "August 12, 2024",
				blogDesc:
					"The MagSafe Holder 2.0 is the latest innovation and the successor to the previous modular iPhone charging station.",
			},
		],
	}),
});
