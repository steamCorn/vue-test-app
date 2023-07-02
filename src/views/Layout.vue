<template>
  <div>
    <h1>Layout</h1>
    <SideNavBar />
    <main>
     <RouterView v-slot="{Component}">
      
     </RouterView> 
    </main>
  </div>
</template>

<script setup>
import SideNavBar from '../components/partials/layout/SideNavBar.vue';
</script>

<style scoped lang="scss">
</style>