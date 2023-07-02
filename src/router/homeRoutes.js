const Layout = () => import('@/views/Layout.vue');
const HomePage = () => import('@/views/HomePage.vue');

const BASE_ROUTE = {
  path: '/',
  redirect: 'home',
};

const HOME_ROUTE = {
  path: 'home',
  name: 'HomePage',
  component: HomePage,
  meta: {
    pageTitle: "Home",
  },
  children: [],
};

const MAIN_LAYOUT_ROUTER = {
  path: '/layout',
  name: 'Layout',
  component: Layout,
  meta: {
    pageTitle: "Home",
  },
  children: [
    HOME_ROUTE
  ],
};

const homeRoutes = [
  BASE_ROUTE,
  MAIN_LAYOUT_ROUTER,
];

export default homeRoutes;
export {
  HOME_ROUTE,
}