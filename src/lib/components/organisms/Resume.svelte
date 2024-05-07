<script lang="ts">
    import { WORK_EXPERIENCES, yearsOfExperience } from "$lib/data/work-experiences";
    import Title from "$lib/components/molecules/resume/Title.svelte";
    import Contact from "../molecules/resume/Contact.svelte";
    import Kernel from "../atoms/Kernel.svelte";
</script>

<article class="resume">
    <section class="name-and-contact">
        <Title />
        <Contact {yearsOfExperience} />
    </section>
    <section class="photo">
        <img src="/images/resume-photo.png" alt="Vojtěch Marek Avatar" width="250px" height="250px"> 
	</section>
	<section class="about">
		<h3>About</h3>
		<p>
			work in progress...
		</p>
	</section>
	<section class="work">
		<h3>Professional Experience</h3>
		<p>
			work in progress...
			Check out my LinkedIn for more info
		</p>
	</section>
</article>

<style lang="scss">
    .resume {
        border: 0.15em solid;
        border-color: black;
        border-radius: 8px;
        padding: 0.5em;

		font-size: 16px;
		background-color: white;
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
			&.education {
				grid-area: education;

				p {
					text-align: justify;
				}
			}
			&.skills {
				grid-area: skills;
			}
		}

    }
</style>
