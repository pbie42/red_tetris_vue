import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const mutations = {
	setUsername(state, username) {
		state.user.username = username
	}
}

export default new Vuex.Store({
	state: {
		user: {
			username: ''
		}
	},
	mutations,
	actions: {
		setUsername({ commit }, username) {
			commit('setUsername', username)
		}
	}
})
