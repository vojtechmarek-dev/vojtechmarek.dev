<script>
    import Kernel from '../atoms/Kernel.svelte';
</script>

<div class="container">
    <section id="hero">
        <h1 class="hello">Hi, I'm Vojtěch!</h1>
        <p class="intro">
            <span class="left">I am trying new things with Svelte,</span>
            <span class="right">and still learning.</span>
        </p>
    </section>
    <div class="kernel">
        <Kernel><div class="disabled">todo<svg
            width="24"
            height="24"
            stroke-width="1"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
            ><path
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            /><path
                d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 100-6 3 3 0 000 6z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            /></svg></div></Kernel>
    </div>
</div>

<style lang="scss">
    .container {
        position: relative;
        display: flex; /* or inline-flex */
        flex-direction: row;
        justify-content:space-between;

        #hero {
            flex-grow: 2;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: left;
            gap: 15px;
            position: relative;
            padding: 80px 70px;

            .hello {
                text-align: left;
            }

            .intro {
                display: flex;
                flex-direction: column;
                .right {
                    align-items: end;
                    display: flex;
                    flex-direction: row-reverse;
                }
            }
        }

        .kernel {
            flex-grow: 1;
        }
    }
</style>
