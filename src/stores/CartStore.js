import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return{
      items: [],
    }
  },

  actions: {
    addItem(item){
      this.items.push(item);
    }
  },
})