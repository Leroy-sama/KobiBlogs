<template>
	<div class="modal" ref="modal">
		<div class="modal-content">
			<Icon
				@click="closePreview"
				icon="carbon:close-filled"
				width="25"
				class="icon"
			/>
			<img :src="blogCoverPhoto" alt="" />
		</div>
	</div>
</template>

<script setup>
	import { computed } from "vue";
	import { useCreateblogStore } from "@/store/create-blog";
	import { Icon } from "@iconify/vue";

	const createblogStore = useCreateblogStore();

	const closePreview = () => {
		createblogStore.openPhotoPreview();
	};

	const blogCoverPhoto = computed(() => {
		return createblogStore.blogPhotoFileURL;
	});
</script>

<style lang="scss" scoped>
	.modal {
		top: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 9999;
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;

		.modal-content {
			display: flex;
			justify-content: center;
			position: relative;
			border-radius: 12px;
			background-color: #fff;
			height: 400px;
			width: 600px;
			padding: 50px;
			box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
				0 2px 4px -1px rgba(0, 0, 0, 0.06);

			.icon {
				width: 24px;
				height: auto;
				cursor: pointer;
				font-size: 24px;
				position: absolute;
				top: 15px;
				right: 15px;
				color: #303030;
			}

			img {
				margin-top: 16px;
				display: block;
				width: auto;
				height: 100%;
				box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
					0 2px 4px -1px rgba(0, 0, 0, 0.06);
			}
		}
	}
</style>
