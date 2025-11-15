<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import MenuLinks from '../molecules/MenuLinks.svelte';
	import MenuIcon from '$lib/icons/MenuIcon.svelte';
	import XmarkIcon from '$lib/icons/XmarkIcon.svelte';

	let {
		open,
		overlayId,
		onToggle,
		onCloseMenu
	} = $props<{
		open: boolean;
		overlayId: string;
		onToggle: () => void;
		onCloseMenu: () => void;
	}>();
</script>

<div class="toggle-button-wrapper">
	<button
		class="menu-toggle"
		class:open={open}
		aria-label="Toggle navigation"
		aria-controls={overlayId}
		aria-expanded={open}
		onclick={onToggle}
	>
		{#if open}
			<XmarkIcon />
		{:else}
			<MenuIcon />
		{/if}
	</button>

	{#if open}
		<div
			class="desktop-popover"
			role="menu"
			aria-label="Main menu"
			in:scale={{ start: 0.96, duration: 140, easing: cubicOut }}
			out:fade={{ duration: 120 }}
		>
			<MenuLinks onCloseMenu={onCloseMenu} />
		</div>
	{/if}
</div>

<style lang="scss">
	.toggle-button-wrapper {
		display: flex;
		align-items: center;
		gap: 10px;
		position: relative;
	}

	.menu-toggle {
		display: inline-block;
		height: 26px;
		width: 32px;
		border: none;
		background: none;
		cursor: pointer;
		position: relative;
		padding: 0;
		color: var(--color--text);
	}

	/* Desktop popover menu anchored to toggle button */
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

	/* Show desktop popover and hide mobile overlay on wide screens */
	@media (min-width: 900px) {
		.desktop-popover {
			display: flex;
		}
	}
</style>

