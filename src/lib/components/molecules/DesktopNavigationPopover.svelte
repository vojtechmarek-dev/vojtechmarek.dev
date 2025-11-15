<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import MenuLinks from './MenuLinks.svelte';

	let { onClose } = $props<{ onClose: () => void }>();

	let containerEl: HTMLDivElement | null = null;
</script>

<div
	class="desktop-popover"
	role="menu"
	aria-label="Main menu"
	in:scale={{ start: 0.96, duration: 140, easing: cubicOut }}
	out:fade={{ duration: 120 }}
	bind:this={containerEl}
>
	<MenuLinks onCloseMenu={onClose} />
</div>

<style lang="scss">
	/* Desktop popover menu anchored to toggle button (parent must be position: relative) */
	.desktop-popover {
		position: absolute;
		top: calc(100% + 10px);
		right: 0;
		transform: none;
		background: var(--color--page-background);
		color: var(--color--text);
		border: 1px solid color-mix(in srgb, var(--color--text) 12%, transparent);
		border-radius: 12px;
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
		padding: 10px 12px;
		display: none;
		flex-direction: column;
		min-width: 220px;
		z-index: 10001;
	}

	/* Show only on wide screens; mobile uses the overlay */
	@media (min-width: 900px) {
		.desktop-popover {
			display: flex;
		}
	}
</style>

