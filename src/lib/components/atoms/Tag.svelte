<script lang="ts">
	export let color: 'primary' | 'secondary' | undefined = 'primary';
</script>

<div class="tag {color}">
	<slot />
</div>

<style lang="scss">
	.tag {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		padding: 5px 15px;
		border-radius: 10px;
		font-weight: 500;
		font-size: 0.85rem;
		width: fit-content;
		white-space: nowrap;

		&.primary {
			background-color: var(--color--primary-accent-tint);
			color: var(--color--primary-contrast);
		}
		&.secondary {
			background-color: var(--color--primary-accent-tint);
			color: var(--color--secondary);
		}
	}
</style>