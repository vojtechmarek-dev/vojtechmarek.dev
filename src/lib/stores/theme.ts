import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createTheme() {
	let currentTheme: string | undefined;
	if (browser) {
		const storedTheme = localStorage.getItem('theme-preference');
		if (storedTheme) {
			currentTheme = storedTheme;
		} else {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			currentTheme = prefersDark ? 'dark' : 'light';
		}
	}

	const { subscribe, set } = writable<string>(currentTheme);

	return {
		subscribe,
		set: (value: string) => {
			if (browser) {
				localStorage.setItem('theme-preference', value);
				document.firstElementChild?.setAttribute('data-theme', value);
			}
			set(value);
		}
	};
}

export const theme = createTheme();

