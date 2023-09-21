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
    import SwitchOffIcon from '$lib/icons/SwitchOffIcon.svelte';
    import SwitchOnIcon from '$lib/icons/SwitchOnIcon.svelte';

    export let workDayHours = 8;

    let date = new Date();
    let month = date.toLocaleString('en', { month: 'long' });
    let { workDays, holidays } = { workDays: 0, holidays: 0 };
    let holidaysOn = true;

    $: {
        month = date.toLocaleString('en', { month: 'long' });
        const firstDay = getFirstDayOfMonth(date);
        const lastDay = getLastDateOfMonth(date);
        let { businessDays, holidays: holidaysSum } = getBussinessAndHolidays(
            firstDay,
            lastDay,
            holidaysOn
        );
        workDays = businessDays;
        holidays = holidaysSum;
    }
</script>

<SharedGoodie>
    <div class="headingContainer" slot="heading">
        <div>Work Hours</div>
        <div class="tooltip">
            <Button
                style="background-color:white"
                size={'icon-only'}
                on:click={() => (holidaysOn = !holidaysOn)}
            >
                {#if holidaysOn}
                    <SwitchOnIcon />
                {:else}
                    <SwitchOffIcon />
                {/if}
            </Button>
            <span class="tooltiptext">{holidaysOn ? 'Holidays ON' : 'Holidays OFF'}</span>
        </div>
    </div>
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
            <NavArrowRight />
        </Button>
    </div>
</SharedGoodie>

<style lang="scss">
    .headingContainer {
        display: flex;
        justify-content: space-between;
    }

    .monthControl {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
    }

    .tooltip {
        position: relative;
        display: inline-block;
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 3;
        bottom: 110%;
        left: 50%;
        margin-left: -60px;
        font-size: small;
    }

    .tooltip .tooltiptext::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: black transparent transparent transparent;
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
    }
</style>
