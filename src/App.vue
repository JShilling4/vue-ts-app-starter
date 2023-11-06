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
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          :icon="leftDrawerOpen ? 'close' : 'menu'"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-avatar>
            <img src="@/assets/vue.svg" />
          </q-avatar>
          APP NAME HERE
        </q-toolbar-title>

        <q-btn
          dense
          flat
          round
          :icon="IconNames.Settings"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above side="left" bordered>
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(navItem, index) in mainNavConfig" :key="index">
            <q-item
              v-ripple
              :to="navItem.routePath"
              clickable
              :active="$route.fullPath === navItem.routePath"
            >
              <q-item-section avatar>
                <q-icon :name="navItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ navItem.label }}
              </q-item-section>
            </q-item>
            <q-separator v-if="navItem.separator" :key="'sep' + index" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.q-toolbar {
  min-height: var(--app-header-height);
}
</style>
