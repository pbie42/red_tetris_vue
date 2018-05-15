<template>
	<div class="container-game" >
		<i class="fas fa-spinner fa-pulse" />
		<!-- <h1>{C.props.connection ? 'CONNECTED' : 'NOT CONNECTED'}</h1> -->
		<div class="container-boards">
			<div class="players-others">
				<!-- <BoardComponent :id="'others-grid'" />
				<BoardComponent :id="'others-grid'" /> -->
			</div>
			<div class="player-main">
				<BoardComponent :id="'player-grid'" />
			</div>
			<div class="players-others">
				<!-- <BoardComponent :id="'others-grid'" />
				<BoardComponent :id="'others-grid'" /> -->
			</div>
		</div>
	</div>
</template>

<script>
import BoardComponent from '../components/game/BoardComponent'

export default {
	components: {
		BoardComponent
	}
}
</script>

<style scoped>
</style>
