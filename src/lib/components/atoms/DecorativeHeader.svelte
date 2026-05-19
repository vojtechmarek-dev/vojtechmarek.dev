<script lang="ts">
    export let type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';
    export let color: 'primary' | 'accent' | 'faded' = 'primary';
    export let size: 'meta' | undefined = undefined;
    //export let transform: 'uppercase' | 'lowercase' | 'capitalize' | 'none' = 'uppercase';
</script>

<svelte:element this={type} class="decorative-header" class:primary={color === 'primary'} class:accent={color === 'accent'} class:faded={color === 'faded'} class:size-meta={size === 'meta'}>
    <slot />
</svelte:element>

<style lang="scss">
    .decorative-header {
        font-weight: 500;
        line-height: 1.2;
        letter-spacing: 0.1em;
        margin: 0;
        font-family: var(--font--mono);

        &.primary {
            color: var(--color--primary);
        }

        &.accent {
            color: var(--color--accent);
        }

        &.faded {
            color: var(--color--text-dim);
        }

        &.size-meta {
            font-size: var(--text--mono-meta);
        }
    }
</style>