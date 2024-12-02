import { createApp } from 'vue'
import './stylesheet.css'

import router from './router'
import App from './App.vue'
import RecipeCard from './components/RecipeCard.vue'

const app = createApp(App)

createApp(App).use(router).mount('#app')
