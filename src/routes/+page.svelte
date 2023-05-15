<script>
	import { tweened } from 'svelte/motion';

    const progress = tweened(0.5);

</script>



<div class="centered-div">
    <progress value={$progress}></progress>
    {#if $progress == 1}
        <div class="subtitle">
            We are done!
        </div>
    {/if}

    
    
    <button on:click="{() => progress.set(0)}">
        0%
    </button>
    
    <button on:click="{() => progress.set(0.25)}">
        25%
    </button>
    
    <button on:click="{() => progress.set(0.5)}">
        50%
    </button>
    
    <button on:click="{() => progress.set(0.75)}">
        75%
    </button>
    
    <button on:click="{() => progress.set(1)}">
        100%
    </button>
    
    
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>

<style>

    .centered-div {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
    }

  
    .subtitle{
        margin-bottom: 6vh;
    }

    progress {
		display: block;
		width: 100%;
	}
</style>