<script lang="ts">
    import Tag from '$lib/components/atoms/Tag.svelte';
</script>

<ul class="resume-skills">
    <li>
        Front-end
        <div class="tags-container">
            <Tag>Angular</Tag>
            <Tag>RxJS</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Material</Tag>
            <Tag>Bootstrap</Tag>
            <Tag>Svelte</Tag>
            <Tag>React</Tag>
            <Tag>Jotai</Tag>
            <Tag>Tailwind</Tag>
            <Tag>NodeJS</Tag>
            <Tag>Drizzle</Tag>
            <Tag>Zod</Tag>
        </div>
    </li>
    <li>
        Other
        <div class="tags-container">
            <Tag color="secondary">Java</Tag>
            <Tag color="secondary">REST API</Tag>
            <Tag color="secondary">NodeJS</Tag>
            <Tag color="secondary">Debian</Tag>
            <Tag color="secondary">PostgreSQL</Tag>
            <Tag color="secondary">Spring</Tag>
            <Tag color="secondary">Docker</Tag>
            <Tag color="secondary">Ansible</Tag>
            <Tag color="secondary">Agile</Tag>
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
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin: 4px 0 6px;
    }
</style>
