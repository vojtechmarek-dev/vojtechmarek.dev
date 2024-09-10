<script lang="ts">
    import type { Skill } from "$lib/data/work-experiences";
    import Card from "../atoms/Card.svelte";
    import Tag from "../atoms/Tag.svelte";

    // Separate inputs for the Project properties
    export let title: string;
    export let description: string;
    export let skills: Skill[];
    export let timeframe: number;
  </script>

<Card>
    <div slot="heading">{title}</div>
    <div class="timeframe">
        {timeframe}
    </div>
    <div class="description">
        {description}
    </div>
    <div class="footer" slot="footer">
        <div class="tags">
				{#each skills as tag}
					<Tag>{tag.label}</Tag>
				{/each}
			</div>
    </div>
</Card>

<style lang="scss">
    .footer {
        display: flex;
        flex-direction: row;
    }

    .tags {
		display: flex;
		align-items: center;
		gap: 5px;
		flex-wrap: wrap;
	}

    .timeframe {
        font-size: small;
    }

	.footer {
		align-items: center;
        align-content: center;
	}
</style>
  