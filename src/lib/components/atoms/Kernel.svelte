

<div class="kernel-container kernel">
    		<picture>
			<source srcset="/images/hero_photo.webp" type="image/webp" height="250px">
			<img src="/images/hero_photo.png" alt="description" height="250px">
		</picture>
    <div class="insert"><slot /></div>
</div>

<style lang="scss">
    .kernel-container {
        position: relative;
        display: inline-block;
    }

    .insert {
        position: absolute;
        top: 0;
        right: 20px;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }


</style>
