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
        padding: 20px 150px;
        z-index: 2;
        position: sticky;
        top: 0px;
        width: 100%;
        height: 80px;
        -webkit-backdrop-filter: saturate(180%) blur(5px);
        backdrop-filter: saturate(180%) blur(5px);
        backface-visibility: hidden;
        perspective: 1000;
        transform: translateZ(0);
        display: flex;
        justify-content: space-between; /* Ensure elements are spaced evenly */
        align-items: center; /* Center vertically */

        .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%; /* Ensure full width */

            .left,
            .middle,
            .right {
                display: flex;
                align-items: center;
            }

            .right a {
                margin-left: 10px; /* Adjust the margin as needed */
            }
        }
    }
</style>
