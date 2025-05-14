import { createApp } from 'vue';

import { registerMicroApps, start } from 'qiankun';
import router from './router/index';

import App from './App.vue';

registerMicroApps(
  [
    {
      name: 'app1', // app name registered
      entry: {
        scripts: ['//localhost:9821/app.js'],
      },
      container: '#container',
      activeRule: '/app1',
    },
    {
      name: 'app2',
      entry: {
        scripts: ['//localhost:9822/app.js'],
      },
      container: '#container',
      activeRule: '/app2',
    },
  ],
  {
    beforeLoad: (app) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('before load app.name====', app.name);
          resolve();
        }, 1000);
      });
    },
    beforeMount: (app) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('before mount app.name====', app.name);
          resolve();
        }, 1000);
      });
    },
    afterMount: (app) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('after mount app.name====', app.name);
          resolve();
        }, 1000);
      });
    },
  }
);

start();
const app = createApp(App);

app.use(router);
app.mount('#app');
