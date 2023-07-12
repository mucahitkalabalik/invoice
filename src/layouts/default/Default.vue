<template>
  <v-app>
    <app-header/>
    <default-view />
     <v-snackbar
      v-model="store.$state.snackbar"
      :timeout="store.$state.snackbarTime"
    >
      {{ store.$state.snackbarText }}
    </v-snackbar>
  </v-app>
</template>

<script setup>
import { useAppStore } from "@/store/app.js";
let store = useAppStore();
import appHeader from "@/components/app/appHeader.vue";
import DefaultView from "./View.vue";
</script>
