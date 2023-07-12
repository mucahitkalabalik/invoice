<script setup>
import appLogo from "@/components/app/header/appLogo.vue";
import appMenu from "@/components/app/header/menu.vue";
import language from "@/components/app/header/language.vue";
import theme from "@/components/app/header/theme.vue";
</script>

<template>
  <v-card class="px-2 mb-2">
    <v-row>
      <v-col cols="12" lg="2" md="2" sm="2"> <app-logo /> </v-col>
      <v-col cols="12" lg="6" md="6" sm="6" class="text-center my-3">
        <app-menu />
      </v-col>
      <v-col cols="6" lg="2" md="2" sm="2" class="my-3 text-end">
        <language />
      </v-col>
      <v-col cols="6" lg="2" md="2" sm="2" class="my-3 text-start">
        <theme />
      </v-col>
    </v-row>
  </v-card>
</template>