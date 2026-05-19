<script lang="ts">     import type { Project } from '$lib/data/work-experiences';
    import DecorativeHeader from '../atoms/DecorativeHeader.svelte';
    import FeaturedProjectCard from '../molecules/FeaturedProjectCard.svelte';
    import ProjectCard from '../molecules/ProjectCard.svelte';

    let { projects }: { projects: Project[] } = $props();

    const featured = $derived(projects.filter(p => p.featured));
    const regular  = $derived(projects.filter(p => !p.featured));
</script>

<section class="projects-section">
    <header class="heading">
        <DecorativeHeader type="h4" color="primary"># PROJECTS</DecorativeHeader>
        <h2>Things I've helped ship</h2>
        <p class="description">A selection of clinical and integration systems I've led or contributed to.</p>
    </header>

    {#each featured as project}
        <div class="featured-row">
            <FeaturedProjectCard
                title={project.title}
                description={project.description}
                skills={project.skills}
                timeframe={project.timeframe}
                link={project.link}
                featuredMeta={project.featuredMeta!}
            />
        </div>
    {/each}

    {#if regular.length}
        <div class="grid">
            {#each regular as project}
                <ProjectCard
                    title={project.title}
                    description={project.description}
                    skills={project.skills}
                    timeframe={project.timeframe}
                    link={project.link}
                />
            {/each}
        </div>
    {/if}
</section>

<style lang="scss">
    @use '$lib/scss/breakpoints.scss';

    .projects-section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        .heading {
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 5px;
        }

        .description {
            color: var(--color--text-dim);
            max-width: 600px;
        }

        .featured-row {
            width: 100%;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;

            @include breakpoints.for-phone-only {
                grid-template-columns: 1fr;
;   
                @include breakpoints.for-desktop-up {
                    max-width: 70%;
                }
;   
                @include breakpoints.for-desktop-up {
                    max-width: 70%;
                }
            }
        }
    }
</style>
