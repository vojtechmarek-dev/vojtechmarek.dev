<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import type { TerminalField } from '$lib/data/work-experiences';

    export let command: string = 'cat README.md';
    export let varName: string = 'data';
    export let fields: TerminalField[] = [];
    export let animate: boolean = false;
    export let speed: number = 40;    // ms per char while typing command
    export let lineDelay: number = 70; // ms between each code line appearing

    // Display state — start fully revealed when not animating
    let commandText:   string  = animate ? '' : command;
    let showConst:     boolean = !animate;
    let visibleFields: number  = animate ? 0 : fields.length;
    let showClosing:   boolean = !animate;
    let showFooter:    boolean = !animate;
    let cursorVisible: boolean = true;

    let blinkTimer:   number | null = null;
    let typingTimer:  number | null = null;
    let lineTimer:    number | null = null;
    let destroyed = false;

    function startBlink() {
        if (blinkTimer !== null) clearInterval(blinkTimer);
        blinkTimer = window.setInterval(() => { cursorVisible = !cursorVisible; }, 500);
    }

    function typeCommand() {
        let i = 0;
        typingTimer = window.setInterval(() => {
            if (destroyed) return;
            if (i <= command.length) {
                commandText = command.slice(0, i);
                i++;
            } else {
                clearInterval(typingTimer!);
                typingTimer = null;
                // Pause after command, then start revealing code
                window.setTimeout(() => { if (!destroyed) revealCode(); }, 350);
            }
        }, speed);
    }

    function revealCode() {
        showConst = true;
        let line = 0;
        lineTimer = window.setInterval(() => {
            if (destroyed) return;
            if (line < fields.length) {
                visibleFields = line + 1;
                line++;
            } else {
                clearInterval(lineTimer!);
                lineTimer = null;
                showClosing = true;
                window.setTimeout(() => { if (!destroyed) showFooter = true; }, lineDelay * 3);
            }
        }, lineDelay);
    }

    onMount(() => {
        startBlink();
        if (animate) typeCommand();
    });

    onDestroy(() => {
        destroyed = true;
        if (blinkTimer  !== null) clearInterval(blinkTimer);
        if (typingTimer !== null) clearInterval(typingTimer);
        if (lineTimer   !== null) clearInterval(lineTimer);
    });
</script>

<div class="terminal" aria-hidden="true">
    <!-- Command line -->
    <div class="line">
        <span class="prompt">$</span>
        <span class="cmd"> {commandText}</span><!--
        -->{#if animate && commandText.length < command.length}<span class="inline-cursor">{cursorVisible ? '_' : ' '}</span>{/if}
    </div>

    {#if showConst}
        <div class="spacer"></div>

        <div class="line">
            <span class="keyword">const</span><span class="punct"> </span><span class="identifier">{varName}</span><span class="punct"> = {'{'}</span>
        </div>

        {#each fields.slice(0, visibleFields) as field}
            <div class="line indent">
                <span class="key">{field.key}</span><span class="punct">: </span>{#if field.type === 'string'}<span class="string">"{field.value}"</span>{:else if field.type === 'number'}<span class="number">{field.value}</span>{:else}<span class="identifier">{field.value}</span>{/if}<span class="punct">,</span>
            </div>
        {/each}

        {#if showClosing}
            <div class="line"><span class="punct">{'};'}</span></div>
        {/if}
    {/if}

    {#if showFooter}
        <div class="spacer"></div>
        <div class="line">
            <span class="prompt">$</span><span class="cursor"> {cursorVisible ? '_' : ' '}</span>
        </div>
    {/if}
</div>

<style lang="scss">
    .terminal {
        --t-prompt:     #7ab7ff;
        --t-keyword:    #c084fc;
        --t-identifier: #7dd3fc;
        --t-string:     #86efac;
        --t-number:     #fbbf24;
        --t-key:        #a8b0c2;
        --t-punct:      #cdd6f4;
        --t-cmd:        #cdd6f4;

        background: var(--color--code-panel-bg);
        font-family: var(--font--mono);
        font-size: 13px;
        line-height: 1.7;
        padding: 1.5rem 1.75rem;
        height: 100%;
        overflow: auto;
    }

    .line {
        display: flex;
        flex-wrap: nowrap;
        white-space: pre;
    }

    .indent { padding-left: 2ch; }

    .spacer { height: 0.85em; }

    .prompt      { color: var(--t-prompt); margin-right: 5px; }
    .cmd         { color: var(--t-cmd); }
    .keyword     { color: var(--t-keyword); margin-right: 5px; }
    .identifier  { color: var(--t-identifier); }
    .string      { color: var(--t-string); }
    .number      { color: var(--t-number); }
    .key         { color: var(--t-key); }
    .punct       { color: var(--t-punct); margin-right: 5px; }

    /* Inline cursor shown while typing the command */
    .inline-cursor {
        color: var(--t-prompt);
    }

    /* Blinking cursor at the footer prompt */
    .cursor {
        color: var(--t-prompt);
    }

    @media (prefers-reduced-motion: reduce) {
        .inline-cursor,
        .cursor { display: none; }
    }
</style>
