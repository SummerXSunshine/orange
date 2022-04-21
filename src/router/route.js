import { createRouter,createWebHashHistory} from "vue-router";

const HelloWorld = () => import("../components/HelloWorld")
const tool = () => import("../pages/tool")

const routes = [
  {
    path: "/",
    component: HelloWorld,
   },
   {
    path: "/tool",
    component: tool,
   },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})
export default router;