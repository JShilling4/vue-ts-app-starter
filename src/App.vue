<script lang="ts" setup>
import { provide } from "vue";
import { AppLayout } from "@/components/AppLayout";
import { ViewContainer } from "@/components/ViewContainer";
import { useLayout } from "@/composables/useLayout";
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
.icon {
  cursor: pointer;
}
</style>
