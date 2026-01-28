<script lang="ts">
    import type { WorkExperience } from "$lib/data/work-experiences";
    import CircleIcon from "$lib/icons/CircleIcon.svelte";
    import PinIcon from "$lib/icons/PinIcon.svelte";

	export let entries: WorkExperience[];
</script>

<div class="resume-experience">
	{#each entries as entry}
		<div class="experience" class:current={entry.current}>
			<!-- Main Job Timeline -->
			<div class="timeline">
				<div class="time">
					{#if entry.current}Current{/if}
					<CircleIcon />
					{#if !entry.secondments}{entry.timeframe.split(' ')[0]}{/if}
				</div>
				<div class="line"></div>
			</div>

			<!-- Main Job Content -->
			<div class="content">
				<div class="title">
					<div>
						<span class="company-name">{entry.title}</span>
					</div>
					<div class="company-info">
						<small>{entry.company}</small> 
						<small class="separator"> | </small>
						<span class="icon"><PinIcon /></span> 
						<small>{entry.location}</small>
					</div>
				</div>

				<p>{entry.description}</p>

				<!-- SECONDMENT / BRANCH LOGIC -->
				{#if entry.secondments && entry.secondments.length > 0}
					<div class="secondments-container">
						{#each entry.secondments as secondment}
							<div class="experience secondment">
								<!-- Horizontal connector visual -->
								<div class="branch-connector"></div>
								
								<div class="timeline">
									<div class="time">
										<CircleIcon />
										{secondment.timeframe.split(' ')[0]}
									</div>
									<div class="line"></div>
								</div>
								
								<div class="content">
									<div class="title">
										<div><span class="company-name">{secondment.title}</span></div>
										<div class="company-info">
											<small class="secondment-label"><u>Secondment</u></small>
											<small class="company">{secondment.company}</small>
											<span class="separator">|</span>
											<span class="icon"><PinIcon /></span>
											<small class="location">{secondment.location}</small>
										  </div>
									</div>
									<p>{secondment.description}</p>
								</div>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	{/each}
</div>
<style lang="scss">
	.resume-experience {
		.experience {
			display: flex;
			gap: 10px;
			position: relative; /* Needed for absolute positioning context */

			.timeline {
				width: 60px;
				margin-bottom: -16px;
				display: flex;
				flex-direction: column;
				align-items: center;
				flex-shrink: 0;

				.line {
					border-left: 2px dashed var(--color--primary);
					width: 2px;
					flex: 1;
					min-height: 20px;
				}

				.time {
					color: var(--color--text-shade);
					width: 24px;
					padding: 2px;
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 2px;
					font-size: 12px;
					white-space: nowrap;

					:global(svg) {
						width: 20px;
						height: 20px;
						color: var(--color--primary);
						background-color: var(--color--page-background);
					}
				}
			}

			.content {
				flex: 1;
				padding-bottom: 10px;
			}

			.title {
				div { font-size: 18px; display: block; }
				.company-info {
					display: flex;
					flex-direction: row;
					align-items: center;
					gap: 2px;
					.secondment-label {
						margin-right: 5px;
					}
					.separator {
						margin: 0 5px;
					}
				}
				.company-name {
					color: var(--color--text);
					font-size: 22px;
					font-family: var(--font--title);
					font-weight: 600;
				}
				.icon :global(svg) { width: 14px; height: 14px; }
				small {
					font-size: 14px;
					font-weight: 300;
					color: var(--color--text-shade);
					fill: var(--color--text-shade);
				}
			}

			p {
				margin-top: 10px;
				text-align: left;
			}
			
			&.current {
				> .timeline .time :global(svg) {
					padding: 2px;
					background: var(--color--card-background);
					border: 1px solid var(--color--primary);
					border-radius: 50%;
					fill: var(--color--primary);
				}
			}

			&:last-child > .timeline .line {
				display: none;
			}
		}

		/* --- FIXED SECONDMENT STYLES --- */
		
		.secondments-container {
			margin-top: 24px; 
			/* NOTE: Removed margin-left: -30px. We want natural nesting. */
		}

		.experience.secondment {
			position: relative;
			
			.title .company-name { font-size: 18px; }
			.title div { font-size: 16px; }
			
			/* NOTE: This is the visual "L" curve */
			.branch-connector {
				position: absolute;
				/* MATH: 
                   Parent Timeline Half-width (30px) 
                   + Parent Flex Gap (10px) 
                   + 1px for border overlap 
                   = 41px to the left
                */
				left: -41px; 
				top: 8px; /* Start higher up to look like a branch coming up */
				
				width: 40px; /* Span the gap exactly */
				height: 32px; /* Height of the curve */
				
				/* The Branch Shape */
				border-top: 2px dashed var(--color--primary);
				border-left: 2px dashed var(--color--primary);
				border-top-left-radius: 20px; /* Smooth curve */
				
				z-index: 0;
				opacity: 0.5;
			}

			.timeline {
				width: 40px; 
				z-index: 1; 
				
				.time {
					font-size: 10px;
					:global(svg) { width: 14px; height: 14px; }
				}
			}
		}
	}
</style>