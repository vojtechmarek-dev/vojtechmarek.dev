<script>
</script>

<div class="container">
    <section id="hero">
        <h1 class="hello">Useful goodies</h1>
        <p class="intro">
            <span class="left">Here you'll find some of my personal tools, affectionately called 'Goodies'. </span>
            <span class="left">I hope you find them useful!</span>
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
        padding: 40px 0 80px;

        @include for-phone-only {
            padding: 40px 0 120px;

        }

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
                width: min(100%, 620px);
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
