<script>
    import Resume from '$lib/components/organisms/Resume.svelte';
    import ResumeGreet from '$lib/components/organisms/ResumeGreet.svelte';
</script>

<ResumeGreet />
<div class="resume-container">
    <Resume />
</div>

<style lang="scss">
    .resume-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        min-height: 350px;
    }
</style>