<script>
    export default {
        name: "MeunPage",
        methods: {
            goToSettingPage() {
                location.href = '/setting.html';
            }
        }
    };
</script>

<template>
    <div
        :style="{
            boxSizing: 'border-box',
            width: '100%',
            padding: '40px',
    }">
        <a-row :gutter="20" :style="{ marginBottom: '20px' }">
            <a-col :span="8">
                <a-card :title="$t('Counter')" style="width: 100%">
                    <template #extra>
                        <a-link class="extra">
                            {{ $t("Open") }}
                        </a-link>
                    </template>
                    {{  $t("Open counter Page") }}
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card title="Arco Card" style="width: 100%">
                    <template #extra>
                        <a-link class="extra">
                            {{ $t("Open") }}
                        </a-link>
                    </template>
                    Card content
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card title="Arco Card" style="width: 100%">
                    <template #extra>
                        <a-link class="extra">
                            {{ $t("Open") }}
                        </a-link>
                    </template>
                    Card content
                </a-card>
            </a-col>
        </a-row>
        <a-row :gutter="20">
            <a-col :span="16">
                <a-card title="Arco Card" style="width: 100%">
                    <template #extra>
                        <a-link class="extra">
                            {{ $t("Open") }}
                        </a-link>
                    </template>
                    Card content
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card :title="$t('Setting')" style="width: 100%" @click="goToSettingPage">
                    <template #extra>
                        <a-link class="extra">
                            {{ $t("Open") }}
                        </a-link>
                    </template>
                    {{ $t("Open Setting Page") }}
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<style scoped lang="less">
    .extra {
        position: absolute;
        right: 5px;
        bottom: 5px;
    }
    div.arco-card {
        border-radius: 5px;
    }
</style>
