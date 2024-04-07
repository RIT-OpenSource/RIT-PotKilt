import { createI18n } from 'vue-i18n'
import { useLangStore } from '../stores/langStore'

import en from './enUS.js'
import zh from './zhCN.js'

export const i18n = createI18n({
    locale: useLangStore().get(), //默认语言
    legacy: false, //解决报错的问题
    messages: {
        enUS: en,
        zhCN: zh
    }
})