<script>
import { useThemeStore } from '@/public/stores/themeStore'

export default {
    name: 'ThemeSettingCard',
    data() {
        return {
            showCardMain: false,
            selectedOption: localStorage.getItem('theme')
        }
    },
    methods: {
        toggleCardMain() {
            this.showCardMain = !this.showCardMain
        },
        themeSettingChanged(value) {
            if (value == 'light' || value == 'dark' || value == 'auto') {
                var ThemeStore = useThemeStore()
                ThemeStore.setTheme(value)
            }
        }
    }
}
</script>

<template>
    <div class="themesettingcard">
        <div class="cardhead" @click="toggleCardMain">
            <svg
                t="1703684304280"
                class="icon cardicon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5901"
                width="24"
                height="24"
            >
                <path
                    d="M452.8 12c-3-7.2-10-12-17.8-12h-38c-7.8 0-15 4.8-17.8 12l-41.4 103.4c-6.4 16-29.2 16-35.6 0L260.8 12c-3-7.2-10-12-17.8-12H224C171 0 128 43 128 96v416H896V96c0-53-43-96-96-96H589c-7.8 0-15 4.8-17.8 12l-41.4 103.4c-6.4 16-29.2 16-35.6 0L452.8 12zM128 576v64c0 70.6 57.4 128 128 128h128v128c0 70.6 57.4 128 128 128s128-57.4 128-128v-128h128c70.6 0 128-57.4 128-128v-64H128z m384 288a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                    p-id="5902"
                ></path>
            </svg>
            <div class="titles">
                <h2 class="title">{{ $t('Application Theme') }}</h2>
                <h5 class="subtitle">{{ $t('Change the appearamce of your application') }}</h5>
            </div>
            <div class="cardheadRight">
                <div class="bg">
                    <svg
                        t="1705600489999"
                        class="icon"
                        :class="{ open: this.showCardMain }"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="5185"
                        width="24"
                        height="24"
                    >
                        <path
                            d="M512 714.666667c-8.533333 0-17.066667-2.133333-23.466667-8.533334l-341.333333-341.333333c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l320 317.866667 317.866667-320c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8L533.333333 704c-4.266667 8.533333-12.8 10.666667-21.333333 10.666667z"
                            p-id="5186"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="cardmain" :class="{ showCardMain: showCardMain }" ref="cardmain">
            <div class="options">
                <label :key="'light'">
                    <input
                        type="radio"
                        v-model="selectedOption"
                        :value="'light'"
                        :name="'ThemeSelect'"
                        @click="themeSettingChanged('light')"
                    />
                    {{ $t('Light') }}
                </label>
                <label :key="'dark'">
                    <input
                        type="radio"
                        v-model="selectedOption"
                        :value="'dark'"
                        :name="'ThemeSelect'"
                        @click="themeSettingChanged('dark')"
                    />
                    {{ $t('Dark') }}
                </label>
                <label :key="'auto'">
                    <input
                        type="radio"
                        v-model="selectedOption"
                        :value="'auto'"
                        :name="'ThemeSelect'"
                        @click="themeSettingChanged('auto')"
                    />
                    {{ $t('Use System Default') }}
                </label>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
div.themesettingcard {
    border-radius: 5px;
    overflow: hidden;
    margin: 20px 70px 0 0;
    div.cardhead {
        height: 70px;
        background-color: var(--card-head);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        cursor: pointer;
        svg.cardicon {
            margin-left: 20px;
        }
        div.cardheadRight {
            margin-left: auto;
            position: relative;
            top: -3px;
            right: 20px;
            div.bg {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 32px;
                height: 32px;
                border-radius: 3px;
                background-color: rgba(0, 0, 0, 0);
                transition: background-color 0.3s ease-in-out;
                svg {
                    transform: none;
                    transition: transform 0.4s ease-in-out;
                    &.open {
                        transform: rotate(180deg);
                    }
                }
            }
        }
        &:hover div.cardheadRight div.bg {
            background-color: var(--card-head-hover);
        }
        div.titles {
            display: block;
            margin-left: 20px;
            h2.title {
                font-size: 1.3rem;
                font-weight: 300;
            }
        }
    }
    div.cardmain {
        display: flex;
        flex-direction: column;
        background-color: var(--card-main);
        height: 0;
        overflow: hidden;
        transition:
            height 0.5s ease-in-out,
            padding-top 0.6s ease-in-out;
        &.showCardMain {
            height: 152px;
        }

        label {
            display: block;
            margin-bottom: 20px;
            margin-left: 80px;
            cursor: pointer;
            input {
                cursor: pointer;
            }
            &:first-child {
                margin-top: 20px;
            }
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}

input[type='radio'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: relative;
}

input[type='radio']::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 3px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #00bd7e;
    outline: 1px solid var(--color-background-soft);
}

input[type='radio']:checked::before {
    background-color: #00b7bd;
}
</style>
