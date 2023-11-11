<script lang="ts">
    import Hero from './Hero.svelte';
    import GoodieGreet from './GoodieGreet.svelte';

    export let display = '/';
</script>

{#if display == '/'}
    <Hero />
{:else}
    <GoodieGreet />
{/if}
