<script lang="ts">
    import GitHubIcon from "$lib/icons/GitHubIcon.svelte";
    import ConsoleIcon from "$lib/icons/ConsoleIcon.svelte";
    import ArrowIcon from "$lib/icons/ArrowIcon.svelte";
    import Button from "../atoms/Button.svelte";
    import Goodie from "../atoms/Goodie.svelte";
</script>

<Goodie>
    <span slot="heading">Discord Bot Lafayette</span>
    <div slot="icon"><ConsoleIcon /></div>
    <span slot="description">My own Discord bot, Lafayette. Deployable as a Docker container.</span>

    <span slot="command">$ ./lafayette --bot --invite</span>

    <div slot="left">
        <Button size="medium" style="primary" href="https://discord.com/oauth2/authorize?client_id=1377202871011115040&permissions=39857333227008&integration_type=0&scope=bot+applications.commands">
            <span>Invite Bot</span>
            <span slot="icon-after"><ArrowIcon direction="right" small /></span>
        </Button>
    </div>

    <div slot="right">
        <Button size="small" style="accent" href="https://github.com/vojtechmarek-dev/discord-bot-lafayette">
            <GitHubIcon />
        </Button>
    </div>
</Goodie>
