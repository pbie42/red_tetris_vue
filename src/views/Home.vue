<template>
	<div class="container-home">
		<div class="home">
			<div>
				<div>
					<h1>RED_TETRIS</h1>
				</div>
			</div>
			<div>
				<div>
					<home-form />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/home/Form.vue'

export default {
	name: 'home',
	components: {
		'home-form': Form
	}
}
</script>
