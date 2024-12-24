<template>
	<div class="post">
		<div class="switch-container">
			<span class="switch-label">Toggle Edit Mode</span>
			<label class="switch">
				<input
					type="checkbox"
					v-model="isEditing"
					@change="toggleEdit"
				/>
				<span class="slider round"></span>
			</label>
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const emit = defineEmits(["isEditing"]);

	const isEditing = ref(false);

	const toggleEdit = () => {
		emit("isEditing", isEditing.value);
	};
</script>

<style scoped>
	.switch-container {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.switch-label {
		font-size: 0.875rem;
		color: #4b5563;
	}

	/* The switch - the box around the slider */
	.switch {
		position: relative;
		display: inline-block;
		width: 48px;
		height: 24px;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 18px;
		width: 18px;
		left: 3px;
		bottom: 3px;
		background-color: white;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: var(--color2);
	}

	input:focus + .slider {
		box-shadow: 0 0 1px var(--color2);
	}

	input:checked + .slider:before {
		transform: translateX(24px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 24px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
