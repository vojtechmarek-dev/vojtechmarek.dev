<script lang="ts">
    import MenuIcon from '$lib/icons/MenuIcon.svelte';
    import XmarkIcon from '$lib/icons/XmarkIcon.svelte';

    let { open, overlayId, onToggle } = $props<{
        open: boolean;
        overlayId: string;
        onToggle: () => void;
    }>();
</script>

<div class="toggle-button-wrapper">
    <button class="menu-toggle" aria-label="Toggle navigation" aria-controls={overlayId} aria-expanded={open} onclick={onToggle}>
        {#if open}
            <XmarkIcon />
        {:else}
            <MenuIcon />
        {/if}
    </button>
</div>

<style lang="scss">
    .toggle-button-wrapper {
        display: flex;
        align-items: center;
        gap: 10px;
        position: relative;

        @media (min-width: 900px) {
            display: none;
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
        color: var(--color--text);
    }
</style>
