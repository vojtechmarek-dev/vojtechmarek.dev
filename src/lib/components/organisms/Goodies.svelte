<script>
    import CurrentWeekGoodie from '$lib/components/molecules/CurrentWeekGoodie.svelte';
    import WorkHoursGoodie from '$lib/components/molecules/WorkHoursGoodie.svelte';
    import DiscordBotGoodie from '../molecules/DiscordBotGoodie.svelte';
    import ReactionTimeGameGoodie from '../molecules/ReactionTimeGameGoodie.svelte';
    import SectionTitle from '../molecules/resume/SectionTitle.svelte';
</script>

<div class="goodies inside">
    <div>
        <SectionTitle>Work related</SectionTitle>
    </div>
    <div class="goodie-block">
        <WorkHoursGoodie />
        <CurrentWeekGoodie />
    </div>
    <div>
        <SectionTitle>For fun</SectionTitle>
        <div class="goodie-block">
            <ReactionTimeGameGoodie />
            <DiscordBotGoodie />
        </div>
    </div>
</div>

<style lang="scss">
    @use '$lib/scss/breakpoints.scss';

    .goodies {
        position: relative;
        background-color: var(--color--page-background);
        border: 0.15em solid;
        border-color: var(--color--text);
        border-radius: 8px;
    }

    .inside {
        padding: 2em 2em;
        display: flex;
        flex-direction: column;

        .goodie-block {
            padding: 2em 0 2em 0;
            display: flex;
            flex-direction: row;
            gap: 1em;

            @include breakpoints.for-phone-only {
                flex-direction: column; // Change to single column layout
            }
        }
    }
</style>
