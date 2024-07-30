<script setup lang="ts">
	import Date from "@/assets/icons/Date.vue";
	import User from "@/assets/icons/User.vue";
</script>

<template>
	<div class="blog">
		<div class="blog__wrapper">
			<h1 class="blog__head">
				Cable management made easy: The smart solution for organized
				cables
			</h1>
			<div class="blog__info">
				<div class="info-date">
					<span class="date">Aug 2, 2023</span>
					<Date />
				</div>
				<div class="info-person">
					<span class="person">By Leroy Mokobi</span>
					<User />
				</div>
			</div>
			<img src="@/assets/cable_post.webp" alt="" />
		</div>
	</div>
</template>
