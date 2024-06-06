import {createMemoryHistory, createRouter} from 'vue-router'

import HomeView from '@'
import AboutView from './AboutView.vue'

const routes = [
    {path: '/', component: HomeView},
    {path: '/about', component: AboutView},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
