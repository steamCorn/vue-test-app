import { createRouter, createWebHistory } from 'vue-router';
import homeRoutes from '@/router/homeRoutes.js';
import productsRouter from '@/router/productsRouter.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [...homeRoutes, ...productsRouter],
});

export default router;