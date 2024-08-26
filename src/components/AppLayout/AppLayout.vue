<script setup lang="ts">
import { AppDrawer } from "../AppDrawer";
import { AppHeader } from "../AppHeader";
</script>

<template>
  <div class="app-layout">
    <AppHeader>App Header</AppHeader>
    <AppDrawer>App Drawer</AppDrawer>
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
