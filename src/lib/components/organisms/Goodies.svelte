<script>
    import CurrentWeekGoodie from '$lib/components/molecules/CurrentWeekGoodie.svelte';
    import WorkHoursGoodie from '$lib/components/molecules/WorkHoursGoodie.svelte';
    import DecorativeHeader from '../atoms/DecorativeHeader.svelte';
    import DiscordBotGoodie from '../molecules/DiscordBotGoodie.svelte';
    import ReactionTimeGameGoodie from '../molecules/ReactionTimeGameGoodie.svelte';
    import RootineGoodie from '../molecules/RootineGoodie.svelte';
</script>

<div class="goodies inside">
    <section class="goodie-section">
        <DecorativeHeader type="h5" color="primary"># GOODIES</DecorativeHeader>
        <header class="section-head">
            <div class="section-title">
                <h2>Work related</h2>
                <span class="path">~/goodies/work</span>
            </div>
            <span class="count">2 items</span>
        </header>
        <div class="goodie-block">
            <WorkHoursGoodie />
            <CurrentWeekGoodie />
        </div>
    </section>

    <section class="goodie-section">
        <header class="section-head">
            <div class="section-title">
                <h2>For fun</h2>
                <span class="path">~/goodies/fun</span>
            </div>
            <span class="count">3 items</span>
        </header>
        <div class="goodie-block">
            <ReactionTimeGameGoodie />
            <DiscordBotGoodie />
            <RootineGoodie />
        </div>
    </section>
</div>

<style lang="scss">
    @use '$lib/scss/breakpoints.scss';

    .goodie-section {
        gap: 10px;
        display: flex;
        flex-direction: column;
    }

    .goodies {
        position: relative;
    }

    .inside {
        display: flex;
        flex-direction: column;
        gap: 48px;
        padding: 2em 0;
    }

    .section-head {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid var(--color--border);
    }

    .section-title {
        display: flex;
        align-items: baseline;
        gap: 14px;

        h2 {
            font-size: 1.35rem;
            font-weight: 700;
            margin: 0;
        }

        .path {
            font-family: 'Courier New', monospace;
            font-size: 0.85rem;
            color: var(--color--text-faint);
        }
    }

    .count {
        font-family: 'Courier New', monospace;
        font-size: 0.8rem;
        color: var(--color--text-faint);
    }

    .goodie-block {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* Forces exactly 2 equal columns */
        gap: 20px;

        @include breakpoints.for-phone-only {
            grid-template-columns: 1fr; /* Drops down to a single column on mobile */
        }
    }
</style>
