<script setup lang="ts">
import { type IconName } from "@/constants";

defineProps<{
  name: IconName;
}>();
</script>

<template>
  <FontAwesomeIcon :icon="name" class="icon" />
</template>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
}
</style>
