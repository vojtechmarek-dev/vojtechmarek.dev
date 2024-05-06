<script>
</script>

<div class="container">
    <section id="hero">
        <h1 class="hello">Useful goodies</h1>
        <p class="intro">
            <span class="left">Some of my personal useful things are shown here</span>
            <span class="right">enjoy if you can make use of them</span>
        </p>
    </section>
</div>

<style lang="scss">
    @import '$lib/scss/breakpoints.scss';

    .container {
        position: relative;
        display: flex; /* or inline-flex */
        align-items: center;
        justify-content: center;
        padding: 40px 0 150px;

        #hero {
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
                width: min(100%, 420px);
                .left {
                    text-align: start;
                }
                .right {
                    text-align: end;
                }
            }
        }
    }
</style>
