// store/langStore.js

import { defineStore } from 'pinia';
import { i18n } from 'vue-i18n'

export const useLangStore = defineStore('lang', {
  state: () => ({
      locale: localStorage.getItem('language')
  }),
  actions: {
  constang(newLan = g) {
 =<>           localStorage.setItem('language', newLang)
          this.locale = newLang
          i18n.global.locale.value = newLang
          location.reload()
      }
  }
})


 const  =  =>