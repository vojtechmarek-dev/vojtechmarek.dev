<script>
	import { tweened } from 'svelte/motion';

    const progress = tweened(0.75);

</script>



<div class="centered">

    <div>
        This is the first version and very much in progress version of my personal website. So far I
        have
        <li>Designed initial website ui in Figma</li>
        <li>Determined color pallete</li>
        <li>Selected icons</li>
        <li>Imported scss dependency</li>
        <li>Figured out how to make an initial website layout only with scss</li>
        <li>Divided and styled layout how it should look like</li>
        <li>Learned how the svelte kit is used with routing and layouts</li>
        <br>
        Next steps
        <li>start thinking about svelte comps for header, nav bar, footer logo etc</li>
        <li>finish layout with header and logo and nav</li>
      </div>
      

      I have also started learning Svelte as I will be using it to build website Svelte learning progress

    <progress value={$progress}></progress>
    {#if $progress == 1}
        <div class="subtitle">
            We are done!
        </div>
    {/if}
    
    
</div>

<style lang="scss">

    .centered {
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 600px;// todo
    }

    progress {
		display: block;
		width: 100%;
	}
</style>