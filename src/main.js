import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import "highlight.js/styles/dark.css";
import router from "@/router";

const app = createApp(App)

app.use(router)
app.mount('#app')
