import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   modules: {
//     timeoutStore
//   },
// })

// export default store
