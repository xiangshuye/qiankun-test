
import { createApp } from 'vue'
import router from './router/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')


import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'app1', // app name registered
    entry: {
      scripts: ['//localhost:9821/app.js']
    },
    container: '#app1',
    activeRule: '/app1',
  },
  {
    name: 'app2',
    entry: {
      scripts: ['//localhost:9822/app.js']
    },
    container: '#app2',
    activeRule: '/app2',
  },
]);

start();

