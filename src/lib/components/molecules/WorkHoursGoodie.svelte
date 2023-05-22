<script lang="ts">
    import NavArrowLeftIcon from '$lib/icons/NavArrowLeftIcon.svelte';
    import NavArrowRight from '$lib/icons/NavArrowRight.svelte';
    import {
        getFirstDayOfMonth,
        getLastDateOfMonth,
        getBussinessAndHolidays,
        getPreviousMonthDate,
        getNextMonthDate
    } from '$lib/utils/dates';
    import Button from '../atoms/Button.svelte';

    export let workDayHours = 8;

    let date = new Date();
    let month = date.toLocaleString('en', { month: 'long' });
    let { workDays, holidays } = { workDays: 0, holidays: 0 };

    $: {
        month = date.toLocaleString('en', { month: 'long' });
        let firstDay = getFirstDayOfMonth(date);
        let lastDay = getLastDateOfMonth(date);
        let { businessDays, holidays: holidaysSum } = getBussinessAndHolidays(firstDay, lastDay);
        workDays = businessDays;
        holidays = holidaysSum;
    }
</script>

<div class="goodie">
    <h3>
        <!-- todo dynamic goodie prop -->
        Work hours
    </h3>
    <div class="description">
        <!-- todo prop -->
        <li><b>{workDays}</b> work days</li>
        <li><b>{holidays}</b> holidays</li>
    </div>
    <div class="workHours">{workDays * workDayHours}</div>
    <div class="monthControl">
        <Button on:click={() => (date = getPreviousMonthDate(date))}>
            <NavArrowLeftIcon />
        </Button>
        <Button on:click={() => (date = new Date())}>{month}</Button>
        <Button on:click={() => (date = getNextMonthDate(date))}>
            <NavArrowRight />
        </Button>
    </div>
</div>

<style lang="scss">
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
            opacity: 50%;
        }

        .monthControl {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 10px;
        }
    }
</style>
