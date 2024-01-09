import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import { RouterOptions, createRouter, createWebHistory } from 'vue-router'

const routes: RouterOptions['routes'] = [
  { path: '/', component: Home, 'name': 'Home' },
  { path: '/about', component: About, 'name': 'About' },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
const app = createApp(App)

app.use(router)

app.mount('#app')
