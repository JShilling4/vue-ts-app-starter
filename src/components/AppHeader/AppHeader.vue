<script setup lang="ts">
import { ILayout } from "@/composables/useLayout";
import { layoutKey } from "@/utils/symbols";
import { inject, watch } from "vue";

export type PropTypes = {
  height?: string;
};

const props = withDefaults(defineProps<PropTypes>(), {
  height: "4rem",
});

const $layout = inject<ILayout>(layoutKey) as ILayout;

watch(
  () => props.height,
  (newValue) => {
    $layout.header.height = newValue;
  },
  { immediate: true }
);
</script>

<template>
  <header class="app-header">
    <slot></slot>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  width: 100%;
  height: v-bind(height);
  z-index: 2000;
}
</style>
