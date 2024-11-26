<script setup lang="ts">
	import Date from "@/assets/icons/Date.vue";
	import User from "@/assets/icons/User.vue";
</script>

<template>
	<section class="blog">
		<div class="blog__wrapper">
			<div class="blog__header">
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
			</div>
			<div class="blog__body">
				<img src="@/assets/img/cable management.jpg" alt="" />

				<h2 class="sect__head">The challenges of a modern workspace</h2>
				<p class="sect__text">
					Laptop, monitors, computer, keyboard, mouse and chargers -
					at a well-equipped workplace in the office or home office,
					the number of electronic devices seems nearly infinite. And
					if they're not connected via Bluetooth, they're all
					connected by one thing: a cable. Or in some cases, several.
					Thanks to HDMI, network and USB, the number of cables
					quickly adds up. Keeping control of so many cables and
					avoiding cable chaos can often be a challenge.
				</p>
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
	</section>
</template>

<style lang="css" scoped>
	.blog__wrapper {
		width: min(90%, 80rem);
		margin-inline: auto;
	}

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
		gap: 0.5rem;
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
