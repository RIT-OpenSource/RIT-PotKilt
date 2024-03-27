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
                document.querySelector(':root').classList = [theme]
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
            document.querySelector(':root').classList = ['dark']
        } else {
            document.querySelector(':root').classList = ['light']
        }
        darkModeQuery.addEventListener('change', handleDarkModeChange)
    } else {
        document.querySelector(':root').classList = [theme]
        darkModeQuery.removeEventListener('change', handleDarkModeChange)
    }
}

window.onload = function () {
    handleAutoTheme()
}