<script setup lang="ts">
import { inject } from "vue";
import { ILayout } from "@/composables";
import { layoutKey } from "@/utils/symbols";

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
  position: absolute;
  top: v-bind("$layout.header.height");
  left: v-bind("$layout.leftDrawer.width");
  padding-top: v-bind(vPad);
  padding-bottom: v-bind(vPad);
  padding-left: v-bind(hPad);
  padding-right: v-bind(hPad);
  transition: left 0.3s ease-in-out;
}
</style>
