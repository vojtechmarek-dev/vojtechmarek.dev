<script>
    import WorkHoursGoodie from "$lib/components/molecules/WorkHoursGoodie.svelte";

</script>
<div class="goodies-container">
    <div class="goodies inside">
        <div>
            <h2>Goodies will live here</h2>
        </div>
        <div class="goodie-block">
            <WorkHoursGoodie/>
        </div>
    </div>
</div>

<style lang="scss">
    .goodies-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        min-height: 200px;

        .goodies {
            position: absolute;
            top: -200px;
            bottom: 0px;
            min-width: 600px;
            min-height: 300px;
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
            }
        }
    }
</style>
