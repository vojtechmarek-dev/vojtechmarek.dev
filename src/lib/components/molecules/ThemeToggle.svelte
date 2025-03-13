<script lang="ts">
    import MoonIcon from '$lib/icons/MoonIcon.svelte';
    import SunIcon from '$lib/icons/SunIcon.svelte';
    import { fade } from 'svelte/transition';
    import { theme } from '$lib/stores/theme';
    import { onMount } from 'svelte';

    // this is weird and possible hacky way to do this
    let visible = false;
    console.log("am i visible:", visible)
    onMount(() => {
        setTimeout(() => {
            visible = true;
        }, 50);
    })



    function toggleTheme() {
        $theme === 'dark' ? theme.set('light') : theme.set('dark');
    }
</script>

<button
    class="theme-toggle"
    title="Toggle between light and dark theme. Current theme: {$theme}"
    aria-label="Toggle between light and dark theme. Current theme: {$theme}"
    data-theme={$theme}
    on:click={toggleTheme}
>
    {#if visible}
        <div in:fade={{ duration: 300 }}>
            {#if $theme === 'dark'}
                <div id="sun" in:fade={{ duration: 300 }}>
                    <SunIcon />
                </div>
            {:else}
                <div id="moon" in:fade={{ duration: 300 }}>
                    <MoonIcon />
                </div>
            {/if}
        </div>
    {/if}
</button>

<style lang="scss">
    .theme-toggle {
        height: 24px;
        padding: 0;
        appearance: none;
        border: none;
        background: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    #moon,
    #sun {
        color: var(--color--text);
    }
</style>
