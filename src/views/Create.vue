<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import Datepicker from "vuejs3-datepicker";
import { useAppStore } from "@/store/app.js";

let { t } = useI18n();
let store = useAppStore();

let data = ref({
  id: null,
  dueDate: new Date(),
  invoiceTo: null,
  address: null,
  hoursWorked: null,
  materials: null,
  labor: null,
  price: null,
  description: null,
  status: "paid",
});
function clear() {
  data.value = {
    id: null,
    dueDate: new Date(),
    invoiceTo: null,
    address: null,
    hoursWorked: null,
    materials: null,
    labor: null,
    price: null,
    description: null,
  };
  store.$state.snackbar = true;
  store.$state.snackbarTime = 1500;
  store.$state.snackbarText = "Fatura bilgileri temizlendi";
}

function send() {
  for (const property in data.value) {
    if (
      data.value[property] == null ||
      data.value[property] === "" ||
      !data.value[property]
    ) {
      store.$state.snackbar = true;
      store.$state.snackbarTime = 1500;
      store.$state.snackbarText = "Lütfen boş alanları doldurun.";
      return;
    }
  }

  store.$state.invoices.push(data.value);
  store.$state.snackbar = true;
  store.$state.snackbarTime = 1500;
  store.$state.snackbarText = "Fatura Eklendi";
  clear()
}
</script>
<template>
  <v-container>
    <v-card class="my-5 mx-10 pa-5 rounded-lg elevation-15" color="body_bg">
      <v-row>
        <v-col cols="12" lg="3" md="3" class="pl-5">
          <v-icon size="x-large">mdi-cancel</v-icon> LOGO</v-col
        >
        <v-col cols="12" lg="3" md="5" offset-lg="4" offset-md="4">
          <v-text-field
            v-model.number="data.id"
            :label="t('invoiceId')"
            variant="solo"
            color="light-blue-darken-1"
          ></v-text-field>
          <span class="mr-2">{{ t('dueDate') }}</span>
          <Datepicker
            :full-month-name="true"
            placeholder="YYYY-MM-DD"
            :typeable="true"
            :hideInput="false"
            v-model="data.dueDate"
            class="text-black"
          />
        </v-col>
        <v-col cols="12" class="my-3">
          <v-row>
            <v-col cols="12" lg="6" md="6">
              <v-text-field
                variant="solo"
                color="light-blue-darken-1"
                :label="t('invoiceTo')"
                v-model="data.invoiceTo"
              ></v-text-field
            ></v-col>
            <v-col cols="12" lg="6" md="6">
              <v-text-field
                variant="solo"
                color="light-blue-darken-1"
                :label="t('address')"
                v-model="data.address"
              ></v-text-field
            ></v-col>
          </v-row>
        </v-col>
        <v-divider></v-divider>
        <v-col cols="12" class="my-3">
          <v-row>
            <v-col cols="12" lg="4" md="4">
              <v-text-field
                variant="solo"
                :label="t('hoursWorked')"
                color="light-blue-darken-1"
                type="number"
                v-model.number="data.hoursWorked"
              ></v-text-field
            ></v-col>
            <v-col cols="12" lg="4" md="4">
              <v-text-field
                variant="solo"
                :label="t('materials')"
                color="light-blue-darken-1"
                v-model="data.materials"
              ></v-text-field
            ></v-col>
            <v-col cols="12" lg="4" md="4">
              <v-text-field
                variant="solo"
                :label="t('labor')"
                color="light-blue-darken-1"
                v-model="data.labor"
              ></v-text-field
            ></v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-text-field
            variant="solo"
            color="light-blue-darken-1"
            :label="t('price')"
            type="number"
            v-model.number="data.price"
          ></v-text-field>
        </v-col>
        <v-divider></v-divider>
        <v-col cols="12">
          <v-textarea
            variant="solo"
            color="light-blue-darken-1"
            :label="t('description')"
            v-model="data.description"
          ></v-textarea>
        </v-col>
        <v-col cols="12" class="text-end">
          <v-btn @click="send()"
            ><v-icon size="x-large" color="success"
              >mdi-send-circle-outline</v-icon
            ></v-btn
          >
          <v-btn class="ml-5" @click="clear">
            <v-icon size="x-large" color="error"
              >mdi-close-circle</v-icon
            ></v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
