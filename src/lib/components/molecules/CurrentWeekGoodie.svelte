<script lang="ts">
    import SharedGoodie from './SharedGoodie.svelte';

    let date = new Date();
    export let weekNumber = date.getWeekNumber();
    export let suffix = getWeekNumberSuffix(weekNumber);

    function getWeekNumberSuffix(weekNumber: number) {
        if (weekNumber === 1) {
            return 'st';
        } else if (weekNumber === 2) {
            return 'nd';
        } else if (weekNumber === 3) {
            return 'rd';
        } else {
            return 'th';
        }
    }
</script>

<SharedGoodie>
    <div slot="heading">Current Week</div>
    <div class="description" style="padding-left: 30px; opacity: 75%;">
        <li><b>{weekNumber}{suffix}</b> week</li>
    </div>
    <div slot="value">{weekNumber % 2 == 0 ? 'Even' : 'Odd'}</div>
</SharedGoodie>

<style lang="scss">
</style>
