import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Catalog from './components/Catalog.vue'
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
    history: createWebHashHistory(),
    routes
})

createApp(App)
    .use(router)
    .mount('#app')
