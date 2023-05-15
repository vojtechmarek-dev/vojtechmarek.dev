<script>
  import { description, keywords, title, siteBaseUrl } from '$lib/data/meta';
  import '$lib/scss/global.scss';
</script>

<svelte:head>
  <link rel="“canonical”" href={siteBaseUrl} />
  <meta name="keywords" content={keywords.join(', ')} />

  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <title>{title}</title>
</svelte:head>

<div class="container">
  <div class="header">
    <h1>Header</h1>
    <p class="description">Page description goes here</p>
    <h1>Hi, I'm Vojtěch</h1>

    <div class="subtitle">
      This is the first version and very much in progress version of my personal website. So far I
      have
      <li>Designed initial website ui in Figma</li>
      <li>Determined color pallete</li>
      <li>Selected icons</li>
    </div>
    I have also started learning Svelte as I will be using it to build website Svelte learning progress
  </div>

  <svg class="transition-layer" viewBox="0 0 1499 169" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M363.507 25.4998L6.50684 78.4998V155H1489.51V94.9991L1065.01 25.4998L884.507 78.4998L770.007 25.4998L453.007 78.4998L363.507 25.4998Z" fill="#4433FF"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M131.279 3.45963L336.506 81.1218L481.492 13.4552L523.674 31.1335L549.815 22.9077L641.086 68.1218L698.176 33.7147L787.378 54.7889L816.003 97.1218L877.524 50.3199L1012.73 9.23951L1165.33 97.1218L1261.83 -0.000690558L1498.44 40.6196L1498.44 168.5L727.5 168.5H0.426374L0.426417 64.815L53.8948 84.6221L131.279 3.45963Z" fill="#F3F2FF"/>
  </svg>    
  <main>
    <slot />
  </main>
</div>

<style>
    .transition-layer {
       
    margin-top: -2vh !important; /* TODO not working Blend with element underneath */
    width: 100vw;
    height: 169;
    z-index: 9999;
  }
    
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .header {
    background-color: white;
    padding: 20px;
  }

  .description {
    margin-bottom: 20px;
  }

  main {
    flex-grow: 1;
    background-color: #F3F2FF;
  }
</style>
