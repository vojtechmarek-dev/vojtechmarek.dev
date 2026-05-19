<script lang="ts">
    import { HttpRegex } from '$lib/utils/regex';

    export let size: 'icon-only-mini' | 'icon-only' | 'small' | 'medium' | 'large' = 'medium';
    export let style: 'solid' | 'understated' | 'clear' | 'tint' | 'accent' | 'primary' = 'solid';
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
    {#if $$slots['icon-after']}
        <div class="icon">
            <slot name="icon-after" />
        </div>
    {/if}
</svelte:element>

<style lang="scss">
    .button {
        --main-color: var(--color--primary-tint);
        //--light-color: blue;
        --contrast-color: var(--color--text); /* todo */

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
        border-radius: 999px;
        font-weight: 600;

        .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;

            :global(svg) {
                display: block;
                width: 100%;
                height: 100%;
            }
        }

        &.style {
            &--solid {
                background-color: var(--main-color);
                color: var(--contrast-color);

            }

            &--clear {
                background-color: transparent;
                color: inherit;
            }

            &--tint {
                background-color: var(--color--primary-tint);
                color: var(--contrast-color);
            }

            &--accent {
                background-color: var(--color--primary-accent-tint);
                color: var(--color--primary-accent);
            }

            &--primary {
                background-color: var(--color--primary);
                color: var(--color--text-inverse);
            }


            &--understated {
                background: transparent;
                color: var(--color--text);
                border: 1px solid var(--color--border);
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
