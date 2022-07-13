import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

;(async () => {
if (!window.NL_PORT) {
    const config = await import('./auth_info.json') // Make sure you successfully created a symlink for the auth_info (step 6 in README)
    window.NL_PORT = config.port
    window.NL_TOKEN = config.accessToken
}

Neutralino.init()
})()