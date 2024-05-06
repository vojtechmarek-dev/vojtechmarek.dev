<script>
    import '$lib/scss/global.scss';
    import { description, keywords, title, siteBaseUrl } from '$lib/data/meta';
    import Header from '$lib/components/organisms/Header.svelte';
    import Footer from '$lib/components/organisms/Footer.svelte';
    
    import NavigationArea from '$lib/components/organisms/NavigationArea.svelte';
    import Hills from '$lib/components/organisms/Hills.svelte';
</script>

<svelte:head>
    <link rel="“canonical”" href={siteBaseUrl} />
    <meta name="keywords" content={keywords.join(', ')} />

    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <title>{title}</title>
</svelte:head>

<div>
    <!-- A tab skip for aid needed todo -->
    <!-- Top area -->
    <Header />
    <Hills />
    <div><!-- Skip here a todo --></div>
    <!-- Main area -->
    <div class="main-area">
        <main>
            <slot />
        </main>
    </div>
    <div><!-- spacer --></div>
    <Footer />
</div>

<style lang="scss">
    @import '$lib/scss/_breakpoints.scss';

    .main-area {
        
        padding: 0 100px 100px;
        position: relative;
        z-index: 3;

        @include for-phone-only {
            padding: 0 20px 20px;

		}
    }
</style>
