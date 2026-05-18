<script lang="ts">
    import type { TerminalField } from '$lib/data/work-experiences';

    export let command: string = 'cat README.md';
    export let varName: string = 'data';
    export let fields: TerminalField[] = [];
</script>

<div class="terminal" aria-hidden="true">
    <div class="line">
        <span class="prompt">$</span>
        <span class="cmd"> {command}</span>
    </div>

    <div class="spacer"></div>

    <div class="line">
        <span class="keyword">const</span><span class="punct"> </span><span class="identifier">{varName}</span><span class="punct"> = {'{'}</span>
    </div>

    {#each fields as field}
        <div class="line indent">
            <span class="key">{field.key}</span><span class="punct">: </span>{#if field.type === 'string'}<span class="string">"{field.value}"</span>{:else if field.type === 'number'}<span class="number">{field.value}</span>{:else}<span class="identifier">{field.value}</span>{/if}<span class="punct">,</span>
        </div>
    {/each}

    <div class="line"><span class="punct">{'};'}</span></div>

    <div class="spacer"></div>

    <div class="line">
        <span class="prompt">$</span><span class="cursor"> _</span>
    </div>
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

    .indent {
        padding-left: 2ch;
    }

    .spacer {
        height: 0.85em;
    }

    .prompt     { color: var(--t-prompt); margin-right: 5px; }
    .cmd        { color: var(--t-cmd); }
    .keyword    { color: var(--t-keyword); margin-right: 5px; }
    .identifier { color: var(--t-identifier); }
    .string     { color: var(--t-string); }
    .number     { color: var(--t-number); }
    .key        { color: var(--t-key); }
    .punct      { color: var(--t-punct); margin-right: 5px;}

    .cursor {
        color: var(--t-prompt);
        animation: blink 1s step-end infinite;
    }

    @keyframes blink {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0; }
    }
</style>
