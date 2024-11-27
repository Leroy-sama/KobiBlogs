<template>
	<div class="profile">
		<BaseModal
			v-if="modalActive"
			:modalMessage="modalMessage"
			@close-modal="closeModal"
		/>
		<div class="profile__wrapper">
			<h2>Account Settings</h2>
			<div class="profile-info">
				<div class="initials">{{ userStore.profileInitials }}</div>
				<div class="admin-badge">
					<Icon icon="ri:admin-line" color="white" width="30" />
					<span>admin</span>
				</div>
				<div class="input">
					<label for="username">Username:</label>
					<input type="text" id="username" v-model="username" />
				</div>
				<div class="input">
					<label for="email">Email:</label>
					<input disabled type="text" id="email" v-model="email" />
				</div>
				<BaseButton @click="updateProfile">Save Changes</BaseButton>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, computed } from "vue";
	import BaseModal from "@/components/ui/BaseModal.vue";
	import { Icon } from "@iconify/vue";
	import { useUserStore } from "@/store/user";

	const userStore = useUserStore();

	const modalMessage = ref("Changes were saved");
	const modalActive = ref(null);

	const closeModal = () => {
		modalActive.value = !modalActive.value;
	};

	const username = computed({
		get() {
			return userStore.profileUsername;
		},
		set(newValue) {
			userStore.updateUsername(newValue);
		},
	});

	const email = computed(() => {
		return userStore.profileEmail;
	});

	const updateProfile = async () => {
		try {
			await userStore.updateUsersettings();
			modalMessage.value = "Changes were saved successfully!";
		} catch (error) {
			modalMessage.value = "Failed to save changes. Please try again.";
			console.error("Error updating profile:", error);
		} finally {
			modalActive.value = true;
		}
	};
</script>

<style lang="scss" scoped>
	.profile {
		&__wrapper {
			max-width: 1000px;
			padding: 4rem 1.5rem;

			h2 {
				text-align: center;
				margin-bottom: 16px;
				font-weight: 300;
				font-size: 32px;
			}

			.profile-info {
				border-radius: 8px;
				box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
					0 2px 4px -1px rgba(0, 0, 0, 0.06);
				padding: 32px;
				background-color: #f1f1f1;
				display: flex;
				flex-direction: column;
				max-width: 600px;
				margin: 32px auto;

				.initials {
					position: initial;
					width: 80px;
					height: 80px;
					font-size: 32px;
					background-color: #303030;
					color: #fff;
					display: flex;
					align-self: center;
					align-items: center;
					justify-content: center;
					border-radius: 50%;
				}

				.admin-badge {
					display: flex;
					gap: 1em;
					align-self: center;
					color: #fff;
					font-size: 14px;
					padding: 8px 24px;
					border-radius: 8px;
					background-color: #303030;
					margin: 16px 0;
					text-align: center;
					text-transform: capitalize;

					.icon {
						width: 14px;
						height: auto;
						margin-right: 8px;
					}
				}

				.input {
					margin: 16px 0;

					label {
						font-size: 14px;
						display: block;
						padding-bottom: 6px;
					}
					input {
						width: 100%;
						border: none;
						background-color: #f2f7f6;
						padding: 8px;
						height: 50px;
						@media (min-width: 900px) {
						}

						&:focus {
							outline: none;
						}
					}
				}

				button {
					align-self: center;
				}
			}
		}
	}
</style>
