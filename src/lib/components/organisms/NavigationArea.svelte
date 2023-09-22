<script lang="ts">
    import Hero from "./Hero.svelte";

    export let display: string = '/';
</script>

{#if display == '/'}
    <Hero/>
{:else}
    hellooooo world
{/if}