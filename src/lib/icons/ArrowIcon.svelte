<script lang="ts">
    export let direction: "left" | "right" | "up" | "down" = "down";
    export let small: boolean = false;

    const rotations = {
        down:  "rotate(0)",
        up:    "rotate(180 12 12)",
        left:  "rotate(90 12 12)",
        right: "rotate(-90 12 12)"
    };

    $: size = small ? "16px" : "24px";
    $: strokeWidth = small ? "1.75" : "1.75";
</script>

<svg width={size} height={size} viewBox="0 0 24 24" stroke-width={strokeWidth} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform={rotations[direction] || rotations.down}>
        <path d="M12 3L12 21M12 21L20.5 12.5M12 21L3.5 12.5" stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
</svg>
