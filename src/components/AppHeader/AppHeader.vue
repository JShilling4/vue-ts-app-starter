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

function toggleLeftDrawer() {
  $layout.leftDrawer.isVisible = !$layout.leftDrawer.isVisible;
}
</script>

<template>
  <header class="app-header">
    <div class="fit flex items-center mx-sm">
      <FontAwesomeIcon
        icon="fas fa-bars"
        color="#fff"
        size="2x"
        class="icon"
        @click="toggleLeftDrawer"
      />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  width: 100%;
  height: v-bind(height);
  z-index: 2000;
}
</style>
