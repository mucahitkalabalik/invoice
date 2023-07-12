<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useAppStore } from "@/store/app.js";
import warning from "@/components/invoice/warning.vue";

let { t } = useI18n();
let store = useAppStore();

let invoices = computed(() => {
  return store.getterInvoices;
});
function dateFormatter(date) {
  return date.slice(0, 11);
}
function dateCheck(date) {
  let nowDate = new Date();
  let incoiceDate = new Date(date);
  if (incoiceDate > nowDate) {
    if (!store.$state.invoceWarning) {
      store.$state.invoceWarning = true;
    }
    return true;
  } else {
    return false;
  }
}
function closeWarning() {
  store.$state.invoceWarning = !store.$state.invoceWarning;
}
</script>

<template>
  <v-container>
    <v-card class="pa-5 elevation-10" color="body_bg" >
      <v-table class="my-5">
        <thead>
          <tr>
            <th class="text-left">
              {{ t("invoiceId") }}
            </th>
            <th class="text-left">
              {{ t("invoiceTo") }}
            </th>
            <th class="text-left">
              {{ t("dueDate") }}
            </th>
            <th class="text-left">
              {{ t("address") }}
            </th>
            <th class="text-left">
              {{ t("price") }}
            </th>
            <th class="text-left">MAIL</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in invoices" :key="item + index">
            <td>{{ item.id }}</td>
            <td>{{ item.invoiceTo }}</td>
            <td :class="dateCheck(item.dueDate) ? '' : 'bg-red'">
              {{ dateFormatter(String(item.dueDate)) }}
            </td>
            <td>{{ item.address }}</td>
            <td>{{ item.price }}</td>
            <td>
              <a
                href="mailto:abc@example.com?subject = Feedback&body = Message"
              >
                Send Feedback
              </a>
            </td>
          </tr>
        </tbody>
      </v-table>
      <warning @close="closeWarning" />
    </v-card>
  </v-container>
</template>
