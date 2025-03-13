<script>
    import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';
    import GitHubIcon from '$lib/icons/GitHubIcon.svelte';
    import LinkedInIcon from '$lib/icons/LinkedInIcon.svelte';
    import NewLogo from '../atoms/NewLogo.svelte';
</script>

<header>
    <nav class="container">
        <div class="left">
            <a class="logo" href="/" aria-label="Site logo">
                <NewLogo />
            </a>
        </div>
        <div>
            <ThemeToggle/>
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
    @use '$lib/scss/breakpoints.scss';

    header {
        padding: 20px 150px;
        z-index: 4;
        position: sticky;
        top: 0px;
        width: 100%;
        height: 80px;
        -webkit-backdrop-filter: saturate(100%) blur(5px);
        backdrop-filter: saturate(100%) blur(5px);
        backface-visibility: hidden;
        perspective: 1000;
        transform: translateZ(0);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;

            .left,
            .right {
                display: flex;
                align-items: center;
            }

            .right a {
                margin-left: 10px;
            }
        }

        @include breakpoints.for-phone-only {
            padding: 10px;
            height: 50px;

            .container {
                .right a {
                    margin-left: 5px;
                }
            }
        }

        @include breakpoints.for-iphone-se {
            padding: 5px;

            .container {
                .right a {
                    margin-left: 2px;
                }
            }
        }
    }
</style>
