<script setup lang="ts">
import { inject, watch } from "vue";
import { ILayout } from "@/composables";
import { layoutKey } from "@/utils/symbols";

export type PropTypes = {
  modelValue: boolean;
  side?: "left" | "right";
  width?: string;
  fixed?: boolean;
};

const props = withDefaults(defineProps<PropTypes>(), {
  side: "left",
  width: "15rem",
  fixed: false,
});

const $layout = inject<ILayout>(layoutKey) as ILayout;

watch(
  () => props.width,
  (newValue) => {
    $layout.leftDrawer.width = newValue;
  },
  { immediate: true }
);

watch(
  () => props.modelValue,
  (show) => {
    if (show) $layout.leftDrawer.width = props.width;
    else $layout.leftDrawer.width = "0";
  },
  { immediate: true }
);

watch(
  () => props.fixed,
  (fix) => {
    if (fix) $layout.leftDrawer.isFixed = true;
    else $layout.leftDrawer.isFixed = false;
  },
  { immediate: true }
);
</script>

<template>
  <aside :class="['app-drawer', { 'app-drawer--hidden': !props.modelValue }]">
    <div class="app-drawer__content"></div>
  </aside>
</template>

<style lang="scss" scoped>
.app-drawer {
  position: fixed;
  top: v-bind("$layout.header.height");
  left: v-bind("side === 'left' ? 0 : 'initial'");
  right: v-bind("side === 'right' ? 0 : 'initial'");
  height: calc(100vh - 5rem);
  width: v-bind(width);
  overflow: hidden;
  transition: width 0.3s ease-in-out;

  &--hidden {
    width: 0;
  }
}
</style>
