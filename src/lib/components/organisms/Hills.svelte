<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
    import { page } from '$app/state';

	import Moon from '$lib/components/atoms/Moon.svelte';
    import { getMoonPhase, MoonPhase } from '$lib/utils/moon-phase';
    import Sun from '../atoms/Sun.svelte';

	let isSun = $state($theme === 'light');
	let isVisible = $state(false);
	let isTransitioning = $state(false);
	let isMounted = false;
    let moonPhase = $state(getMoonPhase());

	onMount(() => {
		// Initial rise animation
		isVisible = true;
		isMounted = true;
	});

	$effect(() => {
		// This effect depends on $theme.
		const currentTheme = $theme;

		// Don't do the hide/show transition on the first evaluation,
		// wait for mount to handle the initial animation.
		if (!isMounted) {
			return;
		}

		isTransitioning = true;

		const timeoutId = setTimeout(() => {
			isSun = currentTheme === 'light';
			isTransitioning = false;
		}, 500); // This duration should match the CSS transition time

		return () => {
			clearTimeout(timeoutId);
		};
	});
</script>

<div class="hill-part">
    {#if page.route.id === '/'}
	<div class="sun-moon" class:visible={isVisible && !isTransitioning} class:sun={isSun} class:moon={!isSun}>
		{#if isSun}
			<Sun />
		{:else}
			<!-- Display the moon phase icon -->
			<Moon />
			<!-- Uncomment the following lines if you want to display the moon phase text
		
         {#if moonPhase === MoonPhase.NewMoon}
                <div>New Moon</div>
            {:else if moonPhase === MoonPhase.WaxingCrescent}
                <div>Waxing Crescent</div>
            {:else if moonPhase === MoonPhase.FirstQuarter}
                <div>First Quarter</div>
            {:else if moonPhase === MoonPhase.WaxingGibbous}
                <div>Waxing Gibbous</div>
            {:else if moonPhase === MoonPhase.FullMoon}
                <Moon />
            {:else if moonPhase === MoonPhase.WaningGibbous}
                <div>Waning Gibbous</div>
            {:else if moonPhase === MoonPhase.LastQuarter}
                <div>Last Quarter</div>
            {:else if moonPhase === MoonPhase.WaningCrescent}
                <div>Waning Crescent</div>
            {/if} -->
		{/if}
	</div>
    {/if}
	<svg class="transition-hill" viewBox="0 0 1599 135" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M0 135V50.0141C0 50.0141 307.761 -1.70576 506.865 0.043387C599.939 0.861014 671.364 12.8536 743.178 24.9114C812.427 36.5386 882.037 48.2265 971.768 50.0141C1047.87 51.53 1107.93 44.6362 1167.21 37.8327C1232.44 30.3464 1296.72 22.9695 1380.35 27.0276C1466.19 31.1925 1599 50.0141 1599 50.0141V135H0Z"
			fill="var(--color--page-background)"
		/>
	</svg>
</div>

<style lang="scss">
	@use '$lib/scss/breakpoints';

	.hill-part {
		background: linear-gradient(
			60deg,
			var(--color--page-hero-background-gradient-from) 0%,
			var(--color--page-hero-background-gradient-to) 100%
		);
		position: absolute;
		top: 0px;
		width: 100vw;
		height: min(75vh, 500px);
		@include breakpoints.for-phone-only {
			height: min(75vh, 420px);
		}
	}

	.sun-moon {
		position: absolute;
        top: 30%;
		left: 80%;
		width: 128px;
		height: 128px;
		transition: all 0.5s ease-in-out;
		transform: translate(-50%, 150px); /* Start off-screen */
		opacity: 0;
		z-index: 2; /* Below the hills */

		@include breakpoints.for-phone-only {
            display: none;
        }

		&.visible {
			transform: translate(-50%, 0); /* Move to original position */
			opacity: 1;
		}

		&.sun {
			color: var(--color--sun);
		}

		&.moon {
			color: var(--color--moon);
		}
	}

	.transition-hill {
		position: absolute;
		margin-bottom: -1px;
		bottom: 0px;
		width: auto;
		z-index: 3; /* Above the sun/moon */
	}
</style>
