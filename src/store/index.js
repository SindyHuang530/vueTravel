import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  getters: {
    doubleCity(state) {
      return state.city + ' ' + state.city
    }
  }
})
// 存放資料

//同步的（寫入或刪除資料）
// actions: {
//   changeCity(ctx, city) {
//     ctx.commit('changeCity', city)
//   }
// }
//非同步的,可以同時做很多事（幫助action記住資料）
