<script lang="ts">
    import Goodie from '../atoms/Goodie.svelte';
    import NavArrowIcon from '$lib/icons/NavArrowIcon.svelte';
    import WatchIcon from '$lib/icons/WatchIcon.svelte';
    import { getFirstDayOfMonth, getLastDateOfMonth, getBusinessAndHolidays, getPreviousMonthDate, getNextMonthDate } from '$lib/utils/dates';
    import Button from '../atoms/Button.svelte';

    export let workDayHours = 8;

    let date = new Date();
    let month = date.toLocaleString('en', { month: 'long' });
    let currentYear = date.getFullYear();
    let year = currentYear;

    let { workDays, businessdayHolidays, weekendHolidays } = { workDays: 0, businessdayHolidays: 0, weekendHolidays: 0 };
    let holidaysOn = true;

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
    <span slot="heading">Work Hours</span>
    <div slot="icon"><WatchIcon /></div>
    <span slot="description">Working days, holidays and tracked hours for the month.</span>

    <span slot="value">{workDays * workDayHours}</span>
    <span slot="caption">hours this month</span>

    <div slot="left" class="stats">
        <span><b>{workDays}</b> work days</span>
        <button
            type="button"
            class="holiday-toggle"
            class:off={!holidaysOn}
            title={holidaysOn
                ? (weekendHolidays ? `weekend holidays (${weekendHolidays}) not incl.` : 'Holidays ON — click to disable')
                : 'Holidays OFF — click to enable'}
            on:click={() => (holidaysOn = !holidaysOn)}
        >
            <b>{businessdayHolidays}{weekendHolidays ? '*' : ''}</b> holidays
        </button>
    </div>

    <div slot="right" class="monthControl">
        <Button on:click={() => (date = getPreviousMonthDate(date))} style="clear" size="icon-only">
            <NavArrowIcon direction="left" />
        </Button>
        <Button style="tint" size="small" on:click={() => (date = new Date())}>
            <span>{month}</span>
            {#if year != currentYear}
                <sup class="currentYear">{year}</sup>
            {/if}
        </Button>
        <Button on:click={() => (date = getNextMonthDate(date))} style="clear" size="icon-only">
            <NavArrowIcon direction="right" />
        </Button>
    </div>
</Goodie>

<style lang="scss">
    @use '$lib/scss/breakpoints.scss';

    .stats {
        display: flex;
        gap: 18px;
        @include breakpoints.for-phone-only {
            flex-direction: column;
            gap: 8px;
        }
        align-items: start;

        b {
            color: var(--color--text);
        }
    }

    .holiday-toggle {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        color: inherit;
        font: inherit;

        &.off {
            opacity: 0.5;
        }
    }

    .monthControl {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .currentYear {
        font-size: xx-small;
    }
</style>
