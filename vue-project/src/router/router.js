import { createRouter, createWebHistory } from 'vue-router'
import Catalog from '@/components/Catalog.vue'
import Briefcase from "@/components/Briefcase.vue";

const routes = [
    {
        path: '/catalog',
        name: 'Catalog',
        component: Catalog
    },
    {
        path: '/briefcase',
        name: 'Briefcase',
        component: Briefcase
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
