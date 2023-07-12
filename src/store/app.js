// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    invoices:[
      {
        id: 66521,
        dueDate: 'Tue Jul 11 2023 16:42:24 GMT+0300 (GMT+03:00)',
        invoiceTo: 'George',
        address: 'Office 149, 450 South Brand Brooklyn',
        hoursWorked: 3,
        materials: 'computer',
        labor: 'coding',
        price: 2000,
        description: 'front-end programming',
      },
      {
        id: 66521,
        dueDate: 'Tue Jul 20 2023 16:42:24 GMT+0300 (GMT+03:00)',
        invoiceTo: 'Natali',
        address: 'Office 22, 22 North Brand New York',
        hoursWorked: 3,
        materials: 'computer',
        labor: 'coding',
        price: 2000,
        description: 'back-end programming and deploying',
      }
    ],
    snackbar:false,
    snackbarText:null,
    snackbarTime:0,
    snackbarColor:"success",
    invoceWarning:false
  }),
  actions:{

  },
  getters: {
    getterInvoices: (state) => state.invoices,
  }
})
