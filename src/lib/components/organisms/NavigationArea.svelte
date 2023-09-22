<script lang="ts">
    import Hero from './Hero.svelte';
    import GoodieGreet from './GoodieGreet.svelte';

    export let display: string = '/';
</script>

{#if display == '/'}
    <Hero />
{:else}
    <GoodieGreet />
{/if}
