export const mutations = {
	setUsername(state, username) {
		if (username) state.user.username = username
	}
}
