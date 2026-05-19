<script lang="ts">
    export let color: 'primary' | 'secondary' | undefined = 'primary';
</script>

<span class="tag {color}">
    <slot />
</span>

<style lang="scss">
    .tag {
        font-family: var(--font--mono);
        font-size: 11px;
        padding: 4px 9px;
        border-radius: 4px;
        letter-spacing: 0.02em;
        white-space: nowrap;
        display: inline-block;

        &.primary {
            background: color-mix(in srgb, var(--color--primary) 8%, transparent);
            border: 1px solid color-mix(in srgb, var(--color--primary) 18%, transparent);
            color: var(--color--primary);
        }

        &.secondary {
            background: color-mix(in srgb, var(--color--primary-accent) 8%, transparent);
            border: 1px solid color-mix(in srgb, var(--color--primary-accent) 18%, transparent);
            color: var(--color--primary-accent);
        }
    }
</style>
