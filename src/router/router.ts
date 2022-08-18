import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TaskMain from '../view/TaskMain.vue'
import ProjectMain from '../view/Projects.vue'
import ProjectList from '../view/Projects/ProjectList.vue'
import ProjectForm from '../view/Projects/ProjectForm.vue'

const routers: RouteRecordRaw[]= [
    {
        path: '/',
        name: 'Tasks',
        component: TaskMain
    },
    {
        path: '/projects',
        component: ProjectMain,
        children: [
            {
                path: '',
                name: 'Projects',
                component: ProjectList
            },    
            {
                path: 'add',
                name: 'New Project',
                component: ProjectForm
            },
            {
                path: ':id',
                name: 'Edit project',
                component: ProjectForm,
                props: true,
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})

export default router;