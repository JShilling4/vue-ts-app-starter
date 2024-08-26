<script setup lang="ts">
import { ILayout } from "@/composables/useLayout";
import { layoutKey } from "@/utils/symbols";
import { inject } from "vue";

export type PropTypes = {
  vPad?: string;
  hPad?: string;
};

withDefaults(defineProps<PropTypes>(), {
  vPad: "2rem",
  hPad: "2rem",
});

const $layout = inject<ILayout>(layoutKey) as ILayout;
</script>

<template>
  <main class="view-container">
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped>
.view-container {
  padding-top: v-bind(vPad);
  padding-bottom: v-bind(vPad);
  padding-left: v-bind(hPad);
  padding-right: v-bind(hPad);
  margin-left: v-bind("$layout.leftDrawer.width");
}
</style>
