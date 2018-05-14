let nextUserId = 0

export const mutations = {
	addUser(state, username) {
		if (username)
			state.users = state.users.concat({ username, id: nextUserId++ })
	},
	setUsername(state, username) {
		if (username) state.user.username = username
	}
}
