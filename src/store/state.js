export const state = {
	user: {
		username: ''
	},
	users: [],
	rooms: [],
	games: {
		roomName: '',
		piece: '',
		members: [],
		boards: [],
		countDown: false
	},
	errors: {
		error: false,
		errorName: false,
		errorRoom: false,
		errorTooManyMembers: false
	},
	connection: {
		connected: false,
		users: false,
		rooms: false
	},
	messages: []
}
