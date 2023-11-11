<script>
    let currentYear = new Date().getFullYear();
</script>

<footer>
    <div class="content">
        <h3>
            © {currentYear} Vojtěch Marek
        </h3>
        <div class="info">
            Powered by <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer"
                >SvelteKit</a
            >. Icons by
            <a href="https://iconoir.com/" target="_blank" rel="noopener noreferrer">Iconoir</a>.
        </div>
    </div>
</footer>

<style lang="scss">
    footer {
        background-color: #E5EEFF;
        width: 100%;
        padding-top: 50px;
        padding-bottom: 50px;

        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
</style>
