import { defineStore } from "pinia";

function getCurttenLang(){
    const lang = localStorage.getItem("language")
    if (lang == null){
        localStorage.setItem("language", "zhCN");
        return "zhCN";
    }
    return lang;
}

export const useLangStore = defineStore("counter", {
    state: () => ({
        lang: getCurttenLang(), 
    }),
    actions: {
        get(){
            return this.lang;
        },
        update(new_lang) {
            try {
                const allow_list = ["zhCN", "enUS"];
                if (new_lang in allow_list) {
                    this.lang = new_lang;
                    localStorage.setItem("language", new_lang);
                    return true;
                } else {
                    console.warn(`Language "${new_lang}" is not supported`);
                    return false;
                }
            } catch (e) {
                console.error(`Language update failed: ${e}`);
                return false;
            }
        },
    },
});
