<script lang="ts">
	import MenuIcon from '$lib/icons/MenuIcon.svelte';
	import XmarkIcon from '$lib/icons/XmarkIcon.svelte';
	import DesktopNavigationPopover from '$lib/components/molecules/DesktopNavigationPopover.svelte';

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
		<DesktopNavigationPopover onClose={onCloseMenu} />
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

</style>

