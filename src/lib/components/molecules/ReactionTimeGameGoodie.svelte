<script lang="ts">
    import { onDestroy } from 'svelte';
    import Goodie from '../atoms/Goodie.svelte';
    import Button from '../atoms/Button.svelte';
    import PlayIcon from '$lib/icons/PlayIcon.svelte';
    import ArrowIcon from '$lib/icons/ArrowIcon.svelte';

    type GameState = 'waiting' | 'ready' | 'clicking';

    let state: GameState = 'waiting';
    let startTime = 0;
    let reactionTime: number | string | null = null;
    let bestTime: number | null = null;
    let timeout: number;

    $: if (state === 'ready') {
        timeout = setTimeout(
            () => {
                state = 'clicking';
                startTime = Date.now();
            },
            Math.random() * 2000 + 1000
        );
    }

    onDestroy(() => {
        if (timeout) clearTimeout(timeout);
    });

    function handleClick() {
        if (state === 'waiting') {
            state = 'ready';
            reactionTime = null;
        } else if (state === 'clicking') {
            const time = Date.now() - startTime;
            reactionTime = time;
            if (!bestTime || time < bestTime) bestTime = time;
            state = 'waiting';
        } else if (state === 'ready') {
            clearTimeout(timeout);
            state = 'waiting';
            reactionTime = 'Too early!';
        }
    }

    $: label = state === 'waiting' ? 'Click to start' : state === 'ready' ? 'Wait for it...' : 'CLICK NOW!';
</script>

<Goodie>
    <span slot="heading">Reaction Time</span>
    <div slot="icon"><PlayIcon /></div>
    <span slot="description">Test your reaction time. Can you beat your friends?</span>

    <span slot="command">$ ./reaction-time --start</span>

    <div slot="left">
        <Button style="primary" size="medium" on:click={handleClick}>
            <span>{label}</span>
            <span slot="icon-after"><ArrowIcon direction="right" small /></span>
        </Button>
    </div>

    <div slot="right" class="results">
        {#if reactionTime !== null}
            <span class="last">{typeof reactionTime === 'number' ? `${reactionTime}ms` : reactionTime}</span>
        {/if}
        {#if bestTime}
            <span class="best">best {bestTime}ms</span>
        {/if}
    </div>
</Goodie>

<style lang="scss">
    .results {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 2px;
        font-size: 0.8rem;

        .last {
            color: var(--color--primary-accent);
            font-weight: 700;
        }

        .best {
            color: var(--color--text-faint);
        }
    }
</style>
