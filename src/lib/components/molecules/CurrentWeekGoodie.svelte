<script lang="ts">
    import Goodie from '../atoms/Goodie.svelte';
    import NavArrowIcon from '$lib/icons/NavArrowIcon.svelte';
    import CalendarIcon from '$lib/icons/CalendarIcon.svelte';
    import Button from '../atoms/Button.svelte';

    let date = new Date();

    $: weekNumber = date.getWeekNumber();
    $: suffix = getWeekNumberSuffix(weekNumber);
    $: daysRemain = daysRemainingInYear(date);

    function getWeekNumberSuffix(week: number) {
        if (week === 1) return 'st';
        if (week === 2) return 'nd';
        if (week === 3) return 'rd';
        return 'th';
    }

    function daysRemainingInYear(d: Date) {
        const yearEnd = new Date(d.getFullYear(), 11, 31);
        return Math.max(0, Math.round((yearEnd.getTime() - d.getTime()) / 86400000));
    }
</script>

<Goodie>
    <span slot="heading">Current Week</span>
    <div slot="icon"><CalendarIcon /></div>
    <span slot="description">Where we are in the year, and whether it is even or odd (for the on-call rotation).</span>

    <span slot="value">{weekNumber % 2 == 0 ? 'Even' : 'Odd'}</span>
    <span slot="caption">{weekNumber}{suffix} week</span>

    <div slot="left" class="stats">
        <span><b>{daysRemain}</b> days remain</span>
    </div>

    <div slot="right" class="weekControl">
        <Button on:click={() => (date = date.subtractDays(7))} style="clear" size="icon-only">
            <NavArrowIcon direction="left" />
        </Button>
        <Button style="tint" size="small" on:click={() => (date = new Date())}>
            <span>W{weekNumber}</span>
        </Button>
        <Button on:click={() => (date = date.addDays(7))} style="clear" size="icon-only">
            <NavArrowIcon direction="right" />
        </Button>
    </div>
</Goodie>

<style lang="scss">
    .stats b {
        color: var(--color--text);
    }

    .weekControl {
        display: flex;
        align-items: center;
        gap: 4px;
    }
</style>
