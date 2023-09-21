<script>
    import '$lib/scss/global.scss';

    import { description, keywords, title, siteBaseUrl } from '$lib/data/meta';
    import Header from '$lib/components/organisms/Header.svelte';
    import Hero from '$lib/components/organisms/Hero.svelte';
    import Footer from '$lib/components/organisms/Footer.svelte';
    import Mountains from '$lib/components/organisms/Mountains.svelte';
    import { page } from '$app/stores';

    let includeHero = false;

    $: includeHero = $page.url.pathname === '/';
</script>

<svelte:head>
    <link rel="“canonical”" href={siteBaseUrl} />
    <meta name="keywords" content={keywords.join(', ')} />

    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <title>{title}</title>
</svelte:head>

<div>
    <!-- A skip todo -->

    <!-- Top area -->

    <div class="top-area">
        <div class="header">
            <div class="content">
                <Header />
            </div>
        </div>
        <Mountains />
        {#if includeHero}
            <div class="hero-avatar"><Hero /></div>
        {/if}
    </div>
    <div><!-- Skip here a todo --></div>
    <!-- Main area -->
    <div class="main-area">
        <main>
            <slot class="container" />
        </main>
    </div>
    <div><!-- spacer --></div>
    <Footer />
</div>

<style lang="scss">
    .top-area {
        background-color: white;
        min-height: 600px;
        position: relative;
        z-index: 2;
    }

    .header {
        position: sticky;
        top: 0px;
        z-index: 2;
        width: 100%;
        height: 64px;
        -webkit-backdrop-filter: saturate(180%) blur(5px);
        backdrop-filter: saturate(180%) blur(5px);
        backface-visibility: hidden;
        perspective: 1000;
        transform: translateZ(0);
        display: flex;
        justify-content: center; /* Center horizontally */
        align-items: center; /* Center vertically */
        z-index: 3;
        .content {
            width: 100%;
        }

        
    }

    .hero-avatar {
        padding-top: 50px;
        top: 0px;
        max-width: 1100px; /* todo make it general and better styled - this is copypasta */
        margin-left: auto;
        margin-right: auto;
    }

    .turn-top {
        width: auto;
    }

    .main-area {
        padding: 0 100px 100px;
        background-color: #E5EEFF;
        position: relative;
        z-index: 3;
    }
</style>
