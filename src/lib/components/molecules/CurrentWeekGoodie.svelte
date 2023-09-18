<script lang="ts">
    let date = new Date()
    export let weekNumber = date.getWeekNumber();
    export let suffix = getWeekNumberSuffix(weekNumber);

    function getWeekNumberSuffix(weekNumber: number) {
        if (weekNumber === 1) {
            return "st";
        } else if (weekNumber === 2) {
            return "nd";
        } else if (weekNumber === 3) {
            return "rd";
        } else {
            return "th";
        }
}
</script>

<div class="goodie">
    <h3>
        <!-- todo dynamic goodie prop -->
        Current week
    </h3>
    <div class="description">
        <li><b>{weekNumber}{suffix}</b> week</li>
    </div>
    <div class="workHours">{(weekNumber % 2 == 0) ? 'Even' : 'Odd'}</div>
</div>

<style lang="scss">
    // todo this is copypasta learn how to use global styles or pass styles via style props
    .goodie {
        width: 280px;
        height: 225px;
        border: 0.15em solid;
        border-color: black;
        border-radius: 8px;
        padding: 0.5em;
        .workHours {
            align-items: center;
            text-align: center;
            font-size: larger;
            font-weight: bold;
            color: #9747ff;
            border-bottom: lightgrey 2px solid;
            margin-left: 20px;
            margin-right: 20px;
            padding: 10px;
        }

        .description {
            padding-left: 20px;
            padding-top: 10px;
            opacity: 50%;
        }

    }
</style>
