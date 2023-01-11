import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DetailPage from '../views/DetailPage.vue'
import AllGameVue from '../views/AllGame.vue'
const routes = [
  {path: '/', component: Home, name: "Home"},
  {path: '/product', component: AllGameVue ,name: 'AllGame'},
  {path: '/detail/:gameId', component: DetailPage ,name: 'GameDetail'},
]


let router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
