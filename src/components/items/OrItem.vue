<template>
	<div class="or">
		<span class="or__bar"></span>
		<p class="or__text">Or</p>
		<span class="or__bar"></span>
	</div>
</template>

<style lang="css" scoped>
	.or {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	.or__bar {
		width: 70px;
		height: 2px;
		background-color: var(--color2);
	}
</style>
