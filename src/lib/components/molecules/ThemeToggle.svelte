<script lang="ts">
    import MoonIcon from '$lib/icons/MoonIcon.svelte';
    import SunIcon from '$lib/icons/SunIcon.svelte';
	import { theme } from '$lib/stores/theme';

	function toggleTheme() {
		$theme === 'dark' ? theme.set('light') : theme.set('dark');
	}
</script>

<button
	class="theme-toggle"
	title="Toggle between light and dark theme. Current theme: {$theme}"
	aria-label="Toggle between light and dark theme. Current theme: {$theme}"
	data-theme={$theme}
	on:click={toggleTheme}
>
	{#if $theme === 'dark'}
	<div id="sun">
		<SunIcon/>
	</div>
	{:else}
	<div id="moon">
		<MoonIcon/>
	</div>
	{/if}

</button>

<style lang="scss">
.theme-toggle {
    height: 24px;
    padding: 0;
    appearance: none;
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
}

#moon,
#sun {
    color: var(--color--text);
}

/* Ensure SVG elements inherit the color property */
#moon svg,
#sun svg {
    stroke: currentColor;
    fill: none;
}

#moon > circle {
    transition: all 0.5s var(--ease-out-3);
}

</style>