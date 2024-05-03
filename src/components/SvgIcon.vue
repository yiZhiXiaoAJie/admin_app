<script lang="ts" setup>
import { h, resolveComponent } from "vue"
const props = withDefaults(
  defineProps<{
    icon: string
    size?: string | number
    color?: string
  }>(),
  {
    size: 16
  }
)

const render = () => {
    if (!props.icon) {
        return h("i")
    }else {
        return h(resolveComponent('el-icon'),{size:props.size,color:props.color},() => h(resolveComponent(props.icon)))
    }
}
</script>

<template>
  <render />
</template>

<style lang="scss" scoped></style>
