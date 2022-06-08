import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

if (!window.NL_PORT) {
    const config = await import('./auth_info.json')
    window.NL_PORT = config.port
    window.NL_TOKEN = config.accessToken
}

Neutralino.init()