<script lang="ts">
</script>

<div class="card">
    <h3><slot name="heading">Default Heading</slot></h3>
    <div class="description">
        <slot />
    </div>
    <div class="footer"><slot name="footer"/></div>
</div>

<style lang="scss">
    .card {

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
        box-shadow: 0px 0px 1px 7px color-mix(in srgb, var(--color--primary) 50%, transparent);
    }
}

.description {
    flex: 1;  /* This makes the description take up all available space */
    padding-top: 10px;
    padding-bottom: 10px;
    opacity: 75%;
}

.footer {
    align-items: center;
    text-align: center;
    border-top: lightgrey 2px solid;
    padding: 5px 0px 0px 0px;
}
</style>
