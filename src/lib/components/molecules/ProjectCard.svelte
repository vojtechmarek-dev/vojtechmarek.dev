<script lang="ts">
    import type { Skill } from '$lib/data/work-experiences';
    import InternetIcon from '$lib/icons/InternetIcon.svelte';
    import NavArrowIcon from '$lib/icons/NavArrowIcon.svelte';
    import NavArrowLeftIcon from '$lib/icons/NavArrowIcon.svelte';
    import Button from '../atoms/Button.svelte';
    import Card from '../atoms/Card.svelte';
    import Tag from '../atoms/Tag.svelte';


    // Separate inputs for the Project properties
    let {
        title,
        description,
        skills,
        timeframe,
        link,
        details,
        projectIndex,
        cardSelected,
        selected
    }: {
        title: string;
        description: string;
        skills: Skill[];
        timeframe: number;
        link: string | undefined;
        details: string[] | undefined;
        projectIndex: number;
        cardSelected: (index: number) => void;
        selected: boolean;
    } = $props();

</script>

<Card>
    <div class="headingContainer" slot="heading">
        <div>{title}</div>
        {#if link}<a href={link} target="_blank" rel="noopener noreferrer"><InternetIcon /></a>{/if}
    </div>
    <div class="timeframe">
        {timeframe}
    </div>
    <div class="description">
        {description}
    </div>
    <div class="details">
        {#if details}
            {#if selected}
                <Button size="small" style="clear" on:click={() => cardSelected(-1)} aria-expanded="true">
                    <span>Less Details</span>
                    <NavArrowLeftIcon direction="up" />
                </Button>
            {:else}
                <Button size="small" style="clear" on:click={() => cardSelected(projectIndex)} aria-expanded="false">
                    <span>More Details</span>
                    <NavArrowIcon direction="down" />
                </Button>
            {/if}
             {#if selected}
                <div class="details">
                    {#each details as detail}
                        <li>{detail}</li>
                    {/each}
                </div>
            {/if}
        {/if}
    </div>
    <div class="footer" slot="footer">
        
        <div class="tags">
            {#each skills as tag}
                <Tag>{tag.label}</Tag>
            {/each}
        </div>
    </div>
</Card>

<style lang="scss">
    .headingContainer {
        display: flex;
        justify-content: space-between;
    }

    .footer {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .tags {
        flex-direction: row;
        display: flex;
        align-items: center;
        gap: 5px;
        flex-wrap: wrap;
        padding-top: 5px;
    }

    .description {
        opacity: 75%;
    }

    .timeframe {
        font-size: small;
    }

    .details {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding: 0px 10px;
    }
</style>
