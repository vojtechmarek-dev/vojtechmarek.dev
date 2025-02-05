<script lang="ts">
    import { onDestroy } from 'svelte';
    import SharedGoodie from './SharedGoodie.svelte';

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
        ); // Random delay between 1-3 seconds
    }

    onDestroy(() => {
        if (timeout) clearTimeout(timeout);
    });

    function handleClick() {
        if (state === 'waiting') {
            state = 'ready';
        } else if (state === 'clicking') {
            const endTime = Date.now();
            const time = endTime - startTime;
            reactionTime = time;
            if (!bestTime || time < bestTime) {
                bestTime = time;
            }
            state = 'waiting';
        } else if (state === 'ready') {
            clearTimeout(timeout);
            // Clicked too early
            state = 'waiting';
            reactionTime = 'Too early!';
        }
    }
</script>

<SharedGoodie>
    <div slot="heading">Reaction Time</div>
    <div slot="description" class="description">Test your reaction time! Can you beat your friends?</div>
    <div class="game-container">
        <div role="button" tabindex="0" on:click={handleClick} on:keydown={(e) => e.key === 'Enter' && handleClick()} class="game-button {state}">
            <div>
                {#if state === 'waiting'}
                    Click to start
                {:else if state === 'ready'}
                    Wait for it...
                {:else}
                    CLICK NOW!
                {/if}
            </div>
        </div>
    </div>
    <div slot="value">
        {#if reactionTime}
            <p class="reaction-time">
                {typeof reactionTime === 'number' ? `Reaction time: ${reactionTime}ms` : reactionTime}
            </p>
        {/if}
    </div>
    <div slot="control" class="game-results">
        {#if bestTime}
            <p class="best-time">
                Best time: {bestTime}ms
            </p>
        {/if}
    </div>
</SharedGoodie>

<style lang="scss">
    .game-container {
        padding: 1rem 1rem 0 1rem;
        max-width: 24rem;
        margin: 0 auto;

        .game-button {
            align-content: center;
            text-align: center;
            width: 100%;
            height: 3rem;
            border-radius: 0.75rem;
            color: white;
            transition: background-color 0.3s;
            cursor: pointer;

            &.waiting {
                background-color: var(--color--primary); // blue
            }

            &.ready {
                background-color: var(--color--primary-tint); // red
                color: var(--color--text);
            }

            &.clicking {
                background-color: var(--color--primary-accent); // green
            }
        }
    }
    .game-results {
        text-align: center;
        padding-top: 0.5rem;

        .best-time {
            font-size: 0.875rem;
            color: var(--color--text);
        }
    }
</style>
