<script>
    import Button from '$lib/components/atoms/Button.svelte';
</script>

<main>
    <div class="error-page">
        <div class="container">
            <h1>Oh no!</h1>
            <div class="svg-wrapper">error</div>
            <p>TODO</p>
            <br />
            <Button href="/">Start over</Button>
        </div>
    </div>
</main>

<style lang="scss">
    .error-page {
        background: #e5eeff;
        position: relative;
    }
    .container {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
        justify-content: center;
        min-height: 60vh;
        text-align: center;

        .svg-wrapper {
            width: 300px;
            margin-top: -60px;
            margin-bottom: -30px;

            :global(svg) {
                filter: drop-shadow(2px 6px 0px rgba(0, 0, 0, 0.1));
            }
        }
    }
</style>
