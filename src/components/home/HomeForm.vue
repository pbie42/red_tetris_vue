<template>
	<form :class="error ? 'home-form-error' : 'nothing'">
		<div>
			<input
				ref="p"
				autocomplete="off"
				type="text" name="username"
				:placeholder="placeholder"
				v-model="username"
				@keydown.enter.prevent="submitUsername"
				@change="noError"
			/>
			<div>
				<div @click="submitUsername">
					Start →
				</div>
			</div>
		</div>
	</form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'Form',
	data() {
		return {
			interval: null,
			placeholder: '',
			username: '',
			error: false
		}
	},
	computed: {
		...mapGetters(['users']),
		verifyUsername() {
			const index = this.users.findIndex(
				user => this.username === user.username
			)
			if (index >= 0) return false
			return true
		}
	},
	methods: {
		...mapActions(['setUsername', 'addUser']),
		setPlaceholder() {
			if (!this.placeholder) this.placeholder = 'Choose a username to begin'
			else this.placeholder = ''
		},
		goToMenu() {
			if (!this.username) return
			this.setUsername(this.username)
			this.$router.push({
				name: 'menu'
			})
		},
		noError() {
			this.error = false
		},
		setSubmitError() {
			this.error = true
			this.username = ''
		},
		submitUsername() {
			if (this.username && this.verifyUsername) {
				this.setUsername(this.username)
				this.addUser(this.username)
				this.$emit('pageChange')
				const delayRouteChange = () => {
					console.log(`this.username`, this.username)
					this.$router.push('/test_room[' + this.username + ']')
					this.username = ''
				}
				setTimeout(delayRouteChange, 800)
			} else this.setSubmitError()
		}
	},
	mounted() {
		this.interval = setInterval(this.setPlaceholder, 750)
		const focus = () => {
			this.$refs.p.focus()
		}
		setTimeout(focus, 2000)
	},
	beforeDestroy() {
		clearInterval(this.interval)
	}
}
</script>

<style scoped>

</style>
