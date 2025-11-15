<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';
    import NewLogo from '../atoms/NewLogo.svelte';
    import Typewriter from '$lib/components/atoms/Typewriter.svelte';
    import NavigationMenuButton from './NavigationMenuButton.svelte';
    import MobileNavigationOverlay from '$lib/components/molecules/MobileNavigationOverlay.svelte';

    let menuOpen = $state(false);
    let escapeListenerAttached = $state(false);
    const overlayId: string = 'navigation-menu-overlay';
	let typerRef: any;
	const terminalLines: string[] = [
		'git fetch --all',
		'npm run build',
		'pnpm i',
		'vite dev --host',
		'deploy --region=eu',
		'playwright test',
		'git push origin master',
	];

    function onLogoClick(event: MouseEvent) {
        // if we are in home route - we can start the typer
        if (window.location.pathname === '/') {
            event.preventDefault();
            typerRef?.start();
        }
    }

    function toggleMenu() {
        menuOpen = !menuOpen;
    }

    function closeMenu() {
        if (menuOpen) {
            menuOpen = false;
        }
    }

    function onKeydown(event: KeyboardEvent) {
        if (event && event.key === 'Escape') {
            closeMenu();
        }
    }

    onMount(() => {
        if (!escapeListenerAttached) {
            window.addEventListener('keydown', onKeydown);
            escapeListenerAttached = true;
        }
    });

    onDestroy(() => {
        if (escapeListenerAttached) {
            window.removeEventListener('keydown', onKeydown);
            escapeListenerAttached = false;
        }
    });
</script>

<header class="navigation-wrapper">
    <nav class="menu-top">
		<div class="left">
			<a class="logo brand-logo" href="/" aria-label="Site logo" onclick={onLogoClick} style="position: relative;">
                <NewLogo />
                <Typewriter bind:this={typerRef} messages={terminalLines} />
            </a>
        </div>

        <div class="right">
            <ThemeToggle />
            <NavigationMenuButton
                open={menuOpen}
                overlayId={overlayId}
                onToggle={toggleMenu}
                onCloseMenu={closeMenu}
            />
        </div>
    </nav>

    <MobileNavigationOverlay
        open={menuOpen}
        overlayId={overlayId}
        onCloseMenu={closeMenu}
    />

</header>

<style lang="scss">
    @use '$lib/scss/breakpoints.scss';

    header.navigation-wrapper {
        position: relative;
        z-index: 9999;
    }

    .menu-top {
        position: fixed;
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
        padding: 1rem 1.25rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        width: min(80%, 500px);
        background: color-mix(in srgb, var(--color--page-background) 45%, transparent);
        border: none;
        backdrop-filter: blur(24px) saturate(120%);
        border-radius: 1.25rem;
        border-color: var(--color--primary-tint);
        border-width: 0.10rem;
        border-style: solid;
        position: fixed;

        .left,
        /* .center, */
        .right {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .brand-logo {
            display: flex;
            justify-content: left;
            align-items: center;
        }
        .brand-logo,
        .logo {
            line-height: 0;
        }
        .logo :global(svg) {
            height: 22px;
            width: auto;
        }

        @include breakpoints.for-phone-only {
            //padding: 0.5rem 0.9rem;
        }
    }

    /* Navigation marquee animation for brand text */
    @keyframes logoLeftAnim {
        0% { transform: translateX(0%); }
        50% { transform: translateX(-50%); }
        100% { transform: translateX(0%); }
    }



</style>
