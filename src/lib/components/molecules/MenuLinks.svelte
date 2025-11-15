<script lang="ts">
    import GitHubIcon from "$lib/icons/GitHubIcon.svelte";
import LinkedInIcon from "$lib/icons/LinkedInIcon.svelte";
    let {onCloseMenu} = $props();
</script>

<a class="menu-link" href="/resume" role="menuitem" onclick={onCloseMenu}>Resume</a>
<a class="menu-link" href="/goodies" role="menuitem" onclick={onCloseMenu}>Goodies</a>
<a class="menu-link" target="_blank" rel="noopener noreferrer" href="https://github.com/vojtechmarek-dev" role="menuitem" onclick={onCloseMenu}><GitHubIcon></GitHubIcon>GitHub</a>
<a class="menu-link" target="" rel="noopener noreferrer" href="https://www.linkedin.com/in/vojtechmarek-dev/" role="menuitem" onclick={onCloseMenu}><LinkedInIcon/>LinkedIn</a>

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
            transition: background-color 0.15s ease, color 0.15s ease;
            width: 100%;
        }

    .menu-link:hover {
        background: color-mix(in srgb, var(--color--primary-tint) 50%, transparent);
    }
</style>