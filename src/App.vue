<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { mainNavConfig } from "./components/config";
import { IconNames } from "@/types";

const $route = useRoute();

const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>

<template>
  <div>App Layout Here</div>
</template>

<style lang="scss" scoped></style>
