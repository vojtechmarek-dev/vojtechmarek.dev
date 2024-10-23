<script>
    import '$lib/scss/global.scss';
    import { description, keywords, title, siteBaseUrl } from '$lib/data/meta';
    import Header from '$lib/components/organisms/Header.svelte';
    import Footer from '$lib/components/organisms/Footer.svelte';
    import Hills from '$lib/components/organisms/Hills.svelte';
</script>

<svelte:head>
    <link rel="“canonical”" href={siteBaseUrl} />
    <meta name="keywords" content={keywords.join(', ')} />

    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <title>{title}</title>
</svelte:head>

<div class="page-wrapper">
    <!-- Top area -->
    <Header />
    <Hills />

    <!-- Main area -->
    <div class="main-area">
        <main>
            <slot />
        </main>
    </div>

    <!-- Footer -->
    <Footer />
</div>

<style lang="scss">
    @import '$lib/scss/_breakpoints.scss';

    .page-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh; // Ensure wrapper takes full viewport height
    }

    .main-area {
        flex: 1; // Makes sure this grows to fill available space
        padding: 0 100px 100px;
        position: relative;
        z-index: 3;

        @include for-phone-only {
            padding: 0 20px 20px;
        }
    }

    footer {
        margin-top: auto; // Push footer to the bottom
    }
</style>
