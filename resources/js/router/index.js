import {
    createRouter,
    createWebHistory
} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TestView from '../views/TestView.vue';
import authMiddleware from './middleware';
const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/test',
        name: 'test',
        component: TestView
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})


router.beforeEach(authMiddleware);

export default router
