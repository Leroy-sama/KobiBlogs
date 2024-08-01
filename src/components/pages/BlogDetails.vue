<script setup lang="ts">
	import Date from "@/assets/icons/Date.vue";
	import User from "@/assets/icons/User.vue";
</script>

<template>
	<div class="blog">
		<div class="blog__wrapper">
			<div class="blog__heading">
				<h1 class="blog__head">
					Cable management made easy: The smart solution for organized
					cables
				</h1>
				<div class="blog__info">
					<div class="info-date">
						<Date />
						<span class="date">Aug 2, 2023</span>
					</div>
					<div class="info-person">
						<User />
						<span class="person">By Leroy Mokobi</span>
					</div>
				</div>
				<img src="@/assets/img/cable_post.webp" alt="" />
			</div>
			<div class="blog__body">
				<img src="@/assets/img/cable_post.webp" alt="" />
				<div class="sect">
					<h2 class="sect__head">
						The challenges of a modern workspace
					</h2>
					<p class="sect__text">
						Laptop, monitors, computer, keyboard, mouse and chargers
						- at a well-equipped workplace in the office or home
						office, the number of electronic devices seems nearly
						infinite. And if they're not connected via Bluetooth,
						they're all connected by one thing: a cable. Or in some
						cases, several. Thanks to HDMI, network and USB, the
						number of cables quickly adds up. Keeping control of so
						many cables and avoiding cable chaos can often be a
						challenge.
					</p>
				</div>
				<div class="sect">
					<h2 class="sect__head">
						An organized workspace for increased productivity
					</h2>
					<p class="sect__text">
						Yet an orderly structure under the desk is very
						important, as new ideas and clear thoughts are developed
						best in a tidy workspace without any distractions. This
						applies not only to productivity, but of course also to
						aesthetics. Once you've created a beautiful and
						functional setup on the desk with the Setup Cockpit and
						Streamline Collection, the structure should be
						maintained under the desk as well, to create a
						productive and coherent work environment.
					</p>
				</div>
				<div class="sect">
					<h2 class="sect__head">Organized cables in no time</h2>
					<p class="sect__text">
						Creating a tidy and efficient work environment is easier
						than it seems. With our innovative
						Cable-Management-System, all cables can be organized and
						securely attached in no time. This brings order and
						structure not only on, but also under the desk. The
						well-thought-out cable management offers the ideal
						solution to increase productivity and let new ideas
						spark up thanks to a neatly structured workspace.
					</p>
					<img src="@/assets/img/details__img.webp" alt="" />
				</div>
				<div class="sect">
					<h2 class="sect__head">
						The ideal solution - also for standing desks
					</h2>
					<p class="sect__text">
						The cable management, which is mounted under the desk,
						creates structure at every workplace. Standing desks or
						height-adjustable desks have long ceased to be a rarity
						and are often standard in a modern office. The ergonomic
						work at a desk of this kind can be perfectly combined
						with the desk cable management, because it can be easily
						mounted under any desk. Cable organization with the
						cable management ensures that while the standing desk is
						adjusted in height, all cables remain organized in
						place. This guarantees an effortless transition from
						working while sitting at your desk to working while
						standing at your desk at all times.
					</p>
					<img src="@/assets/img/details__finishing.webp" alt="" />
					<p class="closing">
						Take control of your cables now with the
						Cable-Management-System and increase your productivity
						with ease.
					</p>
				</div>
			</div>
			<div class="author">
				<div class="author__text">
					<span>Author</span>
					<p>Leroy Mokobi</p>
				</div>
				<div class="author__img">
					<img
						src="https://i.pinimg.com/564x/9e/b8/4b/9eb84b2de52c5198527a56844298e61a.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="css" scoped>
	.blog__head {
		text-align: center;
		padding: 1rem;
	}

	.blog__info {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.info-date,
	.info-person {
		display: flex;
		align-items: center;
	}

	.date,
	.person {
		color: var(--color5);
		font-size: 0.8rem;
	}

	.blog__body {
		margin: 1.5rem;
	}

	.author {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	.author__text span {
		font-size: 2rem;
		font-weight: 700;
	}

	.author__img img {
		max-width: 150px;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		border-radius: 50%;
	}
</style>
