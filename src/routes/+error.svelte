<script>
    import Button from '$lib/components/atoms/Button.svelte';
</script>

<main>
        <div class="container">
            <h1>Oh no! 404</h1>
            <p>Seems you got lost. Care to start over?</p>
            <div class="start-over">            
                <Button style="primary" href="/">Start over</Button>
            </div>
        </div>
</main>

<style lang="scss">

    .container {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
        justify-content: center;
        min-height: 60vh;
        text-align: center;

        .start-over {
            margin-top: 20px;
        }

    }
</style>
