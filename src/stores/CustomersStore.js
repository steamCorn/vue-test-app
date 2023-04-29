import { defineStore } from "pinia";
import { customers } from "../data/customers";

export const useProductsStore = defineStore("ProductsStore", {
  state: () => {
    return{
      customers,
    }
  }
})