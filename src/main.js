import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import httpServer from '@/service/httpServer' // axios拦截器配置
import '@/permission' // 权限控制
import * as mUtils from '@/common/js/mUtils'
import config from '@/config'
import filters from './filters/index'
import AES from '@/common/js/secret'
import * as API from '@/api/index'

import ElementPlus from 'element-plus'
// import "element-plus/dist/index.css";
import '@/common/styles/element-variables.scss'
import '@/common/styles/index.scss' // 自定义 css
import 'animate.css'

const app = createApp(App)
app.use(router)

app.use(ElementPlus)

/**
 * 引入公共方法mUtils
 */
app.config.globalProperties.$mUtils = mUtils
app.config.globalProperties.AES = AES
app.config.globalProperties.$axios = httpServer
app.config.globalProperties.$api = API
app.config.globalProperties.$API = API

/**
 * 公共配置信息
 */
app.config.globalProperties.$config = config
app.config.globalProperties.$filters = filters

// 登录后跳转方法
app.config.globalProperties.goBeforeLoginUrl = () => {
  let url = mUtils.Cookie.get('beforeLoginUrl')
  url = decodeURIComponent(url)
  if (!url || url.indexOf('/author') !== -1) {
    router.push('/')
  } else {
    router.push(url)
    mUtils.Cookie.set(
      'beforeLoginUrl',
      '',
      1 / 24 / 60,
      window.location.host,
      window.location.pathname.substring(0, window.location.pathname.length - 1)
    )
  }
}

// eslint-disable-next-line
String.prototype.replaceAll = function (s1, s2) {
  return this.replace(new RegExp(s1, 'gm'), s2)
}

store.commit('UPDATE_USER_FROM_LOCAL')

app.mount('#app')
