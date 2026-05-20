<script lang="ts">
    import ArrowIcon from '$lib/icons/ArrowIcon.svelte';
    //import SuitcaseIcon from '$lib/icons/SuitcaseIcon.svelte';
    import WrenchIcon from '$lib/icons/WrenchIcon.svelte';
    import Button from '../atoms/Button.svelte';
    import DecorativeHeader from '../atoms/DecorativeHeader.svelte';
</script>

<div class="container">
    <section id="hero">
        <DecorativeHeader type="h5" color="primary">$ ls ~/</DecorativeHeader>
        <h1 class="hello">Hey! I'm <span class="name">Vojtěch</span>.</h1>
        <p class="intro">
            <span class="description">
                Frontend developer, 8 years deep in clinical systems - schedulers, integrations, rule engines. Angular by trade, Java when needed.
                Welcome to my little corner of the web.
            </span>
        </p>
        <div class="hero-buttons">
            <div class="hero-button hero-button--primary">
                <Button style="primary" href="/resume">View Resume <ArrowIcon direction="right" slot="icon-after" /></Button>
            </div>
            <div class="hero-button hero-button--understated">
                <Button style="understated" href="/goodies">
                    <WrenchIcon slot="icon" />
                    Goodies
                </Button>
            </div>
            <!-- 			<Button style="understated" href="/resume">
				<SuitcaseIcon slot="icon" />
				Experience
			</Button> -->
        </div>
    </section>
</div>

<style lang="scss">
    @use '$lib/scss/breakpoints.scss';

    .container {
        padding: 80px 0 200px;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        overflow: hidden;

        @include breakpoints.for-phone-only {
            padding: 40px 0 50px;
        }

        #hero {
            flex: 1 1 60%; // Allow shrinking
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            gap: 15px !important;
            position: relative;
            padding: 20px 0 70px 0;

            @include breakpoints.for-phone-only {
                padding: 20px 0 50px 0;
            }

            .hello {
                text-align: left;
                margin: unset;
                .name {
                    color: var(--color--primary);
                }
            }

            .intro {
                color: var(--color--text-dim);
                display: flex;
                flex-direction: column;
                width: min(100%, 600px);

                .description {
                    margin: 0 0 20px 0;
                }
            }

            .hero-buttons {
                display: flex;
                flex-wrap: wrap;
                align-items: left;
                justify-content: left;
                gap: 10px;
                width: 100%;

                @include breakpoints.for-phone-only {
                    justify-content: center;
                }

                .hero-button {
                    :global(.button) {
                        position: relative;
                        overflow: hidden;
                        transition:
                            transform 0.2s ease-out,
                            box-shadow 0.2s ease-out,
                            background-color 0.2s ease-out,
                            border-color 0.2s ease-out,
                            color 0.2s ease-out;
                    }

                    :global(.button::before) {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: -120%;
                        width: 60%;
                        height: 100%;
                        background: linear-gradient(
                            120deg,
                            transparent 0%,
                            rgba(255, 255, 255, 0.18) 50%,
                            transparent 100%
                        );
                        transform: skewX(-20deg);
                        pointer-events: none;
                    }

                    &:hover :global(.button) {
                        transform: translateY(-2px);
                    }

                    &:hover :global(.button::before) {
                        animation: hero-button-shine 0.7s ease-out;
                    }

                    &:active :global(.button) {
                        transform: translateY(0);
                        transition-duration: 0.05s;
                    }

                    &--primary:hover :global(.icon) {
                        transform: translateX(4px);
                    }

                    &--primary :global(.icon) {
                        transition: transform 0.2s ease-out;
                    }

                    &--understated:hover :global(.button) {
                        border-color: var(--color--primary);
                        color: var(--color--primary);
                    }

                    &--understated :global(.icon) {
                        transition: transform 0.4s ease-out;
                    }

                    &--understated:hover :global(.icon) {
                        transform: rotate(-20deg);
                    }
                }
            }


            @keyframes hero-button-shine {
                from {
                    left: -120%;
                }
                to {
                    left: 160%;
                }
            }

            @media (prefers-reduced-motion: reduce) {
                .hero-buttons .hero-button {
                    animation: none;
                    opacity: 1;
                    transform: none;

                    &:hover :global(.button),
                    &:hover :global(.icon) {
                        transform: none;
                    }

                    &:hover :global(.button::before) {
                        animation: none;
                    }
                }
            }
        }
    }
</style>
