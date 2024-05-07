<script>
    import Resume from '$lib/components/organisms/Resume.svelte';
    import { title } from '$lib/data/meta';
</script>

<svelte:head>
	<title>Resume - {title}</title>
	<meta property="og:title" content="Resume - {title}" />
</svelte:head>

<!-- <ResumeGreet /> -->
<div class="resume-container">
    <Resume />
</div>

<style lang="scss">
    .resume-container {
		position: relative;
		padding: 100px 0 40px;
		min-height: 80vh;
		display: flex;
		gap: 10px;
		flex-direction: column;
		align-items: center;
    }
</style>