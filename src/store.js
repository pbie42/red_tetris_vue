import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './store/state'
import { mutations } from './store/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	mutations,
	actions: {
		addUser({ commit }, username) {
			commit('addUser', username)
		},
		setUsername({ commit }, username) {
			commit('setUsername', username)
		}
	},
	getters: {
		users(state) {
			return state.users
		}
	}
})
