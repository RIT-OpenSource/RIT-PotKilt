// store/i18nStore.js

import { defineStore } from 'pinia';
import { ref } from 'vue';
import i18n from '../i18n'; // 假设您已经设置了VueI18n

export const useI18nStore = defineStore('i18n', () => {
  const locale = ref(i18n.locale); // 初始语言设置

  // 更改语言的方法
  function setLocale(newLocale) {
    if (i18n.availableLocales.includes(newLocale)) {
      locale.value = newLocale;
      i18n.locale = newLocale; // 更新VueI18n的语言设置
    } else {
      console.error(`The locale ${newLocale} is not supported.`);
    }
  }

  // 获取当前语言的方法
  function getCurrentLocale() {
    return locale.value;
  }

  return { locale, setLocale, getCurrentLocale };
});
