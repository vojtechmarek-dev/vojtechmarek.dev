<script>
    import DecorativeHeader from "../atoms/DecorativeHeader.svelte";

</script>

<div class="container">
    <section id="goodie">
        <DecorativeHeader type="h5" color="primary">$ ls ~/goodies</DecorativeHeader>
        <h1 class="hello">Useful <span class="name">goodies</span></h1>
        <p class="intro">
            <span class="left">Here you'll find some of my personal tools, affectionately called 'Goodies'. </span>
            <span class="left">I hope you find them useful!</span>
        </p>
    </section>
</div>

<style lang="scss">
    @use '$lib/scss/breakpoints.scss';

    .container {
        position: relative;
        display: flex; /* or inline-flex */
        align-items: start;
        justify-content: start;
        padding: 80px 0 210px;

        @include breakpoints.for-phone-only {
            padding: 40px 0 100px;

        }

        #goodie {
            display: flex;
            flex-direction: column;
            justify-content: left;
            align-items: start;
            position: relative;
            padding: 20px 0;

            .hello {
                text-align: left;
                margin: unset;
                margin-bottom: 20px;
                .name {
                    color: var(--color--primary);
                }
            }

            .intro {
                display: flex;
                flex-direction: column;
                width: min(100%, 620px);
                color: var(--color--text-dim);
                .left {
                    text-align: start;
                }
            }
        }
    }
</style>
