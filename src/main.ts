import { createApp } from 'vue'
import './global.css'
import App from './App.vue'

document.documentElement.dataset.theme = 'light'
createApp(App).mount('#app')
