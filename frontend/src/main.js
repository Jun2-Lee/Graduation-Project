import {createApp} from 'vue'
import App from './App.vue'
import {router} from './router/index.js'
import store from './store/auth.js'
import './registerServiceWorker.js'

const app = createApp(App)

app.use(router)
app.use(store)

const headers = '{"Content-type":"application/json; charset=UTF-8", "Authorization": "Bearer '
app.provide('headers', headers)
// 43.202.141.142
app.provide('requestURL', "http://43.202.141.142:8080/")

app.mount('#app')