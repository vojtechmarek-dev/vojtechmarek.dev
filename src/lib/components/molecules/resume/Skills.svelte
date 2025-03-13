<ul class="resume-skills">
	<li>
		Front-end
		<div class="tags-container">
			<span class="tag">Angular</span>
			<span class="tag">RxJS</span>
			<span class="tag">TypeScript</span>
			<span class="tag">Material</span>
			<span class="tag">Bootstrap</span>
            <span class="tag">Svelte</span>
		</div>
	</li>
	<li>
		Other
		<div class="tags-container">
            <span class="tag secondary">Java</span>
			<span class="tag secondary">REST API</span>
			<span class="tag secondary">NodeJS</span>
			<span class="tag secondary">Debian</span>
			<span class="tag secondary">PostgreSQL</span>
            <span class="tag secondary">Spring</span>
            <span class="tag secondary">Docker</span>
            <span class="tag secondary">Ansible</span>
			<span class="tag secondary">Agile</span>
		</div>
	</li>
</ul>

<style lang="scss">
	.resume-skills {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.tags-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		margin: 2px 0 5px;
	}

	.tag {
		background-color: var(--color--primary-tint);
		border: 1px solid var(--color--primary-contrast);
		color: var(--color--primary-contrast);
		border-radius: 0.25em;
		display: inline-block;
		font-size: 0.75em;
		line-height: 2em;
		margin: 0.125em;
		padding: 0 0.5em;
		text-decoration: none;
		white-space: nowrap;

		&.secondary {
			background-color: var(--color--primary-accent-tint);
			border: 1px solid var(--color--primary-accent);
			color: var(--color--primary-accent);
		}
	}
</style>