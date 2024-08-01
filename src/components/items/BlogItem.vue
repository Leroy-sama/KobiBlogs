<template>
	<div class="post">
		<div class="post-img">
			<span class="tag">{{ category }}</span>
			<img :src="blogCoverPhoto" alt="" />
		</div>
		<div class="post__details">
			<RouterLink to="/blogs">
				<h2 class="post__head">{{ blogTitle }}</h2>
			</RouterLink>
			<p class="post__desc">
				{{ blogDesc }}
			</p>
			<span class="date">{{ blogDate }}</span>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps([
		"id",
		"category",
		"blogTitle",
		"blogCoverPhoto",
		"blogDate",
		"blogDesc",
	]);
</script>

<style scoped>
	.blog-card {
		position: relative;
		cursor: pointer;
		border-radius: 5px;
		background-color: #fff;
		transition: 1.5s ease all;
	}

	.blog-card:hover {
		transform: rotateZ(-1deg) scale(1.02);
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06);
	}

	.info {
		padding: 1.5em;
		display: grid;
		gap: 1em;
	}

	.icons {
		display: flex;
		position: absolute;
		top: 10px;
		right: 10px;
		z-index: 99;
	}

	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 35px;
		height: 35px;
		border-radius: 50%;
		background-color: #fff;
		transition: 0.5s ease all;
	}

	.icon:hover {
		background: black;
	}

	.info h4 {
		color: var(--color2);
	}

	.info a {
		align-self: flex-end;
	}

	.edit,
	.delete {
		color: red;
	}
</style>
