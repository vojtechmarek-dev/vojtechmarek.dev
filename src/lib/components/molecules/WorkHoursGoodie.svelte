<script lang="ts">
    import SharedGoodie from './SharedGoodie.svelte';
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
        const firstDay = getFirstDayOfMonth(date);
        const lastDay = getLastDateOfMonth(date);
        let { businessDays, holidays: holidaysSum } = getBussinessAndHolidays(firstDay, lastDay);
        workDays = businessDays;
        holidays = holidaysSum;
    }
</script>


<SharedGoodie>
    <div slot="heading">Work Hours</div>
    <div class="description" style="padding-left: 30px; opacity: 75%;">
      <li><b>{workDays}</b> work days</li>
      <li><b>{holidays}</b> holidays</li>
    </div>
    <div slot="value">{workDays * workDayHours}</div>
    <div slot="control" class="monthControl">
        <Button on:click={() => (date = getPreviousMonthDate(date))}>
            <NavArrowLeftIcon />
        </Button>
        <Button on:click={() => (date = new Date())}>{month}</Button>
        <Button on:click={() => (date = getNextMonthDate(date))}>
            <NavArrowRight/>
        </Button>
    </div>
</SharedGoodie>

<style lang="scss">
        .monthControl {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 10px;
        }
</style>
