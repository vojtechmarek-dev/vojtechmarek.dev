<script lang="ts">
    let running = true;
    let animateClass = true;
    let intervalId: number|undefined;

    function animate(running: boolean) {
        if (running) {
            if (!intervalId) {
                animateClass = true;
                intervalId = setInterval(() => (animateClass = !animateClass), 3000);
            }
        } else {
            clearInterval(intervalId);
            intervalId = undefined;
            animateClass = false;
        }
    }

    $: animate(running); // call the function every time running is updated
</script>

<div
    role="marquee"
    on:mouseenter={() => (running = false)}
    on:mouseleave={() => (running = true)}
    class="kernel-container kernel pos-y-wiggle"
    class:animate={animateClass}
>

    		<picture>
			<source srcset="/images/resume-photo_2.webp" type="image/webp" height="250px">
			<img src="/images/resume-photo_2.png" alt="description" height="250px">
		</picture>
    <div class="insert"><slot /></div>
</div>

<style lang="scss">
    .kernel-container {
        position: relative;
        display: inline-block;
    }

/*     .kernel-svg {
        width: 100%;
        height: auto;
    } */

    .insert {
        position: absolute;
        top: 0;
        right: 20px;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .kernel.pos-y-wiggle {
        transition: all 3s ease-in-out;
    }

    .kernel.animate {
        animation-direction: alternate;
        transition: all 3s ease-in-out;
        transform: translateY(10%);
    }


</style>
