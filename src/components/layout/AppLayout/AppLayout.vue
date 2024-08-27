<script setup lang="ts">
import { inject } from "vue";
import { AppDrawer, AppHeader } from "@/components/layout";
import { AppIcon } from "@/components/ui";
import { layoutKey } from "@/utils/symbols";
import { ICON_NAMES } from "@/constants";
import { type ILayout } from "@/composables";

const $layout = inject<ILayout>(layoutKey) as ILayout;

function toggleLeftDrawer() {
  $layout.leftDrawer.isVisible = !$layout.leftDrawer.isVisible;
}
</script>

<template>
  <div class="app-layout">
    <AppHeader class="bg-primary text-white">
      <div class="fit flex items-center px-sm">
        <AppIcon
          v-if="!$layout.leftDrawer.isFixed"
          :name="ICON_NAMES.Menu"
          color="#fff"
          size="2x"
          class="left-drawer-toggle"
          @click="toggleLeftDrawer"
        />
      </div>
    </AppHeader>
    <AppDrawer v-model="$layout.leftDrawer.isVisible" class="bg-secondary" />
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
