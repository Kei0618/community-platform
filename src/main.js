import './assets/main.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//測試API
import {getCategory} from '@/apis/testAPI'


getCategory().then(res=>{console.log(res)})
const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
