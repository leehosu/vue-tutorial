import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import NewsView from '@/components/NewsView'


Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {
            path : '/',
            component : Main
        },
        {
            path : '/news',
            component : NewsView
        }
    ]
})