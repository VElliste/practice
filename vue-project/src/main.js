import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import { createRouter, createWebHashHistory } from 'vue-router'
import Catalog from './components/Catalog.vue'
import Briefcase from "@/components/Briefcase.vue";
import History from "@/components/historyOfOperations.vue";

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
    },
    {
        path: '/history',
        name: 'History',
        component: History
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App);
app.provide('store', store);
app.use(store);
app.use(router)
app.mount('#app');
