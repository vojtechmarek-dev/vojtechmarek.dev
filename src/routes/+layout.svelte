<script>
    import '$lib/scss/global.scss';

    import { description, keywords, title, siteBaseUrl } from '$lib/data/meta';
    import Header from '$lib/components/organisms/Header.svelte';
    import Hero from '$lib/components/organisms/Hero.svelte';
    import Footer from '$lib/components/organisms/Footer.svelte';
    import Mountains from '$lib/components/organisms/Mountains.svelte';
    import { page } from '$app/stores';

    let includeHero = true;

    $: includeHero = $page.url.pathname !== '/goodies'
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
        <div class="above-header"><!-- above header spacer --></div>
        <div class="header-part">
            <Header />
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

<style>
    .top-area {
        background-color: white;
        min-height: 600px;
        position: relative;
        z-index: 2;
    }

    .above-header {
        min-width: 30px;
        min-height: 30px;
    }

    .header-part {
        position: sticky;
        top: 0px;
        z-index: 2;
        width: 100%;
        max-width: 1100px; /* todo */
        margin-left: auto;
        margin-right: auto;
        padding-left: 32px;
        padding-right: 32px;
    }

    .hero-avatar {
        position: sticky;
        padding-top: 50px;
        top: 0px;
        max-width: 1100px; /* todo make it general and better styled - this is copypasta */
        margin-left: auto;
        margin-right: auto;
    }

    .main-area {
        padding: 0 100px 100px;
        background-color: #f3f2ff;
        position: relative;
        z-index: 3;
    }
</style>
