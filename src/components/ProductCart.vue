<template>
  <div class="cart-wrapper">
    <div class="product-cart">
      <div class="cart-image-wrapper">
        <div class="product-image">
          <img :src="product.imageLink" alt="" class="image"/>
        </div>
        <button class="add-button" @click="cartStore.addItem(product)">Add to Cart</button>
      </div>

      <div class="product-info">
        <p class="product-name">{{ product.name }}</p>
        <span class="made-off">delivery from {{ product.country }}</span>
        <div>
          <p class="price-title">{{ product.price }} $</p>
        </div>
      </div>
  
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/CartStore.js';

const cartStore = useCartStore();

defineProps({
  product: Object,
})

</script>

<style lang="scss" scoped>
.cart-wrapper{

  .product-cart {
    position: relative;
    max-width: 20rem;
    min-width: 10rem;
    background-color: var(--background-color);
    border: 1px solid var(--background-color);
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    padding: 1rem;
  
    .cart-image-wrapper {
      display: block;
      position: relative;
      overflow: hidden;

      .product-image {
        height: 10rem;
        overflow: hidden;
        border-radius: var(--border-radius);
    
        .image {
          height: 100%;
          width: 100%;
          border-radius: var(--border-radius);
          object-fit: cover;
        }
      }

      .add-button {
        opacity: 0;
        visibility: none;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        transition: var(--anchor-transition);
        color: white;
        background: black;

        &:hover {
          background: rgb(133,138,166);
          background: linear-gradient(90deg, rgba(133,138,166,1) 0%, rgba(142,149,187,1) 43%, rgba(185,185,185,1) 100%);
          color: black;
        }
      }
    }


    .product-info {
      display: flex;
      flex-direction: column;

      .price-title,
      .product-name {
        margin: 5px 0;
      }

      .product-name {
        font-size: 1.1rem;
        font-weight: 500;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }

      .price-title {
        font-size: 1.3rem;
        font-weight: 600;
      }

      .made-off {
        font-size: 0.7rem;
        font-weight: 300;
      }
    }
  }

  &:hover {
    .product-cart .cart-image-wrapper .add-button {
      opacity: 1;
      visibility: visible;
      z-index: 5;
    }
  }
}
</style>