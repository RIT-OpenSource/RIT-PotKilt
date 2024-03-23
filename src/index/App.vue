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
    setup() {
        var bread = [{ name: "Home", url: "/" }];
        return { bread };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
