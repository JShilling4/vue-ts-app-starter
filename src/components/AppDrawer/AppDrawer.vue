<script setup lang="ts">
export type PropTypes = {
  position?: "left" | "right";
  width?: string;
};

withDefaults(defineProps<PropTypes>(), {
  position: "left",
  width: "200",
});
</script>

<template>
  <div class="app-drawer">
    <aside>
      <slot></slot>
    </aside>
  </div>
</template>

<style lang="scss" scoped></style>
