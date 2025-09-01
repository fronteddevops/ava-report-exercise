import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/execution/Home.vue';

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: Home,
    meta: { title: 'AVA Weekly Report' }
  },
  { 
    path: '/stage-2', 
    name: 'stage-two',
    component: () => import('./views/execution/StageTwo.vue'), 
    meta: { title: 'Stage 2' },
    alias: ['/stagetwo']
  },
  {
    path: '/stage-2/step-4',
    name: 'stage-two-step-four',
    component: () => import('./views/execution/stage2/StepFourPage.vue'),
    meta: { title: 'Stage 2 - Step 4' }
  },

  { path: '/stageone', redirect: '/stage-2' },
 
];

const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach((to, from, next) => { if (to.meta.title) document.title = to.meta.title; next(); });

export default router;