<script lang="ts">
    export let flush: boolean = false;
</script>

<div class="card" class:flush>
    {#if $$slots['heading']}
        <h3><slot name="heading" /></h3>
    {/if}
    <div class="card-body">
        <slot />
    </div>
    {#if $$slots['footer']}
        <div class="footer"><slot name="footer" /></div>
    {/if}
</div>

<style lang="scss">
    .card {
        background-color: var(--color--card-background);
        display: flex;
        flex-direction: column;
        transition: all 0.5s ease-in-out;
        border: 1px solid var(--color--border-strong);
        border-radius: 10px;
        padding: 0.75em;
        box-sizing: border-box;

        &.flush {
            padding: 0;
            overflow: hidden;
        }
    }

    .card-body {
        flex: 1;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .flush .card-body {
        padding: 0;
    }

    .footer {
        align-items: center;
        text-align: center;
        border-top: 1px solid rgba(var(--color--text-rgb), 0.3);
        padding: 5px 0 0;
    }
</style>
