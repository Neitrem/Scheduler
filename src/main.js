import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI'
import store from '@/store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


const app = createApp(App)

components.forEach(element => {
    app.component(element.name, element)
});

app.use(store)

app.mount('#app')




import 'bootstrap/dist/js/bootstrap.js'

    
