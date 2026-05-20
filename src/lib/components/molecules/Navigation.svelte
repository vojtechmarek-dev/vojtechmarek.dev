<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import { page } from '$app/stores';
    import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';
    import NavigationMenuButton from '$lib/components/organisms/NavigationMenuButton.svelte';
    import MobileNavigationOverlay from '$lib/components/molecules/MobileNavigationOverlay.svelte';

    let menuOpen = $state(false);
    let escapeListenerAttached = $state(false);
    const overlayId: string = 'navigation-menu-overlay';

    function toggleMenu() {
        menuOpen = !menuOpen;
    }

    function closeMenu() {
        if (menuOpen) menuOpen = false;
    }

    function onKeydown(event: KeyboardEvent) {
        if (event?.key === 'Escape') closeMenu();
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

<nav class="nav-links" aria-label="Main">
    <a class="nav-link" class:active={$page.url.pathname === '/'} href="/">~/</a>
    <a class="nav-link" class:active={$page.url.pathname === '/resume'} href="/resume">resume</a>
    <a class="nav-link" class:active={$page.url.pathname === '/goodies'} href="/goodies">goodies</a>
</nav>
<span class="nav-separator">|</span>
<ThemeToggle />

<NavigationMenuButton open={menuOpen} {overlayId} onToggle={toggleMenu} />

<MobileNavigationOverlay open={menuOpen} {overlayId} onCloseMenu={closeMenu} />

<style lang="scss">
    @use '$lib/scss/breakpoints.scss';

    .nav-links {
        display: flex;
        align-items: center;
        gap: 0.125rem;

        @include breakpoints.for-phone-only {
            display: none;
        }
    }

    .nav-separator {
        display: inline-block;
        margin: 0 0.25rem;
        color: var(--color--text-faint);

        @include breakpoints.for-phone-only {
            display: none;
        }
    }

    .nav-link {
        color: var(--color--text);
        text-decoration: none;
        padding: 6px 10px;
        font-size: 0.875rem;
        font-family: var(--font--mono);

        &:hover,
        &.active {
            font-weight: 700;
        }
    }
</style>
