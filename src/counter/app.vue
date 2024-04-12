<script>
import PageHeader from "@/public/components/PageHeader.vue";
import Counter from "./components/Counters.vue";
import PageBottom from "@/public/components/PageBottom.vue";

export default {
    name: "App",
    components: {
        PageHeader,
        Counter,
        PageBottom,
    },
    setup(){
        var bread = [{ name: "Home", url: "/" }, {name: "Menu", url: "/menu"}, { name: "Counter", url: "/Counter" }];
        return {bread}
    },
};
</script>

<template>
    <div id="app">
        <PageHeader :breadcrumbRoute="bread" />
        <PageBottom id="bottom" />
        <Counter />
    </div>
</template>

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
