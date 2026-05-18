<script lang="ts">
    import ArrowIcon from '$lib/icons/ArrowIcon.svelte';
	import SuitcaseIcon from '$lib/icons/SuitcaseIcon.svelte';
	import WrenchIcon from '$lib/icons/WrenchIcon.svelte';
	import Button from '../atoms/Button.svelte';
</script>

<div class="container">
	<section id="hero">
		<h1 class="hello">Hey! I'm <span class="name">Vojtěch</span>.</h1>
		<p class="intro">
			<span class="description">
				Frontend developer, 8 years deep in clinical systems - schedulers, integrations, rule engines. Angular by trade, Java when needed. Welcome to my little corner of the web.
			</span>
		</p>
		<div class="hero-buttons">
		    <Button style="primary" href="/resume">View Resume <ArrowIcon direction="right" slot="icon-after" /></Button>
			<Button style="understated" href="/goodies">
				<WrenchIcon slot="icon" />
				Goodies
			</Button>
			<Button style="understated" href="/resume">
				<SuitcaseIcon slot="icon" />
				Experience
			</Button>
		</div>
	</section>
</div>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss';

	.container {
		padding: 80px 0 200px;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		overflow: hidden;

		@include breakpoints.for-phone-only {
			padding: 40px 0 50px;
		}

		#hero {
			flex: 1 1 60%; // Allow shrinking
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: start;
			gap: 15px !important;
			position: relative;
			padding: 20px 20px 70px 20px;

			.hello {
				text-align: left;
				margin: unset;
				.name {
					color: var(--color--primary);
				}
			}

			.intro {
				color: var(--color--text-dim);
				display: flex;
				flex-direction: column;
				width: min(100%, 600px);

				.description {
					margin: 0 0 20px 0;
				}
			}

			.hero-buttons {
				display: flex;
				flex-wrap: wrap;
				align-items: left;
				justify-content: left;
				gap: 10px;
				width: 100%;

				@include breakpoints.for-phone-only {
					justify-content: center;
				}
			}
		}
	}
</style>