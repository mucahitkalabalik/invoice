<script setup>
import { useTheme } from "vuetify";
import { useI18n } from "vue-i18n";
let { t, locale } = useI18n();
const theme = useTheme();

function changeTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<template>

  <v-btn class="ml-3" variant="outlined" @click="changeTheme()">
    <v-icon>mdi-compare</v-icon>
    {{ t("global.changeTheme") }}</v-btn
  >
</template>