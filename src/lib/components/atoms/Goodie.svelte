<script lang="ts">
</script>

<div class="goodie">
    <div class="top">
        <h3 class="heading"><slot name="heading">Goodie</slot></h3>
        {#if $$slots.icon}
            <div class="icon"><slot name="icon" /></div>
        {/if}
    </div>

    <p class="description"><slot name="description" /></p>

    <div class="body">
        <slot />
        {#if $$slots.value}
            <div class="value-row">
                <h1 class="value"><slot name="value" /></h1>
                {#if $$slots.caption}
                    <span class="caption"><slot name="caption" /></span>
                {/if}
            </div>
        {/if}
        {#if $$slots.command}
            <div class="command"><slot name="command" /></div>
        {/if}
    </div>

    {#if $$slots.left || $$slots.right}
        <div class="footer">
            <div class="footer-left"><slot name="left" /></div>
            <div class="footer-right"><slot name="right" /></div>
        </div>
    {/if}
</div>

<style lang="scss">
    @use '$lib/scss/breakpoints.scss';


    .goodie {
        display: flex;
        flex-direction: column;
        flex: 1 1 0;
        min-width: 0;
        min-height: 240px;

        @include breakpoints.for-phone-only {
            flex: 0 0 auto;
        }
        background-color: var(--color--card-background);
        border: 1px solid var(--color--border);
        border-radius: 14px;
        padding: 24px 26px;
    }

    .top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
    }

    .heading {
        font-size: 1.1rem;
        font-weight: 700;
        margin: 0;
    }

    .icon {
        width: 22px;
        height: 22px;
        flex-shrink: 0;
        color: var(--color--text-faint);
    }

    .description {
        margin: 8px 0 0;
        color: var(--color--text-dim);
        font-size: 0.9rem;
        line-height: 1.4;
    }

    .body {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 22px 0;
    }

    .value-row {
        display: flex;
        align-items: baseline;
        gap: 14px;
    }

    .value {
        color: var(--color--primary-accent);
    }

    .caption {
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--color--text-faint);
    }

    .command {
        font-family: 'Courier New', monospace;
        font-size: 0.85rem;
        color: var(--color--text-faint);
    }

    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding-top: 16px;
        border-top: 1px solid var(--color--border);
        font-size: 0.85rem;
        color: var(--color--text-dim);
    }

    .footer-right {
        display: flex;
        align-items: center;
        gap: 6px;
    }
</style>
