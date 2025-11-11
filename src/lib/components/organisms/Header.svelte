<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import { fade, fly, scale } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';
    import GitHubIcon from '$lib/icons/GitHubIcon.svelte';
    import LinkedInIcon from '$lib/icons/LinkedInIcon.svelte';
    import NewLogo from '../atoms/NewLogo.svelte';

    let menuOpen: boolean = false;
    let escapeListenerAttached: boolean = false;
    const overlayId: string = 'mobile-navigation-overlay';

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

    function onBackdropKeydown(event: KeyboardEvent) {
        if (event && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
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
			<a class="logo brand-logo" href="/" aria-label="Site logo">
                <NewLogo />
            </a>
        </div>

        <div class="center">
            <ThemeToggle />
        </div>

        <div class="right ">
            <div class="toggle-button-wrapper">
                <span>Menu</span>
                <button
                    class="menu-toggle"
                    class:open={menuOpen}
                    aria-label="Toggle navigation"
                    aria-controls={overlayId}
                    aria-expanded={menuOpen}
                    on:click={toggleMenu}
                >
                    <span class="sr-only">Menu</span>
                    <span class="bar top" aria-hidden="true"></span>
                    <span class="bar middle" aria-hidden="true"></span>
                    <span class="bar bottom" aria-hidden="true"></span>
                </button>
                {#if menuOpen}
                    <div
                        class="desktop-popover"
                        role="menu"
                        aria-label="Main menu"
                        in:scale={{ start: 0.96, duration: 140, easing: cubicOut }}
                        out:fade={{ duration: 120 }}
                    >
                        <a href="/" role="menuitem" on:click={closeMenu}>Home</a>
                        <a href="/resume" role="menuitem" on:click={closeMenu}>Resume</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/vojtechmarek-dev" role="menuitem" on:click={closeMenu}>GitHub</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vojtechmarek-dev/" role="menuitem" on:click={closeMenu}>LinkedIn</a>
                    </div>
                {/if}
            </div>
        </div>
    </nav>

    {#if menuOpen}
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
                on:click={closeMenu}
                on:keydown={onBackdropKeydown}
                in:fade={{ duration: 250 }}
                out:fade={{ duration: 200 }}
            ></div>
            <div
                class="panel"
                in:fly={{ x: -40, duration: 600, easing: cubicOut }}
                out:fly={{ x: -40, duration: 500, easing: cubicOut }}
            >
                <div class="panel-top">
                    <a class="logo" href="/" aria-label="Site logo" on:click={closeMenu}>
                        <NewLogo />
                    </a>
                    <button class="close" aria-label="Close navigation" on:click={closeMenu}>
                        <span class="sr-only">Close</span>
                        <span class="x"></span>
                    </button>
                </div>
                <nav class="panel-links" aria-label="Mobile">
                    <a href="/" on:click={closeMenu}>Home</a>
                    <a href="/resume" on:click={closeMenu}>Resume</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/vojtechmarek-dev" on:click={closeMenu}>GitHub</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vojtechmarek-dev/" on:click={closeMenu}>LinkedIn</a>
                </nav>
            </div>
        </div>
    {/if}

</header>

<style lang="scss">
    @use '$lib/scss/breakpoints.scss';

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
        width: min(70%, 500px);
        background: color-mix(in srgb, var(--color--page-background) 45%, transparent);
        border: none;
        backdrop-filter: blur(24px) saturate(120%);
        border-radius: 1.25rem;
        border-color: color-mix(in srgb, var(--color--text) 10%, transparent);
        border-width: 0.10rem;
        border-style: solid;
        position: fixed;

        .left,
        .center,
        .right {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .brand-logo {
            display: flex;
            justify-content: space-between;
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
        .icon-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        .icon-link :global(svg) {
            height: 18px;
            width: 18px;
        }

        .toggle-button-wrapper {
            display: flex;
            align-items: center;
            gap: 10px;
            position: relative;

            /* Hide MENU text; keep pill compact but wide enough for content */
            > span {
                display: none;
            }
        }

        @include breakpoints.for-phone-only {
            //padding: 0.5rem 0.9rem;
        }
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

        .bar {
            position: absolute;
            left: 5px;
            right: 5px;
            height: 1.5px;
            background: var(--color--text);
            transition: transform 0.5s cubic-bezier(0.6, 0.01, -0.05, 0.9), opacity 0.3s ease, top 0.4s ease, background-color 0.3s ease;
        }

        .top { top: 7px; }
        .middle { top: 12px; }
        .bottom { top: 17px; }

        &.open {
            .top { top: 12px; transform: rotate(45deg); }
            .middle { opacity: 0; }
            .bottom { top: 12px; transform: rotate(-45deg); }
        }
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
            height: 36px;
            width: 36px;
            border: none;
            background: none;
            cursor: pointer;
            position: relative;

            .x {
                position: absolute;
                inset: 0;
                margin: auto;
                height: 20px;
                width: 20px;
            }

            .x::before,
            .x::after {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                top: 9px;
                height: 2px;
                background: var(--color--text);
            }

            .x::before { transform: rotate(45deg); }
            .x::after { transform: rotate(-45deg); }
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

        a {
            color: var(--color--text);
            text-decoration: none;
        }
    }

    /* Navigation marquee animation for brand text */
    @keyframes logoLeftAnim {
        0% { transform: translateX(0%); }
        50% { transform: translateX(-50%); }
        100% { transform: translateX(0%); }
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
        box-shadow: 0 12px 30px rgba(0,0,0,0.18);
        padding: 10px 12px;
        display: none;
        flex-direction: column;
        gap: 6px;
        min-width: 220px;
        z-index: 10001;
    }
    .desktop-popover a {
        text-decoration: none;
        color: var(--color--text);
        padding: 8px 10px;
        border-radius: 8px;
        transition: background-color 0.15s ease, color 0.15s ease;
    }
    .desktop-popover a:hover {
        background: color-mix(in srgb, var(--color--text) 6%, transparent);
        color: var(--color--text);
    }

    /* Show desktop popover and hide mobile overlay on wide screens */
    @media (min-width: 900px) {
        .desktop-popover { display: flex; }
        .mobile-nav-overlay { display: none; }
    }

</style>
