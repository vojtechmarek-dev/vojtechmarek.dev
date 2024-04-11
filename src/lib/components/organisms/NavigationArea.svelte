<script lang="ts">
    import Hero from './Hero.svelte';
    import GoodieGreet from './GoodieGreet.svelte';
    import ResumeGreet from './ResumeGreet.svelte'

    export let display = '/';
</script>

<!-- todo: not a great and general way to do this. refactor candidate -->
{#if display == '/'}
    <Hero />
{:else if display == '/goodies'}
    <GoodieGreet />
{:else if display === '/resume'}
    <ResumeGreet />
{:else}
 <!-- todo -->
{/if}
