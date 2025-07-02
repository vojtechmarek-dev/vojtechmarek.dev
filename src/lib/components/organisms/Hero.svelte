<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	import Sun from '$lib/components/atoms/Sun.svelte';
	import Moon from '$lib/components/atoms/Moon.svelte';
	import SuitcaseIcon from '$lib/icons/SuitcaseIcon.svelte';
	import WrenchIcon from '$lib/icons/WrenchIcon.svelte';
	import Button from '../atoms/Button.svelte';

	let isSun = $state($theme === 'light');
	let isVisible = $state(false);
	let isTransitioning = $state(false);
	let isMounted = false;

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

<div class="container">
	<section id="hero">
		<h1 class="hello">Hey! I'm Vojtěch</h1>
		<p class="intro">
			<span class="left"
				>Welcome to my personal website! I'm a developer actively building this site with Svelte.</span
			>
			<span class="right">
				Feel free to explore my <b>Projects</b>, or my <b>Resume</b>.
			</span>
		</p>
		<div class="hero-buttons">
			<Button style="understated" href="/goodies">
				<WrenchIcon slot="icon" />
				Goodies
			</Button>
			<!-- todo later       
            <div class="disabled">
                <Button>Blog</Button>
            </div> -->
			<Button style="accent" href="/resume">
				<SuitcaseIcon slot="icon" />
				Experience
			</Button>
		</div>
	</section>
	<div class="kernel">
		<div class="sun-moon" class:visible={isVisible && !isTransitioning} class:sun={isSun} class:moon={!isSun}>
			{#if isSun}
				<Sun />
			{:else}
				<Moon />
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss';

	.sun-moon {
		width: 128px; /* Increased size for better visibility */
		height: 128px;
		transition: all 0.5s ease-in-out;
		transform: translateY(150px); /* Start off-screen */
		opacity: 0;

		&.visible {
			transform: translateY(0); /* Move to original position */
			opacity: 1;
		}

		&.sun {
			color: var(--color--sun);
		}

		&.moon {
			color: var(--color--moon);
		}
	}

	.container {
		padding: 40px 0 150px;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		overflow: hidden;

		#hero {
			flex: 1 1 60%; // Allow shrinking
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: start;
			gap: 15px !important;
			position: relative;
			padding: 20px 20px 70px 20px;

			.hello {
				text-align: left;
				margin: unset;
			}

			.intro {
				display: flex;
				flex-direction: column;
				width: min(100%, 460px);
				.left {
					text-align: start;
				}
				.right {
					text-align: end;
				}
			}

			.hero-buttons {
				display: flex;
				flex-wrap: wrap;
				align-items: left;
				justify-content: center;
				gap: 10px;
				width: 100%;
			}
		}

		.kernel {
			display: flex;
			align-items: center; /* Center vertically */
			justify-content: center; /* Center horizontally */
			flex-grow: 2;
			position: relative; /* Needed for child absolute positioning if we were using it */
			overflow: hidden; /* Hide the part of the sun/moon that is outside */

			@include breakpoints.for-phone-only {
				display: none;
			}
		}
	}
</style>
