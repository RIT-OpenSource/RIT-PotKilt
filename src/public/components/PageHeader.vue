<script>
import LyIconDonate from "./icon/LyIconDonate.vue";
import LyIconPage from "./icon/LyIconPage.vue";

export default {
    name: "PageHeader",
    props: {
        breadcrumbRoute: {
            type: Array,
            default: () => [{ name: "Home", url: "/" }],
        },
    },
    components: {
        LyIconDonate,
        LyIconPage,
    },
    methods: {
        // eslint-disable-next-line no-unused-vars
        openDonatePage(_ev) {
            window.open("https://afdian.net/a/lingyunawa");
        },
        // eslint-disable-next-line no-unused-vars
        openMenu(_ev){
            location.href = '/menu.html'
        }
    },
};
</script>

<template>
    <div id="PageHeader">
        <a-page-header :show-back="false">
            <template #breadcrumb>
                <a-breadcrumb>
                    <a-breadcrumb-item
                        v-for="(item, index) in breadcrumbRoute"
                        :key="index"
                    >
                        <a-link :href="item.url" :hoverable="false">{{
                            item.name
                        }}</a-link>
                    </a-breadcrumb-item>
                </a-breadcrumb>
            </template>
            <template #title>
                <span id="title">RIT ToolKit </span>
            </template>
            <template #subtitle>
                <a-space>
                    <span>v0.1.0</span>
                    <a-tag color="red" size="small"> {{  $t('In-Dev') }} </a-tag>
                    <a-tag color="red" size="small"> {{  $t('Not a release') }} </a-tag>
                </a-space>
            </template>
            <template #extra>
                <a-space>
                    <a-button type="primary">
                        <template #icon>
                            <icon-github style="font-size: 18px" />
                        </template>
                    </a-button>
                    <a-button type="primary">
                        <template #icon>
                            <icon-question-circle style="font-size: 21px" />
                        </template>
                    </a-button>
                    <a-button type="primary" @click="openDonatePage">
                        <template #icon>
                            <ly-icon-donate />
                        </template>
                    </a-button>
                    <a-button type="primary" @click="openMenu">
                        <template #icon>
                            <ly-icon-page />
                        </template>
                    </a-button>
                </a-space>
            </template>
        </a-page-header>
    </div>
</template>

<style scoped lang="less">
div#PageHeader {
    padding: 28px;
    padding-bottom: 36px;
    background-image: radial-gradient(
        var(--color-fill-3) 1px,
        rgba(0, 0, 0, 0) 1px
    );
    background-size: 16px 16px;
}
span#title {
    font-size: 24px;
    font-weight: 450;
    span.big {
        font-size: 32px;
    }
}
</style>
