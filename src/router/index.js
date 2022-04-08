import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Realisation from '../views/Realisation.vue';
import Veilles from '../views/Veilles.vue';
import Stage from '../views/Stage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/realisation',
    name: 'Realisation',
    component: Realisation,
  },
  {
    path: '/veilles',
    name: 'Veilles',
    component: Veilles,
  },
  {
    path: '/stage',
    name: 'Stage',
    component: Stage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(savedPosition) {
    return savedPosition || { top: 0 };
  },
});

router.afterEach(() => {
  // if (to.params.name) {
  //   document.title = 'Boudra Tristan';
  // } else if (to.meta && to.meta.title) {
  //   document.title = to.meta.title;
  // } else {
  //   document.title = 'Boudra Tristan';
  // }
  document.title = 'Boudra Tristan';
});

export default router;
