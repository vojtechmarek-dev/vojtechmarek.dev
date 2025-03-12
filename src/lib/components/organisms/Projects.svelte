<script lang="ts">
    import { Tween } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import type { Project } from '$lib/data/work-experiences';
    import Button from '../atoms/Button.svelte';
    import ProjectCard from '../molecules/ProjectCard.svelte';

    export let projects: Project[];

    // Create a reactive store for managing selected state
    let selectedCardIndex = -1;

    // Create tweened stores for each card's scale and opacity
    const opacities = projects.map(() => new Tween(1, { duration: 400, easing: cubicOut }));
    const selectedOpacity = new Tween(0, { duration: 800, easing: cubicOut });

    function handleCardSelected(index: number) {
        if (index === -1) {
            // Deselect, reset all
            projects.forEach((_, i) => {
                opacities[i].set(1);
            });
            selectedOpacity.set(0);
            selectedCardIndex = index;
            return;
        }


        projects.forEach((_, i) => {
            if (i === index) {
                selectedOpacity.set(1);
            } else {
                opacities[i].set(0.6);
            }
        });


        selectedCardIndex = index;
    }
</script>

<section class="projects-section">
    <header class="heading">
        <h2>Projects</h2>
        <p>Here are some of the projects I've worked on. Each one highlights the tools and frameworks I've used.</p>
    </header>
    <div class="grid">
        {#each projects as project, index}
        <div 
            class="project-card"
            class:selected={selectedCardIndex === index}
            style="
                opacity: {selectedCardIndex === index ? selectedOpacity.current : opacities[index].current};
            ">
            <ProjectCard
                
                title={project.title}
                description={project.description}
                skills={project.skills}
                timeframe={project.timeframe}
                link={project.link}
                details={project.details}
                projectIndex={index}
                cardSelected={handleCardSelected}
                selected={selectedCardIndex === index}
            />
        </div>
        {/each}
        <div class="buttons">
            <Button style="primary" href="/resume">View Resume</Button>
        </div>
    </div>

</section>

<style lang="scss">
    @use '$lib/scss/breakpoints.scss';

    .projects-section {
        .heading {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 10px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(min(100%, max(10rem, 100%/4)), 1fr));
            gap: 1.5rem;
            padding: 20px 0 0 0;
            position: relative;

            @include breakpoints.for-desktop-up {
                padding: 50px 50px 10px 50px;

            }

        }

        .project-card {
            display: flex;
            justify-content: center;
            min-height: 14.5rem;

            &.selected {
                opacity: 0;
                max-width: 100%;
                order: -1;
                grid-column: 1 / -1;
            }
        }

        .buttons {
            margin: 0 auto;
            display: flex;
            align-items: center;
        }
    }
</style>
