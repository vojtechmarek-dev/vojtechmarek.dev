<script lang="ts">
    import type { Project } from '$lib/data/work-experiences';
    import Button from '../atoms/Button.svelte';
    import ProjectCard from '../molecules/ProjectCard.svelte';

    export let projects: Project[];
</script>

<section class="projects-section">
    <header class="heading">
        <h2>Projects</h2>
        <p>Here are some of the projects I've worked on. Each one highlights the tools and frameworks I've used.</p>
        <div class="buttons">
            <Button style="primary" href="/resume">View Resume</Button>
        </div>
    </header>
    <div class="grid">
        {#each projects as project}
            <ProjectCard
                title={project.title}
                description={project.description}
                skills={project.skills}
                timeframe={project.timeframe}
            />
        {/each}
    </div>
</section>

<style lang="scss">
    
    .projects-section {
        .heading {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 10px;

            .buttons {
                display: flex;
                justify-content: center;
                gap: 10px;
                width: 100%;
                padding-top: 10px;
            }
        }

        .grid {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            padding: 50px;
            justify-content: center;
            width: 100%;

            :global(> *) {
                flex: 1 0 320px;
            }
        }
    }
</style>