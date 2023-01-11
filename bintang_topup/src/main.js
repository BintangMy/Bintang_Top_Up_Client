import { createApp,markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

// import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()
app.use(vue3GoogleLogin, {
    clientId: '1072740161473-efgla0g5r76sh89tnrhec7dhr0h67vnm.apps.googleusercontent.com'
})

pinia.use(({store}) => {
    store.router = markRaw(router)
})

app.use(pinia)
app.use(router)

createApp(App).use(router).mount('#app')
