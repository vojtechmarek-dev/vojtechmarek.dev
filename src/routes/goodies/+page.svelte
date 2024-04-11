<script>
    import Goodies from '$lib/components/organisms/Goodies.svelte';
</script>

<div class="goodies-container">
    
    <Goodies/>
</div>

<style lang="scss">
    .goodies-container {
        display: flex;
        top: -200px; //todo: fixme hack around my own wrong layout with hills component 
        justify-content: center;
        align-items: center;
        position: relative;
        min-height: 250px;
    }
</style>
