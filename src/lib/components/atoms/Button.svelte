<script lang="ts">
    import { HttpRegex } from '$lib/utils/regex';

    export let size: 'icon-only-mini' | 'icon-only' | 'small' | 'medium' | 'large' = 'medium';
    export let style: 'solid' | 'understated' | 'clear' | 'tint' = 'solid';
    export let href: string | undefined = undefined;

    const isExternalLink = !!href && HttpRegex.test(href);
    export let target: '_self' | '_blank' = isExternalLink ? '_blank' : '_self';
    export let rel = isExternalLink ? 'noopener noreferrer' : undefined;

    $: tag = href ? 'a' : 'button';
    $: linkProps = {
        href,
        target,
        rel
    };
</script>

<svelte:element
    this={tag}
    role="button"
    tabindex="0"
    {...linkProps}
    class={['button', `style--${style}`, `size--${size}`].join(' ')}
    data-sveltekit-preload-data
    on:click
    on:focus
    on:mouseenter
    on:mouseleave
    {...$$restProps}
>
    {#if $$slots['icon']}
        <div class="icon">
            <slot name="icon" />
        </div>
    {/if}
    <slot />
</svelte:element>

<style lang="scss">
    .button {
        --main-color: white;
        --light-color: blue;
        --contrast-color: black; /* todo */

        -webkit-appearance: none;
        appearance: none;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.2s ease-in-out;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        border: none;
        border-radius: 20px;
        font-weight: 700;

        .icon {
            width: 24px;
            height: 24px;
        }

        &.style {
            &--solid {
                background-color: #e9e9ed;
                color: var(--contrast-color);

                &:hover {
                    box-shadow: 0px 0px 1px 7px rgba(#d0d0d7, 0.3);
                }
            }

            &--clear {
                background-color: transparent;
            }

            &--tint {
                background-color: var(--color--primary-tint);

                &:hover {
                    box-shadow: 0px 0px 1px 3px color-mix(in srgb, var(--color--primary-tint) 50%, transparent);
                }

                /* todo */
            }

            &--understated {
                background-color: white;
                color: #4433ff;

                &:hover {
                    box-shadow: 0px 0px 1px 7px rgba(#4433ff, 0.3);
                }
            }
        }

        &.size {
            &--icon-only-mini {
                .icon {
                    width: 10px;
                    height: 10px;
                }
            }
            &--icon-only {
                .icon {
                    width: 20px;
                    height: 20px;
                }
            }
            &--small {
                padding: 5px 10px;
                font-size: 0.75rem;

                .icon {
                    width: 20px;
                    height: 20px;
                }
            }
            &--medium {
                padding: 10px 20px;
                font-size: 1rem;
            }
            &--large {
                padding: 15px 30px;
                font-size: 1.15rem;

                .icon {
                    width: 28px;
                    height: 28px;
                }
            }
        }
    }
</style>
