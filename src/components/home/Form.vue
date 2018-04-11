<template>
	<form action="">
		<div>
			<input @keyup.enter.prevent="goToMenu" type="text" name="username" :placeholder="placeholder" v-model="username" />
			<div>
				<div @click="goToMenu">
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
			username: ''
		}
	},
	methods: {
		...mapActions(['setUsername']),
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
		}
	},
	mounted() {
		this.interval = setInterval(this.setPlaceholder, 750)
	},
	beforeDestroy() {
		clearInterval(this.interval)
	}
}
</script>

<style scoped>

</style>
