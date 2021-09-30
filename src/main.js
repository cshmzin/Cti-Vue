import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = '/douban'


const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(VueAxios,axios)

app.mount('#app')
