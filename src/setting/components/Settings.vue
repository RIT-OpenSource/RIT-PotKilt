<script>
export default {
    name: "SettingsPage",
};
</script>

<template>
    <div class="settings">
        <p class="settingsTitle">{{ $t("Personalization") }}</p>
        <a-collapse :default-active-key="[1]" accordion>
            <a-collapse-item :header="$t('Change the theme')" key="1">
                <a-radio-group type="button">
                    <a-radio value="Light">{{ $t("Light") }}</a-radio>
                    <a-radio value="Dark">{{ $t("Dark") }}</a-radio>
                    <a-radio value="Use the system settings">{{$t("Use the system settings")}}</a-radio>
                </a-radio-group>
            </a-collapse-item>
        </a-collapse>
        <p class="settingsTitle">{{ $t("Language") }}</p>
        <a-collapse :default-active-key="[1]" accordion>
            <a-collapse-item :header="$t('Change the language')" key="2">
                <a-radio-group type="button">
                    <a-radio value="EN">{{ $t("English") }}</a-radio>
                    <a-radio value="ZH">{{ $t("中文") }}</a-radio>
                </a-radio-group>
            </a-collapse-item>
        </a-collapse>
    </div>
</template>

<style scoped lang="less">
div.settings {
    padding: 0 80px;
    display: block;
    p.settingsTitle {
        font-size: 24px;
        font-weight: bold;
        width: max-content;
    }
    div.arco-collapse {
        margin: 0 20px;
    }
}
</style>
