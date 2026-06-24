<script lang="ts">
    import GitHubIcon from '$lib/icons/GitHubIcon.svelte';
    import PlantIcon from '$lib/icons/PlantIcon.svelte';
    import ArrowIcon from '$lib/icons/ArrowIcon.svelte';
    import Button from '../atoms/Button.svelte';
    import Goodie from '../atoms/Goodie.svelte';
</script>

<Goodie>
    <span slot="heading">Rootine</span>
    <div slot="icon"><PlantIcon /></div>
    <span slot="description">Open-source personal mobile-first PWA habit tracker that replaces three apps — habits, plants, and workouts — wrapped in a calm, editorial, garden-inspired interface. Built with Svelte and SvelteKit.</span>

    <span slot="command">$ ./rootine.svelte --track --habit</span>

    <div slot="left">
        <Button
            size="medium"
            style="primary"
            href="https://rootine.vojtechmarek.dev"
        >
            <span>Go to Rootine</span>
            <span slot="icon-after"><ArrowIcon direction="right" small /></span>
        </Button>
    </div>

    <div slot="right">
        <Button size="small" style="accent" href="https://github.com/vojtechmarek-dev/rootine">
            <GitHubIcon />
        </Button>
    </div>
</Goodie>
