<script lang="ts">
    import { getFirstDayOfMonth, getLastDateOfMonth, getBussinessDays } from '$lib/utils/dates';
    import Button from '../atoms/Button.svelte';

    const workDayHours = 8;

    let date = new Date();
    let month = date.toLocaleString('en', { month: 'long' });
    let workDays = 0;
    $: {
        month = date.toLocaleString('en', { month: 'long' });
        let firstDay = getFirstDayOfMonth(date);
        let lastDay = getLastDateOfMonth(date);
        workDays = getBussinessDays(firstDay, lastDay);
    }
</script>

<div class="goodie">
    <h3>
        <!-- todo prop -->
        Work hours
    </h3>
    <div><!-- todo prop -->description</div>
    <div>{workDays} and {workDays * workDayHours}</div>
    <div>
        <!-- todo on click? --><Button
            on:click={() => {
                date.setMonth(1);
                date = date;
            }}>{month}</Button
        >
    </div>
</div>

<style lang="scss">
    .goodie {
        width: 200px;
        height: 260px;
        border: 0.15em solid;
        border-color: black;
        border-radius: 8px;
        padding: 0.5em;
    }
</style>
