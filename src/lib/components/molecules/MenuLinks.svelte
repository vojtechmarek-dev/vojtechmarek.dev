<script lang="ts">
    import GitHubIcon from "$lib/icons/GitHubIcon.svelte";
import LinkedInIcon from "$lib/icons/LinkedInIcon.svelte";
    let {onCloseMenu} = $props();
</script>

<a class="icon-link" href="/resume" role="menuitem" onclick={onCloseMenu}>Resume</a>
<a class="icon-link" href="/goodies" role="menuitem" onclick={onCloseMenu}>Goodies</a>
<a class="icon-link" target="_blank" rel="noopener noreferrer" href="https://github.com/vojtechmarek-dev" role="menuitem" onclick={onCloseMenu}><GitHubIcon></GitHubIcon>GitHub</a>
<a class="icon-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vojtechmarek-dev/" role="menuitem" onclick={onCloseMenu}><LinkedInIcon/>LinkedIn</a>

<style lang="scss">
    .icon-link {
            display: flex;
            justify-content: left;
            color: var(--color--text);
            text-decoration: none;
            gap: 3px;
            align-items: center;
        }
</style>