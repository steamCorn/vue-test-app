import { defineStore } from "pinia";
import { products } from "../data/products";

export const useProductsStore = defineStore("ProductsStore", {
  state: () => {
    return{
      products
    }
  }
})