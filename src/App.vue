<script lang="ts" setup>
import { computed, onMounted, provide } from "vue";
import { AppLayout } from "@/components/AppLayout";
import { ViewContainer } from "@/components/ViewContainer";
import { useLayout } from "@/composables/useLayout";
import { layoutKey } from "@/utils/symbols";

const { layout: $layout } = useLayout();
provide(layoutKey, $layout);

const appHeight = computed(() => {
  return `calc(100vh - ${$layout.header.height})`;
});

onMounted(() => {});
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
  width: v-bind(appHeight);
}
.icon {
  cursor: pointer;
}
</style>
