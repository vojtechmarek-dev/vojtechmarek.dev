<script>
    import CurrentWeekGoodie from '$lib/components/molecules/CurrentWeekGoodie.svelte';
    import WorkHoursGoodie from '$lib/components/molecules/WorkHoursGoodie.svelte';
    import DecorativeHeader from '../atoms/DecorativeHeader.svelte';
    import DiscordBotGoodie from '../molecules/DiscordBotGoodie.svelte';
    import ReactionTimeGameGoodie from '../molecules/ReactionTimeGameGoodie.svelte';
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
            <span class="count">2 items</span>
        </header>
        <div class="goodie-block">
            <ReactionTimeGameGoodie />
            <DiscordBotGoodie />
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
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: stretch;

        @include breakpoints.for-phone-only {
            flex-direction: column;
        }
    }
</style>
