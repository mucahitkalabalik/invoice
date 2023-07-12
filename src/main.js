/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
// Plugins
import { registerPlugins } from "@/plugins";
const i18n = createI18n({
  locale: "tr",
  legacy: false,
  messages: {
    tr: {
      global: {
        changeLanguage: "Dİl",
        changeTheme:"TEMA"
      },
      addInvoice: "Fatura Oluştur",
      showInvoice: "Faturalar",
      invoiceId:"FATURA ID",
      dueDate:"BİTİŞ TARİHİ",
      invoiceTo:"KİME",
      address:"ADRES",
      hoursWorked:"ÇALIŞILAN SAAT",
      materials:"MALZEMELER",
      labor:"İŞÇİLİK",
      price:"FİYAT",
      description:"AÇIKLAMA",
      warning:"Dikkat ödenmemiş faturanız var !"
    },
    en: {
      global: {
        changeLanguage: "Language",
        changeTheme:"THEME"
      },
      addInvoice: "Create Invoice",
      showInvoice: "Invoices",
      invoiceId:"INVOICE ID",
      dueDate:"DUE DATE",
      invoiceTo:"INVOICE TO",
      address:"ADDRESS",
      hoursWorked:"HOURS WORKED",
      materials:"MATERIALS",
      labor:"LABOR",
      price:"PRICE",
      description:"DESCRIPTION",
      warning:"You have an unpaid invoice!"
    },
  },
});
const app = createApp(App);
app.use(i18n);
registerPlugins(app);

app.mount("#app");
