import {defineStore} from 'pinia'

function handleDarkModeChange(e) {
    if (e.matches) {
        document.querySelector(':root').classList = ['dark']
    } else {
        document.querySelector(':root').classList = ['light']
    }
}

export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme: localStorage.getItem('theme')
    }),
    actions: {
        setTheme(theme) {
            this.theme = theme
            localStorage.setItem('theme', theme)
            // Main
            const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
            if (theme == 'auto') {
                darkModeQuery.addEventListener('change', handleDarkModeChange)
                handleAutoTheme()
            } else {
                if (theme == 'dark') {
                    document.body.setAttribute("arco-theme", "dark")
                } else {
                    document.body.removeAttribute("arco-theme")
                }
                darkModeQuery.removeEventListener('change', handleDarkModeChange)
            }
        }
    }
})

function handleAutoTheme() {
    const theme = localStorage.getItem('theme')
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    if (theme == 'auto') {
        if (darkModeQuery.matches) {
            document.body.setAttribute("arco-theme", "dark")
        } else {
            document.body.removeAttribute("arco-theme")
        }
        darkModeQuery.addEventListener('change', handleDarkModeChange)
    } else {
        if (theme == 'dark') {
            document.body.setAttribute("arco-theme", "dark")
        } else {
            document.body.removeAttribute("arco-theme")
        }
        darkModeQuery.removeEventListener('change', handleDarkModeChange)
    }
}

window.onload = function () {
    handleAutoTheme()
}