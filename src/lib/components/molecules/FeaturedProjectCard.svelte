<script lang="ts">
    import type { FeaturedMeta, Skill } from '$lib/data/work-experiences';
    import InternetIcon from '$lib/icons/InternetIcon.svelte';
    import Button from '../atoms/Button.svelte';
    import Card from '../atoms/Card.svelte';
    import DecorativeHeader from '../atoms/DecorativeHeader.svelte';
    import Tag from '../atoms/Tag.svelte';
    import TerminalBlock from '../atoms/TerminalBlock.svelte';

    export let title: string;
    export let description: string;
    export let skills: Skill[];
    export let timeframe: string;
    export let link: string | undefined = undefined;
    export let featuredMeta: FeaturedMeta;
</script>

<Card flush>
<div class="featured-card">
    <div class="left">
        <div class="decorative-row">
            <div class="decorative-left">
                <span class="featured-badge">FEATURED</span>
                <DecorativeHeader color="faded" type="h6" size="meta">~/projects/{title.toLocaleLowerCase()}</DecorativeHeader>
            </div>
            {#if link}
                <Button size="icon-only" style="clear" href={link}>
                    <InternetIcon slot="icon" />
                </Button>
            {/if}
        </div>

        <h2 class="title">{title}</h2>

        <p class="timeframe">
            {timeframe}{#if featuredMeta.role} · {featuredMeta.role}{/if}
        </p>

        <p class="description">{description}</p>

        <div class="tags">
            {#each skills as skill}
                <Tag>{skill.label}</Tag>
            {/each}
        </div>
    </div>

    <div class="right">
        <TerminalBlock
            command={featuredMeta.command ?? 'cat README.md'}
            varName={featuredMeta.varName ?? 'project'}
            fields={featuredMeta.fields}
            animate
        />
    </div>
</div>
</Card>

<style lang="scss">
    @use '$lib/scss/breakpoints.scss';

    .featured-card {
        display: grid;
        grid-template-columns: 1fr 45%;

        @include breakpoints.for-phone-only {
            grid-template-columns: 1fr;
        }
    }

    .left {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1.5rem;
    }

    .decorative-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--color--text-dim);


    }

    .decorative-left {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        flex-wrap: wrap;
    }

    .featured-badge {
        font-family: var(--font--mono);
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        background: var(--color--primary);
        color: var(--color--text-inverse);
        padding: 3px 8px;
        border-radius: 4px;
    }

    .title {
        font-size: var(--text--h2);
        font-weight: 600;
        line-height: 1.05;
        letter-spacing: -0.02em;
        margin: 0;
    }

    .timeframe {
        font-family: var(--font--mono);
        font-size: var(--text--mono-meta);
        color: var(--color--text-dim);
        margin: 0;
    }

    .description {
        color: var(--color--text-dim);
        max-width: 480px;
        margin-bottom: 20px;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    }

    .right {
        min-height: 200px;
    }
</style>
