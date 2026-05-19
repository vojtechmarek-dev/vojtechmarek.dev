<script lang="ts">
    import type { Skill } from '$lib/data/work-experiences';
    import InternetIcon from '$lib/icons/InternetIcon.svelte';
    import Button from '../atoms/Button.svelte';
    import Card from '../atoms/Card.svelte';
    import DecorativeHeader from '../atoms/DecorativeHeader.svelte';
    import Tag from '../atoms/Tag.svelte';

    export let title: string;
    export let description: string;
    export let skills: Skill[];
    export let timeframe: string;
    export let link: string | undefined = undefined;
</script>

<Card>
    <div class="headingContainer" slot="heading">
        <div class="decorativeRow">
            <DecorativeHeader color="faded" type="h6" size="meta">~/projects/{title.toLocaleLowerCase()}</DecorativeHeader>
            {#if link}<Button size="icon-only" style="clear" href={link}><InternetIcon slot="icon" /></Button>{/if}
        </div>
        <div class="headingRow">
            <div>{title}</div>
        </div>
    </div>

    <div class="timeframe">{timeframe}</div>
    <div class="description">{description}</div>

    <div class="footer" slot="footer">
        <div class="tags">
            {#each skills as skill}
                <Tag>{skill.label}</Tag>
            {/each}
        </div>
    </div>
</Card>

<style lang="scss">
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
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        padding-top: 5px;
    }

    .description {
        opacity: 75%;
        margin: 20px 0;
    }

    .timeframe {
        font-family: var(--font--mono);
        font-size: var(--text--mono-meta);
        color: var(--color--text-dim);
    }
</style>
