import {createApp} from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import '@unocss/reset/normalize.css'
import '@unocss/reset/sanitize/sanitize.css'
import '@unocss/reset/sanitize/assets.css'
import '@unocss/reset/tailwind.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
