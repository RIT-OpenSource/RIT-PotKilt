<template>
    <PageHeader :breadcrumbRoute="bread" />
    <MenuPage />
    <PageBottom id="bottom" />
</template>

<script>
import PageHeader from "@/public/components/PageHeader.vue";
import MenuPage from "./components/menu.vue";
import PageBottom from "@/public/components/PageBottom.vue";

export default {
    name: "App",
    components: {
        PageHeader,
        MenuPage,
        PageBottom,
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

#bottom {
    width: 100vw;
    padding: 10px 0;
    border-top: 1px solid var(--color-border-2);
    position: absolute;
    bottom: 0;
    text-align: center;
}
</style>
