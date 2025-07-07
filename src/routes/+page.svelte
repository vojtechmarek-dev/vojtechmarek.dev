<script>
    import Hero from '$lib/components/organisms/Hero.svelte';
    import Projects from '$lib/components/organisms/Projects.svelte';
    import { PROJECT_LIST } from '$lib/data/work-experiences';

    const projects=PROJECT_LIST //.sort((a,b) =>  b.timeframe - a.timeframe)
</script>

<Hero/>

<div class="centered">
    <Projects projects={projects}/>
</div>

<style lang="scss">
    .centered {
        display: flex;
        flex-direction: column;
        text-align: start;
    }
</style>
