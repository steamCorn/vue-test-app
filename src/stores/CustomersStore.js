import { defineStore } from "pinia";
import { customers } from "@/data/customers";

export const useCustomersStore = defineStore("CustomersStore", {
  state: () => {
    return{
      customers,
    }
  }
})