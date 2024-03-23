<script>
export default {
    props: {
        width: {
            type: Number,
            default: 24,
        },
        height: {
            type: Number,
            default: 24,
        },
        color: {
            type: String,
            default: "#ffffff",
        },
    },
};
</script>

<template>
    <svg
        t="1711222680372"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4286"
        :width="width"
        :height="height"
    >
        <path
            d="M640 896H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V213.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h426.666667a85.333333 85.333333 0 0 1 85.333333 85.333333v597.333334a85.333333 85.333333 0 0 1-85.333333 85.333333z m213.333333-85.333333h-42.666666V213.333333h42.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v512a42.666667 42.666667 0 0 1-42.666667 42.666667z"
            :fill="color"
        />
    </svg>
</template>

<style scoped>
svg {
    font-size: 32px;
}
</style>
