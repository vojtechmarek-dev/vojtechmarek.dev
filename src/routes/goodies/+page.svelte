<script>
    import GoodieGreet from '$lib/components/organisms/GoodieGreet.svelte';
    import Goodies from '$lib/components/organisms/Goodies.svelte';
</script>

<GoodieGreet />
<div class="goodies-container">
    <Goodies />
</div>

<style lang="scss">
    @import '$lib/scss/breakpoints.scss';

    .goodies-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        min-height: 350px;

        @include for-phone-only {
                margin-top: 150px;
            }
    }
</style>
