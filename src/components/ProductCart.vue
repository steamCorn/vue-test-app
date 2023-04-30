<template>
  <div class="cart-wrapper">
    <div class="product-cart">
      <div class="image-product-wrapper">
        <img :src="product.imageLink" alt="" class="image-product"/>
      </div>
      <h2 class="product-name">{{ product.name }}</h2>
      <span class="made-of">{{ product.country }}</span>
      <div>
        <h2 class="price-title">{{ product.price }} $</h2>
      </div>
  
      <button class="add-button" @click="cartStore.addItem(product)">Add to Cart</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/CartStore.js';

const cartStore = useCartStore();

defineProps({
  product: Object,
})

</script>

<style lang="scss" scoped>
.cart-wrapper{

  .product-cart {
    position: relative;
    width: 20rem;
    background-color: rgb(114, 114, 114);
    border: 1px solid rgb(93, 93, 93);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  
    .image-product-wrapper {
      height: 10rem;
      width: 100%;
      overflow: hidden;
      border-radius: 0.5rem;
  
      .image-product {
        height: 100%;
        border-radius: 0.5rem;
      }
    }

    .product-name {
      font-size: 1.1rem;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  
    .add-button {
      position: relative;
      bottom: 0;
    }
  }
}
</style>