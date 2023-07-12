<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useAppStore } from "@/store/app.js";
const emit = defineEmits(["close"]);

let { t, locale } = useI18n();
let store = useAppStore();
function close() {
  emit("close");
}
</script>
<template>
  <v-card v-if="store.$state.invoceWarning" multi-line color="red-lighten-3">
    <v-card-title> {{ t("warning") }} </v-card-title>
  </v-card>
</template>
