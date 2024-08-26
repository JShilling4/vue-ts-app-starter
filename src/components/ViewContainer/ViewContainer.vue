<script setup lang="ts">
export type PropTypes = {
  vpad: string;
  hpad: string;
};

withDefaults(defineProps<PropTypes>(), {
  vpad: "2rem",
  hpad: "2rem",
});
</script>

<template>
  <main class="view-container">
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped>
.view-container {
  padding-top: v-bind(vpad);
  padding-bottom: v-bind(vpad);
  padding-left: v-bind(vpad);
  padding-right: v-bind(vpad);
}
</style>
