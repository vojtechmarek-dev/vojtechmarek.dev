<script lang="ts">
    import { WORK_EXPERIENCE_LIST, yearsOfExperience } from "$lib/data/work-experiences";
    import Title from "$lib/components/molecules/resume/Title.svelte";
    import Contact from "../molecules/resume/Contact.svelte";
    import Experience from "../molecules/resume/Experience.svelte";
    import SectionTitle from "../molecules/resume/SectionTitle.svelte";
    import Skills from "../molecules/resume/Skills.svelte";

	let experienceEntires = [...WORK_EXPERIENCE_LIST].reverse();
</script>

<article class="resume">
    <section class="name-and-contact">
        <Title />
        <Contact {yearsOfExperience} />
    </section>
	<section class="photo">
		<picture>
			<source srcset="/images/resume_photo_circle.webp" type="image/webp">
			<img src="/images/resume_photo_circle.png" alt="Resume">
		</picture>
	</section>
	<section class="about">
		<SectionTitle>About</SectionTitle>
		<p>
			I'm most interested in front-end frameworks (mostly <b>Angular</b>), constantly trying to wrap my head around the next "best". To keep my head cool and resist the temptation of starting projects I know I can't finish, I (sometimes) turn to Java, to keep me grounded.
		</p>
	</section>
	<section class="work">
		<SectionTitle>Professional Experience</SectionTitle>
		<Experience entries={experienceEntires}/>
	</section>
	<section class="skills">
		<SectionTitle>Skills</SectionTitle>
		<Skills />
	</section>
</article>

<style lang="scss">
    .resume {
        border: 0.15em solid;
        border-color: var(--colo--text);
        border-radius: 8px;
        padding: 0.5em;

		font-size: 16px;
		background-color: var(--color--page-background);
		position: relative;
		overflow: hidden;

		display: grid;
		gap: 20px 30px;
		grid-template-columns: 1fr;
		grid-template-areas:
			'photo'
			'name'
			'about'
			'skills'
			'work'
			'education';

			@media (min-width: 768px), print {
			padding: 30px 20px;
			grid-template-columns: 2fr 1fr;
			grid-template-rows: 1fr 1fr 1fr 1fr;

			grid-template-areas:
				'name photo'
				'work about'
				'work skills'
				'work education';
		}

		@media (min-width: 900px), print {
			margin: 20px auto;
			max-width: 210mm;
			box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.6), 1px 3px 8px rgba(39, 44, 49, 0.3);
		}

		section {
			padding: 5px;
			border-radius: 10px;
			z-index: 1;

			&.name-and-contact {
				grid-area: name;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
			&.photo {
				grid-area: photo;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			&.about {
				grid-area: about;

				p {
					text-align: justify;
				}
			}
			&.work {
				grid-area: work;
			}
/* 			&.education {
				grid-area: education;

				p {
					text-align: justify;
				}
			} */
			&.skills {
				grid-area: skills;
			}
		}

    }
</style>
