<script>
    let currentYear = new Date().getFullYear();
</script>

<footer>
    <div class="content">
        <div class="left">
            <h3 class="copyright">© {currentYear} Vojtěch Marek</h3>
            <div class="powered">
                Powered by <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer">SvelteKit</a>. Icons by
                <a href="https://iconoir.com/" target="_blank" rel="noopener noreferrer">Iconoir</a>.
            </div>
        </div>

        <div class="contacts">
            <a href="mailto:vojtech.marek@artiisgroup.cz">vojtech.marek@artiisgroup.cz</a>
            <span class="sep">·</span>
            <a href="https://github.com/vojtechmarek-dev" target="_blank" rel="noopener noreferrer">github/vojtechmarek-dev</a>
            <span class="sep">·</span>
            <a href="https://linkedin.com/in/vojtechmarek-dev" target="_blank" rel="noopener noreferrer">linkedin</a>
        </div>
    </div>
</footer>

<style lang="scss">
    @use '$lib/scss/breakpoints.scss';

    footer {
        font-family: var(--font--mono);
        background-color: var(--color--page-background);
        width: 100%;
        padding: 50px 200px;

        @include breakpoints.for-phone-only {
            padding: 50px 24px;
        }

        .content {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            gap: 2rem;
            flex-wrap: wrap;
        }

        .left {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .copyright {
            font-size: 14px;
            font-weight: 500;
            margin: 0;
        }

        .powered {
            font-size: 12px;
            color: var(--color--text-dim);
        }

        .contacts {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 12px;
            color: var(--color--text-dim);
            flex-wrap: wrap;
            @include breakpoints.for-phone-only {
                flex-direction: column;
                align-items: flex-start;
                gap: 0.25rem;
            }
        }

        .sep {
            color: var(--color--text-faint);
            @include breakpoints.for-phone-only {
                display: none;
            }
        }
    }
</style>
