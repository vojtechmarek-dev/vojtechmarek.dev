<script>
    import Logo from '$lib/components/atoms/Logo.svelte';
    import ThemeToggle from '$lib/components/atoms/ThemeToggle.svelte';
    import GitHubIcon from '$lib/icons/GitHubIcon.svelte';
    import LinkedInIcon from '$lib/icons/LinkedInIcon.svelte';
</script>

<header>
    <nav class="container">
        <div class="left">
            <a class="logo" href="/" aria-label="Site logo">
                <Logo />
            </a>
        </div>
        <div class="middle">
            <ThemeToggle />
        </div>
        <div class="right">
            <a href="/resume">Resume</a>
            <a target="_blank" rel="noopener noreferrer" title="My Personal Github" href="https://github.com/vojtechmarek-dev">
                <GitHubIcon />
            </a>
            <a target="_blank" rel="noopener noreferrer" title="My LinkedIn" href="https://www.linkedin.com/in/vojtechmarek-dev/">
                <LinkedInIcon />
            </a>
        </div>
    </nav>
</header>

<style lang="scss">
    header {
        padding: 0 150px;
    }
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .left {
        flex-grow: 0;
    }

    .middle {
        flex-grow: 1;
        display: flex;
        justify-content: center;
    }

    .right {
        flex-grow: 0;
        display: flex;
        align-items: center;
    }

    .right a {
        margin-left: 10px; /* Adjust the margin as needed */
    }
</style>
