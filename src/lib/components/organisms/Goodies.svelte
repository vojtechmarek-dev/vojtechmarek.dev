<script>
    import CurrentWeekGoodie from '$lib/components/molecules/CurrentWeekGoodie.svelte';
    import WorkHoursGoodie from '$lib/components/molecules/WorkHoursGoodie.svelte';
    import Goodies from '$lib/components/organisms/Goodies.svelte';
</script>
    <div class="goodies inside">
        <div>
            <h2>Work related</h2>
        </div>
        <div class="goodie-block">
            <WorkHoursGoodie />
            <CurrentWeekGoodie />
        </div>
    </div>

<style lang="scss">
        .goodies {
            position: absolute;
            bottom: 0px;
            min-width: 700px;
            min-height: 400px;
            background-color: white;
            border: 0.15em solid;
            border-color: black;
            border-radius: 8px;
        }

        .inside {
            padding: 1em 1em;
            display: flex;
            flex-direction: column;

            .goodie-block {
                padding-top: 2em;
                display: flex;
                flex-direction: row;
                gap: 1em;
            }
        }
</style>
