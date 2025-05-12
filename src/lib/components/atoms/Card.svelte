<script lang="ts">
</script>

<div class="card">
    <h3><slot name="heading">Default Heading</slot></h3>
    <div class="card-body">
        <slot />
    </div>
    <div class="footer"><slot name="footer"/></div>
</div>

<style lang="scss">
    .card {
    background-color: var(--color--card-background);
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease-in-out;

    /* Common styles for the outer container */
    border: 0.15em solid;
    border-color: var(--color--text);
    border-radius: 8px;
    padding: 0.75em;
    /* Ensure the card uses all available height */
    box-sizing: border-box;

    &:hover {
        box-shadow: 0px 0px 1px 7px color-mix(in srgb, var(--color--primary-contrast) 50%, transparent);
    }
    
}

.card-body {
    flex: 1;  /* This makes the body take up all available space */
    padding-top: 10px;
    padding-bottom: 10px;
}

.footer {
    align-items: center;
    text-align: center;
    border-top: 1px solid rgba(var(--color--text-rgb), 0.3);
    padding: 5px 0px 0px 0px;
}
</style>
