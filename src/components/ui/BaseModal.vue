<template>
	<div class="modal">
		<div class="modal-content">
			<p>{{ modalMessage }}</p>
			<BaseButton @click="closeModal">Close</BaseButton>
		</div>
	</div>
</template>

<script setup>
	import BaseButton from "./BaseButton.vue";

	const emit = defineEmits(["close-modal"]);

	const props = defineProps(["modalMessage"]);

	const closeModal = () => {
		emit("close-modal");
	};
</script>

<style lang="css" scoped>
	.modal {
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 11010;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		background-color: rgba(0, 0, 0, 0.7);
	}

	.modal-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1.5rem;
		border-radius: 8px;
		max-width: 300px;
		padding: 2rem;
		background-color: #fff;
	}

	p {
		text-align: center;
	}
</style>
