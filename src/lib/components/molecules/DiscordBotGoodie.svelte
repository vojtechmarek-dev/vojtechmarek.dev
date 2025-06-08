<script lang="ts">
    import GitHubIcon from "$lib/icons/GitHubIcon.svelte";
import Button from "../atoms/Button.svelte";
    import Goodie from "../atoms/Goodie.svelte";


</script>

<Goodie>
    <div slot="heading">Discord Bot Lafayette</div>
    <div slot="description" class="description">
        My own Discord bot, Lafayette. Deployable as Docker container.
    </div>
        <div class="bot-details">
            <Button size="medium" style="primary" href="https://discord.com/oauth2/authorize?client_id=1377202871011115040&permissions=39857333227008&integration_type=0&scope=bot+applications.commands">Invite Bot</Button>
            <Button size="small" style="accent" href="https://github.com/vojtechmarek-dev/discord-bot-lafayette"><GitHubIcon></GitHubIcon></Button>
        </div>
</Goodie>

<style lang="scss">
    .bot-details {
        display: flex;
        gap: 1em;
        justify-content: center;
        padding-top: 1.5em;
    }
</style>