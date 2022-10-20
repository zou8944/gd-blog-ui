import { createApp } from 'vue'
import App from './App.vue'

import '../scss/custom-bootstrap.css'
import '../src/assets/github.css'
import "highlight.js/styles/tomorrow-night-blue.css";
import '../src/assets/main.css'
import router from "@/router"

const app = createApp(App)

app.use(router)
app.mount('#app')
