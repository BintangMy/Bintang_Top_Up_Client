import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DetailPage from '../views/DetailPage.vue'
import AllGameVue from '../views/AllGame.vue'
import LoginVue from '../views/Login.vue'
import RegisterVue from '../views/Register.vue'
const routes = [
  {path: '/', component: Home, name: "Home"},
  { path: '/login', component: LoginVue ,name: 'Login',
  beforeEnter:(to, from, next) => {
    if(!localStorage.getItem('access_token')){
      next()
    }else{
      next('/')
    }
  }
},
  { path: '/register', component: RegisterVue ,name: 'Register',
    beforeEnter:(to, from, next) => {
      if(!localStorage.getItem('access_token')){
        next()
      }else{
        next('/')
      }
    }
  },
  {path: '/product', component: AllGameVue ,name: 'AllGame'},
  {path: '/detail/:gameId', component: DetailPage ,name: 'GameDetail'},
]


let router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
