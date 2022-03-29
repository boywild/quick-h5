import { createStore, createLogger } from 'vuex'

// 各个模块
import editor from './modules/editor'
import user from './modules/user'

import { ElMessage } from 'element-plus'
const debug = process.env.NODE_ENV !== 'production'
/**
 * 全局状态管理
 */
const state = {}
const actions = {
  /**
   * 显示提示 msg.type 类型  msg.data 消息内容
   * @param commit
   * @param msg
   */
  showMassage(store, msg) {
    console.log(msg)
    ElMessage({
      type: msg.type,
      message: msg.message || msg.data
    })
  }
}
const mutations = {}
const getters = {}

export default createStore({
  state,
  getters,
  mutations,
  actions,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  modules: {
    editor,
    user
  }
})
