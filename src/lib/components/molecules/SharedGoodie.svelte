<script lang="ts">
</script>

<div class="goodie">
    <h3><slot name="heading">Default Heading</slot></h3>
    <div class="description">
        <slot name="description"/>
    </div>
    <div><slot /></div>
    <div class="value"><slot name="value" /></div>
    <div><slot name="control" /></div>
</div>

<style lang="scss">
    .goodie {
        /* Common styles for the outer container */
        width: 280px;
        min-height: 225px;
        max-height: 500px;
        border: 0.15em solid;
        border-radius: 8px;
        padding: 0.5em;
    }

    .description {
        height: 50px;
        padding-top: 10px;
        padding-left: 20px;
        opacity: 50%;
    }

    .value {
        align-items: center;
        text-align: center;
        font-size: larger;
        font-weight: bold;
        color: #9747ff;
        border-bottom: lightgrey 2px solid;
        margin-left: 20px;
        margin-right: 20px;
        padding: 10px;
    }
</style>
