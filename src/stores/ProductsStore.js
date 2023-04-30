import { defineStore } from "pinia";

export const useProductsStore = defineStore("ProductsStore", {
  state: () => {
    return{
      products: [],
    }
  },

  actions: {
    async fill(){
      this.products = (await import("../data/products.js")).products;
    }
  }
})