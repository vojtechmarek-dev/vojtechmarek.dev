<script lang="ts">
    import Goodie from '../atoms/Goodie.svelte';
    import NavArrowIcon from '$lib/icons/NavArrowIcon.svelte';
    import { getFirstDayOfMonth, getLastDateOfMonth, getBusinessAndHolidays, getPreviousMonthDate, getNextMonthDate } from '$lib/utils/dates';
    import Button from '../atoms/Button.svelte';
    import SwitchOffIcon from '$lib/icons/SwitchOffIcon.svelte';
    import SwitchOnIcon from '$lib/icons/SwitchOnIcon.svelte';

    export let workDayHours = 8;

    let date = new Date();
    let month = date.toLocaleString('en', { month: 'long' });
    let currentYear = date.getFullYear();
    let year = currentYear;
    
    let { workDays, businessdayHolidays, weekendHolidays } = { workDays: 0, businessdayHolidays: 0, weekendHolidays: 0 };
    let holidaysOn = true;
    let previewCurrentMonth = false;


    $: {
        month = date.toLocaleString('en', { month: 'long' });
        year = date.getFullYear();
        const firstDay = getFirstDayOfMonth(date);
        const lastDay = getLastDateOfMonth(date);
        let { businessDays, holidays: holidayDistribution } = getBusinessAndHolidays(firstDay, lastDay, holidaysOn);
        workDays = businessDays;
        businessdayHolidays = holidayDistribution.businessdayHolidays;
        weekendHolidays = holidayDistribution.weekendHolidays;
    }
</script>

<Goodie>
    <div class="headingContainer" slot="heading">
        <div>Work Hours</div>
        <div class="tooltip">
            <Button style="clear" size={'icon-only'} on:click={() => (holidaysOn = !holidaysOn)}>
                {#if holidaysOn}
                    <div>
                        <SwitchOnIcon activated={true}/>
                    </div>
                {:else}
                    <SwitchOffIcon />
                {/if}
            </Button>
            <span class="tooltiptext">{holidaysOn ? 'Holidays ON' : 'Holidays OFF'}</span>
        </div>
    </div>
    <div slot="description" class="description">
        <li><b>{workDays}</b> work days</li>
        <div class="holidayContainer">
            {#if !weekendHolidays}
                <li><b>{businessdayHolidays}</b> holidays</li>
            {:else}
                <div class="tooltip">
                    <li><b>{businessdayHolidays}*</b> holidays</li>
                    <span class="tooltiptext">{'weekend holidays ( ' + weekendHolidays + ' ) not incl.'}</span>
                </div>
            {/if}
        </div>
    </div>
    <div slot="value">{workDays * workDayHours}</div>
    <div slot="control" class="monthControl">
        <Button on:click={() => (date = getPreviousMonthDate(date))} style="clear" size="icon-only">
            <NavArrowIcon direction="left" />
        </Button>
        <Button style="{previewCurrentMonth ? 'tint' : 'solid'}"
            on:mouseenter={() => {previewCurrentMonth = month != new Date().toLocaleString('en', { month: 'long' })}} 
            on:mouseleave={() => {previewCurrentMonth = false}} 
            on:click={() => {date = new Date();previewCurrentMonth = false;}}>
            <div>{previewCurrentMonth ? "Go Back" : month}</div>
            {#if year != currentYear && !previewCurrentMonth}
                <sup class="currentYear">{year}</sup>
            {/if}
        </Button>
        <Button on:click={() => (date = getNextMonthDate(date))} style="clear" size="icon-only">
            <NavArrowIcon direction="right" />
        </Button>
    </div>
</Goodie>

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

    .currentYear {
        font-size: xx-small;
    }

    .tooltip {
        position: relative;
        display: inline-block;
    }

    .holidayContainer {
        display: flex;
        align-items: center;
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
