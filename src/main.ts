import { createApp } from 'vue'
import { createPinia } from 'pinia'
import element from './global/index'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(element)
app.use(createPinia())
app.use(router)

app.mount('#app')
