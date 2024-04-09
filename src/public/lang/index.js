import { createI18n } from 'vue-i18n'

import en from './en.js'
import zh from './zh.js'

export const i18n = createI18n({
    locale: localStorage.getItem("lang"), //默认语言
    legacy: false, //解决报错的问题
    messages: {
        enUS: en,
        zhCN: zh
    }
})