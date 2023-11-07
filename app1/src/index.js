import './public-path'
import { createApp } from 'vue'
import routes from './router/index'
import {createRouter, createWebHistory} from 'vue-router'

import App from './App.vue'

let app
let router
function render(props = {}) {
  const { container } = props;
  router = createRouter({
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/app1/' : '/'),
    routes
  })

  app = createApp(App)
  app.use(router)
  app.mount(container ? container : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('app1 bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  app.unmount()
  router = null
  app = null
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
}