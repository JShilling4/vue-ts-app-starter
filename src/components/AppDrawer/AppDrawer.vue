<script setup lang="ts">
import { inject, watch } from "vue";
import { ILayout } from "@/composables/useLayout";
import { layoutKey } from "@/utils/symbols";

export type PropTypes = {
  modelValue: boolean;
  side?: "left" | "right";
  width?: string;
};

const props = withDefaults(defineProps<PropTypes>(), {
  side: "left",
  width: "13rem",
});

const $layout = inject<ILayout>(layoutKey) as ILayout;

watch(
  () => props.width,
  (newValue) => {
    $layout.leftDrawer.width = newValue;
  },
  { immediate: true }
);
</script>

<template>
  <aside :class="['app-drawer', { 'app-drawer--hidden': !props.modelValue }]">
    <div class="app-drawer__content">
      <slot></slot>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.app-drawer {
  position: absolute;
  top: v-bind("$layout.header.height");
  height: 100%;
  width: v-bind(width);
}
</style>
