import { createRouter, createWebHashHistory } from "vue-router"
import HelloWorld from '@/components/views/HelloWorld.vue'
import tools from '@/components/views/tools.vue'
import flow from '@/components/views/flow.vue'

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
    },
    {
        path: '/tools',
        component: tools,
    },
    {
        path: '/flow',
        component: flow,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default  router
