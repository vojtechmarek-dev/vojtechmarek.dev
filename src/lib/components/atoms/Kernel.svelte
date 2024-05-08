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
    <svg class="kernel-svg" width="204" height="223" viewBox="0 0 204 223" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13 126.978C12.9999 26.8965 33.4297 -9.35345 167.264 26.5025C214.793 39.2363 206.872 85.2117 189.361 108.853C170.41 134.437 188.555 177.147 155.173 197.508C96.3857 233.364 13.0002 244.427 13 126.978Z"
            fill="#4433FF"
            stroke="#4433FF"
            stroke-width="2"
        />
        <path
            d="M1 114.978C0.999859 14.8965 21.4297 -21.3535 155.264 14.5025C202.793 27.2363 194.872 73.2117 177.361 96.8529C158.41 122.437 176.555 165.147 143.173 185.508C84.3857 221.364 1.00017 232.427 1 114.978Z"
            fill="white"
            stroke="black"
            stroke-width="2"
        />
    </svg>
    <div class="insert"><slot /></div>
</div>

<style lang="scss">
    .kernel-container {
        position: relative;
        display: inline-block;
    }

    .kernel-svg {
        width: 100%;
        height: auto;
    }

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
