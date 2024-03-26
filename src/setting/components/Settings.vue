<script>
import themesettingcard from '@/components/setting/themesettingcard.vue'
import langsettingcard from '@/components/setting/langsettingcard.vue'

export default {
    name: 'SettingsPage',
    components: {
        themesettingcard,
        langsettingcard
    }
}
</script>

<template>
    <div class="settings">
        <h1 id="title">{{ $t('Settings') }}</h1>
        <div class="apart" id="Personalization">
            <h2 class="partTitle">{{ $t('Personalization') }}</h2>
            <themesettingcard></themesettingcard>
        </div>
        <div class="port" id="language">
            <h2 class="partTitle">{{ $t('language') }}</h2>
            <langsettingcard></langsettingcard>
        </div>
    </div>
</template>

<style scoped lang="less">
h1#title {
    margin-top: 20px;
    margin-left: 40px;
}
div.apart {
    display: block;
    padding-left: 70px;
    margin-top: 20px;
    h2.partTitle {
        opacity: 0.9;
    }
}
h3#title {
    margin-top: 20px;
    margin-left: 40px;
}
div.port {
    display: block;
    padding-left: 70px;
    margin-top: 20px;
    h3.partTitle {
        opacity: 0.9;
    }
}
</style>
