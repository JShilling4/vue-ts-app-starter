<script setup lang="ts">
import { inject } from "vue";
import { AppDrawer } from "../AppDrawer";
import { AppHeader } from "../AppHeader";
import { layoutKey } from "@/utils/symbols";
import { type ILayout } from "@/composables/useLayout";

const $layout = inject<ILayout>(layoutKey) as ILayout;
</script>

<template>
  <div class="app-layout">
    <AppHeader class="bg-primary text-white" height="5rem">
      App Header
    </AppHeader>
    <AppDrawer
      v-model="$layout.leftDrawer.isVisible"
      side="left"
      class="bg-secondary"
    >
      App Drawer
    </AppDrawer>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.app-layout {
  position: relative;
  width: 100%;
  min-height: 100%;
}
</style>
