<script lang="ts">
    import { onDestroy } from 'svelte';
    import { scale } from 'svelte/transition';

    interface TypewriterConfig {
        messages?: string[];
        speed?: number;
        hold?: number;
        deleteSpeed?: number;
        show?: boolean;
    }

    let {
        messages = [],
        speed = 35,
        hold = 1200,
        deleteSpeed = 28,
        show = $bindable(false)
    }: TypewriterConfig = $props();

    let text = $state('');
    let cursorVisible = $state(true);
    let typingTimer: number | null = null;
    let deletingTimer: number | null = null;
    let blinkTimer: number | null = null;

    function pickRandomMessage(): string {
        if (messages.length > 0) {
            const idx = Math.floor(Math.random() * messages.length);
            return messages[idx];
        } else {
            return '';
        }
    }

    function startBlink() {
        if (blinkTimer !== null) {
            clearInterval(blinkTimer);
        }
        blinkTimer = window.setInterval(() => {
            cursorVisible = !cursorVisible;
        }, 500);
    }

    function stopTimers() {
        if (typingTimer !== null) {
            clearInterval(typingTimer);
            typingTimer = null;
        }
        if (deletingTimer !== null) {
            clearInterval(deletingTimer);
            deletingTimer = null;
        }
    }

    export function start() {
        if (typingTimer !== null || deletingTimer !== null || text.length > 0) {
            return;
        }
        const message = pickRandomMessage();
        text = '';
        show = true;
        startBlink();
        stopTimers();

        let i = 0;
        typingTimer = window.setInterval(() => {
            if (i < message.length) {
                text = text + message.charAt(i);
                i = i + 1;
            } else {
                if (typingTimer !== null) {
                    clearInterval(typingTimer);
                    typingTimer = null;
                }
                window.setTimeout(() => {
                    let remaining = text.length;
                    deletingTimer = window.setInterval(() => {
                        if (remaining > 0) {
                            text = text.slice(0, -1);
                            remaining = remaining - 1;
                        } else {
                            if (deletingTimer !== null) {
                                clearInterval(deletingTimer);
                                deletingTimer = null;
                            }
                        }
                    }, deleteSpeed);
                }, hold);
            }
        }, speed);
    }

    onDestroy(() => {
        stopTimers();
        if (blinkTimer !== null) {
            clearInterval(blinkTimer);
        }
    });
</script>

{#if show}
    <div class="tw" aria-hidden="true" in:scale={{ start: 0.96, duration: 130 }}>
        <span class="tw__text">{text}</span><span class="tw__cursor">{cursorVisible ? '_' : ' '}</span>
    </div>
{/if}

<style>
    .tw {
        position: absolute;
        top: 50%;
        left: calc(100% + 0.5rem);
        transform: translateY(-45%);
        padding: 0;
        background: transparent;
        border: none;
        border-radius: 0;
        box-shadow: none;
        font-family: var(--font--mono);
        font-size: 0.85rem;
        color: var(--color--text-dim);
        white-space: nowrap;
        pointer-events: none;
    }
    .tw__cursor {
        margin-left: 1px;
        width: 120%;
    }
    @media (prefers-reduced-motion: reduce) {
        .tw__cursor {
            display: none;
        }
    }
</style>
