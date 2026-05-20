<script lang="ts">
    import Logo from '../atoms/Logo.svelte';
    import Typewriter from '$lib/components/atoms/Typewriter.svelte';
    import Navigation from '$lib/components/molecules/Navigation.svelte';
    import { terminalLines } from '$lib/data/terminal-lines';

    let typerRef: any;

    function onLogoClick() {
        typerRef?.start();
    }
</script>

<header class="navigation-wrapper">
    <nav class="menu-top">
        <div class="left">
            <button class="logo brand-logo" aria-label="Site logo" onclick={onLogoClick}>
                <Logo />
                <Typewriter bind:this={typerRef} messages={terminalLines} />
            </button>
        </div>

        <div class="right">
            <Navigation />
        </div>
    </nav>
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
        width: min(80%, 600px);
        @include breakpoints.for-phone-only {
            width: 90%;
        }
        background: color-mix(in srgb, var(--color--card-background) 70%, transparent);
        backdrop-filter: blur(24px) saturate(120%);
        border-radius: 1.25rem;
        border-color: var(--color--border);
        border-width: 0.1rem;
        border-style: solid;

        .left,
        .right {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .brand-logo {
            display: flex;
            justify-content: left;
            align-items: center;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            color: inherit;
            position: relative;
        }
    }
</style>
