<template>
    <PageHeader :breadcrumbRoute="bread" />
    <PageBottom id="bottom" />
</template>

<script>
import PageHeader from "@/public/components/PageHeader.vue";
import PageBottom from "@/public/components/PageBottom.vue";

export default {
    name: "App",
    components: {
        PageHeader,
        PageBottom,
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

#bottom {
    width: 100vw;
    padding: 10px 0;
    border-top: 1px solid var(--color-border-2);
    position: absolute;
    bottom: 0;
    text-align: center;
}
</style>
