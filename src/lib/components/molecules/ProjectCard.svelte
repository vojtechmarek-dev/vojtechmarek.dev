<script lang="ts">
    import type { Skill } from '$lib/data/work-experiences';
    import InternetIcon from '$lib/icons/InternetIcon.svelte';
    import NavArrowIcon from '$lib/icons/NavArrowIcon.svelte';
    import NavArrowLeftIcon from '$lib/icons/NavArrowIcon.svelte';
    import Button from '../atoms/Button.svelte';
    import Card from '../atoms/Card.svelte';
    import DecorativeHeader from '../atoms/DecorativeHeader.svelte';
    import Tag from '../atoms/Tag.svelte';

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
        timeframe: string;
        link: string | undefined;
        details: string[] | undefined;
        projectIndex: number;
        cardSelected: (index: number) => void;
        selected: boolean;
    } = $props();

</script>

<Card>
    <div class="headingContainer" slot="heading">
        <div class="decorativeRow">
            <DecorativeHeader color="faded" type="h6">~/projects/{title.toLocaleLowerCase()}</DecorativeHeader>
            {#if link}<Button size="icon-only" style="clear" href={link}><InternetIcon slot="icon" /></Button>{/if}
        </div>
        <div class="headingRow">
            <div>{title}</div>
        </div>
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
                    <div class="detail">
                        {detail}
                    </div>
                    {/each}
                </div>
            {/if}
        {/if}
    </div>
    <div class="footer" slot="footer">
        
        <div class="tags">
            {#each skills as tag}
                <div class="tech-tag">
                    <Tag>{tag.label}</Tag>
                </div>
            {/each}
        </div>
    </div>
</Card>

<style lang="scss">
    @use '$lib/scss/breakpoints.scss' as breakpoints;

    .headingContainer {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .decorativeRow {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--color--text-dim);
    }

    .headingRow {
        display: flex;
        align-items: center;
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
        
        @include breakpoints.for-phone-only {
            padding: 0;
        }

        .detail {
            background: var(--color--card-background);
            border: 1px solid var(--color--border);
            border-radius: 10px;
            padding: 12px;

            margin: 0.25em 1em;

            @include breakpoints.for-phone-only {
                margin: 0.25em 0.25em;
            }

        }
    }
</style>
