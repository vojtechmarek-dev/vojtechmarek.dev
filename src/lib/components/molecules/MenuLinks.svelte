<script lang="ts">
    import GitHubIcon from '$lib/icons/GitHubIcon.svelte';
    import LinkedInIcon from '$lib/icons/LinkedInIcon.svelte';
    let { onCloseMenu } = $props();
</script>

<a class="menu-link" href="/" role="menuitem" onclick={onCloseMenu}>~/</a>
<a class="menu-link" href="/resume" role="menuitem" onclick={onCloseMenu}>resume</a>
<a class="menu-link" href="/goodies" role="menuitem" onclick={onCloseMenu}>goodies</a>

<hr class="divider" />

<a class="menu-link" target="_blank" rel="noopener noreferrer" href="https://github.com/vojtechmarek-dev" role="menuitem" onclick={onCloseMenu}
    ><GitHubIcon />GitHub</a
>
<a
    class="menu-link"
    target="_blank"
    rel="noopener noreferrer"
    href="https://www.linkedin.com/in/vojtechmarek-dev/"
    role="menuitem"
    onclick={onCloseMenu}><LinkedInIcon />LinkedIn</a
>

<style lang="scss">
    .menu-link {
        display: flex;
        justify-content: left;
        color: var(--color--text);
        text-decoration: none;
        gap: 0.25rem;
        align-items: center;
        padding: 8px 10px;
        border-radius: 8px;
        transition:
            background-color 0.15s ease,
            color 0.15s ease;
        width: 100%;
    }

    .menu-link:hover {
        background: color-mix(in srgb, var(--color--primary-tint) 50%, transparent);
    }

    .divider {
        width: 100%;
        border: none;
        border-top: 1px solid color-mix(in srgb, var(--color--text) 12%, transparent);
        margin: 4px 0;
    }
</style>
