<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fade, scale } from 'svelte/transition';

	export let messages: string[] = [];
	export let speed: number = 35; // ms per char
	export let hold: number = 1200; // ms to hold full text before delete
	export let deleteSpeed: number = 28; // ms per char when deleting
	export let show: boolean = false; // bubble visibility; once shown we keep it

	let text: string = '';
	let cursorVisible: boolean = true;
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
		const message = pickRandomMessage();
		text = '';
		show = true; // keep visible; we won't auto-hide
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
				// After hold, simulate deletion char-by-char
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
							// keep bubble visible with empty line and blinking cursor
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
		left: 100%;
		transform: translateY(-50%);
		padding: 0;
		background: transparent;
		border: none;
		border-radius: 0;
		box-shadow: none;
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
		font-size: 0.85rem;
		color: var(--color--text);
		white-space: nowrap;
		pointer-events: none;
	}
	.tw__cursor {
		margin-left: 1px;
        width: 120%;
	}
	@media (prefers-reduced-motion: reduce) {
		.tw__cursor { display: none; }
	}
</style>

