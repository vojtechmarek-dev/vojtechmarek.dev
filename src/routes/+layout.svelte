<script>
    import '$lib/scss/global.scss';

    import { description, keywords, title, siteBaseUrl } from '$lib/data/meta';
    import Header from '$lib/components/organisms/Header.svelte';
    import Hero from '$lib/components/organisms/Hero.svelte';
    import Footer from '$lib/components/organisms/Footer.svelte';
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
            <Header/>
        </div>
        <!-- SVG div -->
        <div class="mountain-part">
            <svg
                class="transition-mountain"
                viewBox="0 0 1499 169"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M363.507 25.4998L6.50684 78.4998V155H1489.51V94.9991L1065.01 25.4998L884.507 78.4998L770.007 25.4998L453.007 78.4998L363.507 25.4998Z"
                    fill="#4433FF"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M131.279 3.45963L336.506 81.1218L481.492 13.4552L523.674 31.1335L549.815 22.9077L641.086 68.1218L698.176 33.7147L787.378 54.7889L816.003 97.1218L877.524 50.3199L1012.73 9.23951L1165.33 97.1218L1261.83 -0.000690558L1498.44 40.6196L1498.44 168.5L727.5 168.5H0.426374L0.426417 64.815L53.8948 84.6221L131.279 3.45963Z"
                    fill="#F3F2FF"
                />
            </svg>
        </div>
        <div class="hero-avatar"><Hero/></div>
    </div>
    <div><!-- Skip here a todo --></div>
    <!-- Main area -->
    <div class="main-area">
        <main>
            <slot class="container"/>
        </main>
    </div>
    <div><!-- spacer --></div>
    <Footer/>
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
        padding-top:50px;
        top:0px;
        max-width: 1100px; /* todo make it general and better styled - this is copypasta */
        margin-left: auto;
        margin-right: auto;
    }

    .mountain-part {
        overflow: hidden;
        display: block;
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: 0px;
        width: 100vw;
        height: 170px;
        z-index: 3;
    }

    .transition-mountain {
        position: absolute;
        margin-bottom: -1px;
        left: -3%;
        right: -3%;
        bottom: 0px;
        width: 106%;
        min-width: 600px;
        max-width: unset;
    }

    .main-area {
        padding:  0 100px 100px;
        background-color: #f3f2ff;
        position: relative;
        z-index: 3;
    }
</style>
