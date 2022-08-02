import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TaskMain from '../view/TaskMain.vue';
import ProjectMain from '../view/ProjectMain.vue';

const routers: RouteRecordRaw[]= [
    {
        path: '/',
        name: 'Tasks',
        component: TaskMain
    },
    {
        path: '/projects',
        name: 'Projects',
        component: ProjectMain
    },    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})

export default router;