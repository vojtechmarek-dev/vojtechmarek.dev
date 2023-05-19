<script>
    let currentYear = new Date().getFullYear();
</script>

<footer>
    <div class="mountain-part">
        <!-- todo temporary svg - think of better solution (no rect - overlay over main area) -->
        <svg viewBox="0 0 1444 103" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1444" height="102" fill="#F3F2FF" />
            <path
                d="M0 32.5893L357.118 0L408.135 59.9939L555.184 0L871.289 59.9939L1003.83 0L1042.35 32.5893L1064.85 0L1350.45 102.212L1444 32.5893V102.212H1350.45H0V32.5893Z"
                fill="white"
            />
        </svg>
    </div>
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
        padding-bottom: 30px;
        width: 100%;

        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: -30px
        }

        .mountain-part {
            width: 100vw;
            z-index: 3;
        }
    }
</style>
