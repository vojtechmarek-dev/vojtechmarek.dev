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

  <main>
    <slot />
  </main>
</div>

<style>
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
