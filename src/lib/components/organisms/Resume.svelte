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
    <section class="name">
        <Title />
    </section>
    <section class="contact">
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
			I am a <b>Full-Stack Developer</b> with a primary focus on <b>Front-End</b> technologies. While I am proficient in <b>Java</b> and <b>Spring</b>, my true passion lies in building accessible and performant user interfaces using <b>Angular</b>, <b>Svelte</b> or (if needed) <b>React</b>. 
		</p>
		<br />
		<p>
			I also have practical experience in <b>DevOps</b>, enabling me to confidently manage review and deploy <b>Docker</b> containers, <b>Ansible</b> playbooks, and <b>Linux</b> environments. Additionally, my background as a <b>Scrum Master</b> has helped me build strong collaboration skills and become a reliable <b>team player</b>.
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
	@use '$lib/scss/breakpoints.scss' as breakpoints;

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
		@include breakpoints.for-phone-only {
			gap: 0;
		}
		grid-template-columns: auto 1fr;
		grid-template-areas:
			'photo name'
			'contact contact'
			'about about'
			'skills skills'
			'work work'
			'education education';

			@media (min-width: 768px), print {
			padding: 30px 20px;
			grid-template-columns: 2fr 1fr;
			grid-template-rows: min-content min-content 1fr 1fr;

			grid-template-areas:
				'name photo'
				'contact photo'
				'work about'
				'work skills'
				'work education';
		}

		@media (min-width: 900px), print {
			margin: 20px auto;
			max-width: 240mm;
			box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.6), 1px 3px 8px rgba(39, 44, 49, 0.3);
		}

		section {
			padding: 5px;
			border-radius: 10px;
			z-index: 1;

			&.name {
				grid-area: name;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
			&.contact {
				grid-area: contact;
			}
			&.photo {
				grid-area: photo;
				display: flex;
				align-items: center;
				justify-content: center;
				
				img {
					max-width: 100px;
					height: auto;
				}

				@media (min-width: 768px), print {
					img {
						max-width: 100%;
					}
				}
			}
			&.about {
				grid-area: about;

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