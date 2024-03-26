<template>
    <PageHeader :breadcrumbRoute="bread" />
</template>

<script>
import PageHeader from "@/public/components/PageHeader.vue";

export default {
    name: "App",
    components: {
        PageHeader,
    },
    setup(){
        var bread = [{ name: "Home", url: "/" }, {name: "Menu", url: "/menu"}]
        return {bread}
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-image: radial-gradient(var(--color-fill-3) 1px, rgba(0, 0, 0, 0) 1px);
    background-size: 16px 16px;
}
</style>
