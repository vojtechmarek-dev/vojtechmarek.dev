<script lang="ts">
    export let direction: "left" | "right" | "up" | "down" = "left";

    const rotations = {
        left: "rotate(0)",
        right: "rotate(180 12 12)",
        up: "rotate(90 12 12)",
        down: "rotate(-90 12 12)"
    };
</script>

<svg
    width="24px"
    height="24px"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <g transform={rotations[direction] || rotations.left}>
        <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </g>
</svg>