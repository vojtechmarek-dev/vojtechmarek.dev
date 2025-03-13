
<script>
    export let activated = false;
</script>

{#if activated}
<div>
    <svg
    width="24px"
    height="24px"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ><path d="M17 17H7A5 5 0 017 7h10a5 5 0 010 10z" fill="currentColor" stroke="currentColor" stroke-width="1.5" /><path
        d="M17 13a1 1 0 100-2 1 1 0 000 2z"
        fill="#000000"
        stroke="var(--color--inverse-text)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
    /></svg
>
</div>
{:else}
<svg
    width="24px"
    height="24px"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ><path
        d="M17 13a1 1 0 100-2 1 1 0 000 2z"
        fill="#000000"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
    /><path d="M17 17H7A5 5 0 017 7h10a5 5 0 010 10z" stroke="currentColor" stroke-width="1.5" /></svg
>

{/if}


