<template>
  <header class="main-header-wrapper">
    <div class="header-content">
      <nav>
        <p>Home</p>
        <p>Products</p>
        <p>Account</p>
        <p>Contact</p>
      </nav>
      <div class="cart-wrapper" @click="showCart">
        <img src="../assets/images/icons/shopping_cart.svg" alt="shopping_cart" class="cart-icon">
        <span class="cart-counter">{{ cartStore.items.length }}</span>
      </div>
    </div>
  </header>

  <Cart v-if="openCart"/>

  <main class="content-wrapper">
    <ProductCart 
      v-for="item in productStore.products" 
      :product="item" 
      :key="item.name"
    />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import ProductCart from '@/components/ProductCart.vue';
import Cart from '@/components/partial/Cart.vue';
import { useProductsStore } from '@/stores/ProductsStore';
import { useCartStore } from '@/stores/CartStore.js';

const productStore = useProductsStore();
const cartStore = useCartStore();

productStore.fill()
defineProps({
  msg: String,
})

const openCart = ref(false);
function showCart() {
  return openCart.value = !openCart.value;
}
function defineEmits(){
  return openCart.value = false;
}

</script>

<style lang="scss" scoped>
.main-header-wrapper {
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  height: 80px;
  width: 100%;
  background-color: rgb(101, 103, 117);
  z-index: 10;
  display: flex;

  .header-content {
    margin: 0 auto;
    max-width: 900px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    nav {
      display: flex;
      gap: 1rem;
    }

    p {
      margin: 0;
      line-height: 30px;
      border-radius: 8px;
      border-bottom: 3px solid transparent;
    }
    p:hover {
      border-bottom: 3px solid black;
      transition: 0.5s ease-out;
    }
    p:active {
      border-bottom: 3px solid rgb(246, 246, 246);
    }

    .cart-icon {
      width: 2rem;
      height: 2rem;
    }

    .cart-wrapper {
      position: relative;
      .cart-counter {
        position: absolute;
        top: -10px;
        right: -10px;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color: rgb(192, 133, 133);
      }

    }
  }
}
.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
</style>
