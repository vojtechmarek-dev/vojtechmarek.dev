<div class="hill-part">
    <svg class="transition-hill" viewBox="0 0 1599 135" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 135V50.0141C0 50.0141 307.761 -1.70576 506.865 0.043387C599.939 0.861014 671.364 12.8536 743.178 24.9114C812.427 36.5386 882.037 48.2265 971.768 50.0141C1047.87 51.53 1107.93 44.6362 1167.21 37.8327C1232.44 30.3464 1296.72 22.9695 1380.35 27.0276C1466.19 31.1925 1599 50.0141 1599 50.0141V135H0Z"
            fill="var(--color--page-background)"
        />
    </svg>
</div>
<style lang="scss">
    @use '$lib/scss/_breakpoints.scss';
    .hill-part {
        background: linear-gradient(60deg, var(--color--page-hero-background-gradient-from) 0%, var(--color--page-hero-background-gradient-to) 100%);
        position: absolute;
        top: 0px;
        width: 100vw;
        height: min(75vh, 500px);
        @include breakpoints.for-phone-only {
            height: min(75vh, 420px);
        }
    }
    .transition-hill {
        position: absolute;
        margin-bottom: -1px;
        bottom: 0px;
        width: auto;
        z-index: 3;
    }
</style>