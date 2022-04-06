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
});

export default router;
