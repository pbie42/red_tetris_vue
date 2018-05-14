<template>
	<div class='container-home'>
		<div class="home">
			<div :class="change ? 'moveOutDivDown': 'moveInDivTop'">
				<img class="test" src="../assets/tetris_logo.png" alt="" />
			</div>
			<div>
				<div :class="change ? 'hideDiv' : 'showDiv'">
					<HomeForm @pageChange="pageChange" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import HomeForm from '@/components/home/HomeForm.vue'
import logo from '../assets/tetris_logo.png'

export default {
	name: 'home',
	components: {
		HomeForm
	},
	data() {
		return {
			logo,
			change: false
		}
	},
	methods: {
		pageChange() {
			this.change = true
		}
	}
}
</script>
