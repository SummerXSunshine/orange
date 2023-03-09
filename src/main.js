import { createApp } from 'vue'
import App from './App.vue'
import './components/comStyle.css'
import router from '@/router/router.js'

createApp(App).use(router).mount('#app')
