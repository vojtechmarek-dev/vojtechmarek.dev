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

    /* Common styles for the outer container */
    border: 1px solid;
    border-color: var(--color--border-strong);
    border-radius: 10px;
    padding: 0.75em;
    /* Ensure the card uses all available height */
    box-sizing: border-box;
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
