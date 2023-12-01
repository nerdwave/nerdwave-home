import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
