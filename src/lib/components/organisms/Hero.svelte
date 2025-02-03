<script>
    import SuitcaseIcon from '$lib/icons/SuitcaseIcon.svelte';
    import WrenchIcon from '$lib/icons/WrenchIcon.svelte';
    import Button from '../atoms/Button.svelte';
    import Kernel from '../atoms/Kernel.svelte';
</script>

<div class="container">
    <section id="hero">
        <h1 class="hello">Hey! I'm Vojtěch</h1>
        <p class="intro">
            <span class="left">Welcome to my personal website! I'm a developer actively building this site with Svelte.</span>
            <span class="right">Feel free to explore my <b>Projects</b>, or my <b>Resume</b>.</span> 
        </p>
        <div class="hero-buttons">
            <Button style="understated" href="/goodies">
                <WrenchIcon slot="icon" />
                Goodies
            </Button>
            <div class="disabled">
                <Button>Blog</Button>
            </div>
            <Button style="accent" href="/resume">
                <SuitcaseIcon slot="icon" />
                Experience
            </Button>
        </div>
    </section>
    <div class="kernel">
        <Kernel><div class="disabled"></div></Kernel>
    </div>
</div>

<style lang="scss">
    @use '$lib/scss/breakpoints.scss';

    .container {
        padding: 40px 0 150px;
        position: relative;
        display: flex; /* or inline-flex */
        flex-direction: row;
        justify-content: space-between;

        #hero {
            flex-grow: 2;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            gap: 15px !important;
            position: relative;
            padding: 20px 70px;

            .hello {
                text-align: left;
                margin: unset;
            }

            .intro {
                display: flex;
                flex-direction: column;
                width: min(100%, 460px);
                .left {
                    text-align: start;
                }
                .right {
                    text-align: end;
                }
            }

            .hero-buttons {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                gap: 10px;
                width: 100%;
            }
        }

        .kernel {
            display: flex;
            align-items: end;
            justify-content: left;
            flex-grow: 2;

            @include breakpoints.for-phone-only {
                display: none;
            }
        }
    }
</style>
