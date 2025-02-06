<script lang="ts">
    import type { Project } from '$lib/data/work-experiences';
    import Button from '../atoms/Button.svelte';
    import ProjectCard from '../molecules/ProjectCard.svelte';

    export let projects: Project[];
    let selectedCardIndex = -1;

    function handleCardSelected(index: number) {
        selectedCardIndex = index === selectedCardIndex ? -1 : index;
    }
</script>

<section class="projects-section">
    <header class="heading">
        <h2>Projects</h2>
        <p>Here are some of the projects I've worked on. Each one highlights the tools and frameworks I've used.</p>
    </header>
    <div class="grid">
        {#each projects as project, index}
        <div class="project-card"
        class:selected={selectedCardIndex === index}
        >
            <ProjectCard
                title={project.title + ' ' + index}
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

    </div>
    <div class="buttons">
        <Button style="primary" href="/resume">View Resume</Button>
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
            grid-template-columns: repeat(auto-fit, /* fluid columns, but max out at 3 */ minmax(min(100%, max(10rem, 100%/4)), 1fr));
            gap: 1.5rem;
            padding: 50px 50px 10px 50px;
        }

        .project-card {
            min-height: 14.5rem;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            will-change: transform, opacity;


            transition: scale 0.1s;
            &:not(.selected):hover {
              scale: 1.033;
            }
        
            // Selected state styles
            &.selected {
                order: -1;
                grid-column: 1 / -1;
                
                // Additional styling for selected state
                transform: scale(1.05);
                z-index: 10;
                box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            }
        }
        
        .buttons {
            display: flex;
            justify-content: center;
            gap: 10px;
            width: 100%;
            padding-top: 10px;
        }
    }
</style>
