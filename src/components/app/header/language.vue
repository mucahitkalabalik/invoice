<script setup>
import { useTheme } from "vuetify";
import { useI18n } from "vue-i18n";
let { t, locale } = useI18n();
const theme = useTheme();
function changeLang() {
  locale.value = locale.value === "tr" ? "en" : "tr";
}
function changeTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<template>
  <v-btn variant="outlined" @click="changeLang()">
    <v-icon>mdi-translate-variant</v-icon>
    {{ t("global.changeLanguage") }}</v-btn
  >
</template>