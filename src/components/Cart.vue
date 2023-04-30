<template>
  <div class="cart-wrapper">
    <dix class="product-cart-wrapper">
      <div v-for="product in cartStore.items" class="product-cart">
        <p class="product-name">{{ product.name }}</p>
        <p class="price-title">{{ product.price }} $</p>
        <button class="add-button" @click="cartStore.deleteItem(product)">Delete</button>
      </div>
      <span @click="$emit('closeCart')" class="close-icon">
        <img src="../assets/images/icons/close.svg" alt="close icon"/>
      </span>
    </dix>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/CartStore.js';

const cartStore = useCartStore();

defineEmits(["defineEmits"]);

</script>

<style lang="scss" scoped>
.cart-wrapper {

  background-color: rgba(42, 41, 41, 0.459);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  transition: .5s ease-in-out;

  .product-cart-wrapper {
    width: 60%;
    min-height: 30%;
    padding: 1rem;
    display: flex;
    background-color: rgb(240, 240, 240);
    color: black;
    border-radius: 1rem;
    position: relative;

    .close-icon {
      z-index: 11;
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
  
      img {
        width: 2rem;
        height: 2rem;
      }
    }
  
    .product-cart {

    }
    
  }

}

</style>