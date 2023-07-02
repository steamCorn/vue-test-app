const Layout = () => import('@/views/Layout.vue');
const ProductsOverviewPage = () => import('@/views/products/ProductsOverviewPage.vue');
const ProductsDetailPage = () => import('@/views/products/ProductsDetailPage.vue');

// const PRODUCT_DETAIL_PAGE = {
//   path: 'products-detail/:productId',
//   name: 'ProductsDetailPage',
//   component: ProductsDetailPage,
//   meta: {
//     pageTitle: "Product Detail",
//   },
//   // children: [],
// };

const PRODUCT_PAGE = {
  path: '/products',
  name: 'ProductsOverviewPage',
  component: ProductsOverviewPage,
  meta: {
    pageTitle: "Store",
  },
  children: [
    // PRODUCT_DETAIL_PAGE,
  ],
};

const MAIN_LAYOUT_ROUTER = {
  path: '/layout',
  name: 'Layout',
  component: Layout,
  meta: {
    pageTitle: "Home",
  },
  children: [
    PRODUCT_PAGE
  ],
};


const productsRouter = [
  MAIN_LAYOUT_ROUTER,
  PRODUCT_PAGE,
];

export default productsRouter;
export {
  PRODUCT_PAGE,
  // PRODUCT_DETAIL_PAGE,
}