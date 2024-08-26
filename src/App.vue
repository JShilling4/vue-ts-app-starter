<script lang="ts" setup>
import { AppLayout } from "@/components/AppLayout";
import { ViewContainer } from "@/components/ViewContainer";
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
</style>
