<script>
//import { useThemeStore } from '@/stores/themeStore';
import { useLanguageStore } from '@/public/stores/langstore.js';

export default {
  name: "SettingsPage",
  setup() {
    //const themeStore = useThemeStore();
    const languageStore = useLanguageStore();

    // 主题切换函数
    //const setTheme = (theme) => {
      //if (theme === 'Use the system settings') {
        // 这里可以添加检测系统主题的逻辑
     // } else {
      //  themeStore.toggleTheme(theme.toLowerCase());
     // }
    //};

    // 语言切换函数
    const setLanguage = (language) => {
      languageStore.switchLanguage(language);
    };

    return {setLanguage };
  },
};
</script>

<template>
    <div class="settings">
        <p class="settingsTitle">{{ $t("Personalization") }}</p>
        <a-collapse :default-active-key="[1]" accordion>
            <a-collapse-item :header="$t('Change the theme')" key="1">
                <a-radio-group type="button" @change="setTheme">
                    <a-radio value="Light">{{ $t("Light") }}</a-radio>
                    <a-radio value="Dark">{{ $t("Dark") }}</a-radio>
                    <a-radio value="Use the system settings">{{$t("Use the system settings")}}</a-radio>
                </a-radio-group>
            </a-collapse-item>
        </a-collapse>
        <p class="settingsTitle">{{ $t("Language") }}</p>
        <a-collapse :default-active-key="[1]" accordion>
            <a-collapse-item :header="$t('Change the language')" key="2">
                <a-radio-group type="button" @change="setLanguage">
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
