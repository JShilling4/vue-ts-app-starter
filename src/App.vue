<script lang="ts" setup>
import { provide } from "vue";
import { AppLayout, ViewContainer } from "@/components/layout";
import { useLayout } from "@/composables";
import { layoutKey } from "@/utils/symbols";

const { layout: $layout } = useLayout();
provide(layoutKey, $layout);
</script>

<template>
  <AppLayout>
    <ViewContainer>
      <RouterView />
    </ViewContainer>
  </AppLayout>
</template>

<style lang="scss">
@import "./styles/scss/main.scss";

html,
body {
  height: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
</style>
