<script setup>
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const route = useRouter();
let { t, locale } = useI18n();

function go(path) {
  route.push(`/${path}`)
}
</script>

<template>
  <v-btn color="info" variant="outlined" class="mr-4" @click="go('')">
    {{ t("addInvoice") }}
  </v-btn>
  <v-btn color="info" variant="outlined" @click="go('list')">{{ t("showInvoice") }}</v-btn>
</template>