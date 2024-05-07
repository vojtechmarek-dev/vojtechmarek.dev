<script lang="ts">
    import GitHubIcon from '$lib/icons/GitHubIcon.svelte';
    import GlobeIcon from '$lib/icons/GlobeIcon.svelte';
    import LinkedInIcon from '$lib/icons/LinkedInIcon.svelte';
    import MailIcon from '$lib/icons/MailIcon.svelte';
    import PinIcon from '$lib/icons/PinIcon.svelte';
    import SuitcaseIcon from '$lib/icons/SuitcaseIcon.svelte';
    import WatchIcon from '$lib/icons/WatchIcon.svelte';
    import WebSiteIcon from '$lib/icons/WebSiteIcon.svelte';


    import { calculateYearsSince } from '$lib/utils/dates';

	export let yearsOfExperience: number;
</script>

<ul class="resume-contact">
	<li class="birthday">
		<span class="icon"><WatchIcon /></span>
		<span>{calculateYearsSince(new Date('1996-04-03'))} years old</span>
	</li>
	<li class="experience">
		<span class="icon"><SuitcaseIcon /></span>
		<span>
			{yearsOfExperience} years of experience
		</span>
	</li>
	<li class="location">
		<span class="icon"><PinIcon /></span>
		<span>Brno, Czech Republic</span>
	</li>
 	<!-- <li class="email">
		<span class="icon"><MailIcon /></span>
		<a href="mailto:vojtech.marek@vojtechmarek.dev">vojtech.marek@vojtechmarek.dev</a>
	</li> -->
	<li class="linkedin">
		<span class="icon"><LinkedInIcon /></span>
		<a
			href="https://www.linkedin.com/in/vojtechmarek-dev/"
			target="_blank"
			rel="noopener noreferrer"
		>
			LinkedIn Profile
		</a>
	</li>
<!-- 	<li class="website">
		<span class="icon"><WebSiteIcon /></span>
		<a href="https://vojtechmarek.dev" target="_blank" rel="noopener noreferrer"> vojtechmarek.dev </a>
	</li> -->
	<li class="github">
		<span class="icon"><GitHubIcon /></span>
		<a href="https://github.com/vojtechmarek-dev" target="_blank" rel="noopener noreferrer">
			GitHub Profile
		</a>
	</li>
	<li class="languages">
		<span class="icon"><GlobeIcon /></span>
		<span>Czech, English</span>
	</li>
</ul>

<style lang="scss">
	.resume-contact {
		list-style: none;
		padding: 0;
		margin-left: auto;
		margin-right: auto;

		display: grid;
		grid-gap: 10px;
		grid-template-columns: 1fr 1fr;

		grid-template-areas:
			'email email'
			'website website'
			'location languages'
			'birthday experience'
			'github linkedin';

		li {
			display: flex;
			align-items: center;
			margin: 0;

			.icon {
				margin-right: 10px;
				color: var(--color--primary);
				:global(svg) {
					width: 24px;
					height: 24px;
				}
			}

			a {
				text-decoration: none;
				border-bottom: 1px dotted var(--color--primary);
				padding-bottom: 2px;

				&:hover {
					color: var(--color--primary);
					border-bottom-style: solid;
				}
			}

			&.birthday {
				grid-area: birthday;
			}
			&.location {
				grid-area: location;
			}
			&.experience {
				grid-area: experience;
			}
			&.email {
				grid-area: email;
				margin: 0 auto;
			}
			&.linkedin {
				grid-area: linkedin;
			}
			&.website {
				grid-area: website;
			}
			&.github {
				grid-area: github;
			}
			&.languages {
				grid-area: languages;
			}
		}
	}
</style>