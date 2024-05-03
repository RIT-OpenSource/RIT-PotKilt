<script>
export default {
    name: "CountersPage",
};
</script>

<template>
    <div class="counters">
        <p class="countersTitle">{{ $t("Counters") }}</p>
        <el-row :gutter="12" class="demo-radius">
            <el-col
              v-for="(radius, i) in radiusGroup"
              :key="i"
              :span="6"
              :xs="{ span: 12 }"
             >
              <div class="title">{{ radius.name }}</div>
                <div class="value">
                   <code>border-radius: {{ getValue(radius.type) || '0px' }}</code>
                </div>
              <div
                class="radius"
                :style="{
                  borderRadius: radius.type
                    ? `var(--el-border-radius-${radius.type})`
                    : '',
                  }"
                />
           </el-col>
        </el-row>
    </div>
</template>

<style scoped lang="less"></style>
