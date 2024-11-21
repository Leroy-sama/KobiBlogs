<template>
	<button v-if="!link" :class="mode">
		<slot></slot>
	</button>
	<RouterLink v-else :to="to" :class="mode">
		<slot />
	</RouterLink>
</template>

<script setup>
	defineProps({
		mode: {
			type: String,
			required: false,
			default: null,
		},
		link: {
			type: Boolean,
			required: false,
			default: false,
		},
		to: {
			type: String,
			required: false,
			default: "/",
		},
	});
</script>

<style scoped>
	button,
	a {
		cursor: pointer;
		border: 0;
		background: var(--color2);
		color: #fff;
		font: inherit;
		font-weight: 700;
		padding: 0.75rem 1.5rem;
		position: relative;
		z-index: 1;
		width: 100%;
	}

	button::after,
	a::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);

		z-index: -1;
		transition: transform 300ms ease-in;
	}

	button::after,
	a::after {
		transform: scaleX(0);
		transform-origin: right;
	}

	button:hover::after,
	a:hover::after {
		transform: scaleX(1);
		transform-origin: left;
	}

	.flat {
		background-color: transparent;
		border: none;
		color: red;
	}

	.outline {
		background-color: transparent;
		border-color: var(--color2);
		color: var(--color2);
	}

	/* a:hover,
	a:active,
	button:hover,
	button:active {
		background-color: #270041;
		border-color: #270041;
	}

	.flat {
		background-color: transparent;
		color: #3a0061;
		border: none;
	}

	.outline {
		background-color: transparent;
		border-color: #270041;
		color: #270041;
	}

	.flat:hover,
	.flat:active,
	.outline:hover,
	.outline:active {
		background-color: #edd2ff;
	} */
</style>
