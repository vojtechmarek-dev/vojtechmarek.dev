<script lang="ts">
    let { gap = '0.2em' }: { gap?: string } = $props();
</script>

<span class="logo-text">
    <span class="chevron">&gt;</span><span class="initials" style="margin-left: {gap}">VM</span>
</span>

<style lang="scss">
    .logo-text {
        display: inline-flex;
        align-items: baseline;
        font-family: var(--font--mono);
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1;
        letter-spacing: -0.01em;
    }

    .chevron {
        color: var(--color--primary);
    }

    .initials {
        color: currentColor;
    }
</style>
