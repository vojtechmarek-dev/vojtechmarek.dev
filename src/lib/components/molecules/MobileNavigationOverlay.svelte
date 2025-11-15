<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import NewLogo from '../atoms/NewLogo.svelte';
	import MenuLinks from './MenuLinks.svelte';
    import XmarkIcon from '$lib/icons/XmarkIcon.svelte';

	let {
		open,
		overlayId,
		onCloseMenu
	} = $props<{
		open: boolean;
		overlayId: string;
		onCloseMenu: () => void;
	}>();

	function onBackdropKeydown(event: KeyboardEvent) {
		if (event && (event.key === 'Enter' || event.key === ' ')) {
			event.preventDefault();
			onCloseMenu();
		}
	}
</script>

{#if open}
	<!-- Mobile overlay -->
	<div
		id={overlayId}
		class="mobile-nav-overlay menu-wrapper"
		aria-modal="true"
		role="dialog"
		in:fade={{ duration: 250 }}
		out:fade={{ duration: 200 }}
	>
		<div
			class="backdrop"
			role="button"
			tabindex="0"
			aria-label="Close menu"
			onclick={onCloseMenu}
			onkeydown={onBackdropKeydown}
			in:fade={{ duration: 250 }}
			out:fade={{ duration: 200 }}
		></div>
		<div
			class="panel"
			in:fly={{ x: -40, duration: 600, easing: cubicOut }}
			out:fly={{ x: -40, duration: 500, easing: cubicOut }}
		>
			<div class="panel-top">
				<a class="logo" href="/" aria-label="Site logo" onclick={onCloseMenu}>
					<NewLogo />
				</a>
				<button class="close" aria-label="Close navigation" onclick={onCloseMenu}>
					<XmarkIcon/>
				</button>
			</div>
			<nav class="panel-links" aria-label="Mobile">
				<MenuLinks onCloseMenu={onCloseMenu} />
			</nav>
		</div>
	</div>
{/if}

<style lang="scss">
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.mobile-nav-overlay {
		position: fixed;
		inset: 0;
		z-index: 10000;
		display: block;

		.backdrop {
			position: absolute;
			inset: 0;
			background: color-mix(in srgb, var(--color--page-background) 35%, transparent);
		}

		.panel {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			width: 100vw;
			max-width: 100%;
			background: var(--color--page-background);
			color: var(--color--text);
			transform: translateZ(0);
			display: flex;
			flex-direction: column;
			padding: 20px;
		}
	}

	.panel-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 56px;

		.close {
			color: var(--color--text);
			cursor: pointer;
			border: none;
			background: none;

		}
	}

	.panel-links {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 18px;
		padding: 20px 0;
		font-size: 1.4rem;
	}

	/* Menu wrapper overrides to better match reference */
	.menu-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		color: var(--color--text);
		overflow-y: scroll;
	}

	/* Hide mobile overlay on wide screens */
	@media (min-width: 900px) {
		.mobile-nav-overlay {
			display: none;
		}
	}
</style>

