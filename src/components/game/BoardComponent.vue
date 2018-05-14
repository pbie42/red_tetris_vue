<template>
	<div :id="id" ref="grid" />
</template>

<script>
export default {
	props: ['id'],
	data() {
		return {
			board: [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			],
			piece: {
				location: { x: 0, y: 0 },
				shape: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
				piece: '',
				current: 0,
				pieces: []
			}
		}
	},
	computed: {
		initializeI() {
			const positions = [
				[['i', 0, 0, 0], ['i', 0, 0, 0], ['i', 0, 0, 0], ['i', 0, 0, 0]],
				[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], ['i', 'i', 'i', 'i']]
			]
			return positions[Math.floor(Math.random() * positions.length)]
		},
		initializeJ() {
			const positions = [
				[[0, 0, 0, 0], [0, 'j', 0, 0], [0, 'j', 0, 0], ['j', 'j', 0, 0]],
				[[0, 0, 0, 0], ['j', 'j', 0, 0], ['j', 0, 0, 0], ['j', 0, 0, 0]],
				[[0, 0, 0, 0], [0, 0, 0, 0], ['j', 0, 0, 0], ['j', 'j', 'j', 0]],
				[[0, 0, 0, 0], [0, 0, 0, 0], ['j', 'j', 'j', 0], [0, 'j', 0, 0]]
			]
			return this.selectPosition(positions)
		},
		initializeL() {
			const positions = [
				[[0, 0, 0, 0], ['l', 0, 0, 0], ['l', 0, 0, 0], ['l', 'l', 0, 0]],
				[[0, 0, 0, 0], [0, 0, 0, 0], ['l', 'l', 'l', 0], ['l', 0, 0, 0]],
				[[0, 0, 0, 0], ['l', 'l', 0, 0], [0, 'l', 0, 0], [0, 'l', 0, 0]],
				[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 'l', 0], ['l', 'l', 'l', 0]]
			]
			return this.selectPosition(positions)
		},
		initializeO() {
			return [[0, 0, 0, 0], [0, 0, 0, 0], ['o', 'o', 0, 0], ['o', 'o', 0, 0]]
		},
		initializeS() {
			const positions = [
				[[0, 0, 0, 0], [0, 0, 0, 0], [0, 's', 's', 0], ['s', 's', 0, 0]],
				[[0, 0, 0, 0], ['s', 0, 0, 0], ['s', 's', 0, 0], [0, 's', 0, 0]]
			]
			return this.selectPosition(positions)
		},
		initializeT() {
			const positions = [
				[[0, 0, 0, 0], [0, 0, 0, 0], [0, 't', 0, 0], ['t', 't', 't', 0]],
				[[0, 0, 0, 0], ['t', 0, 0, 0], ['t', 't', 0, 0], ['t', 0, 0, 0]],
				[[0, 0, 0, 0], [0, 't', 0, 0], ['t', 't', 0, 0], [0, 't', 0, 0]],
				[[0, 0, 0, 0], [0, 0, 0, 0], ['t', 't', 't', 0], [0, 't', 0, 0]]
			]
			return this.selectPosition(positions)
		},
		initializeZ() {
			const positions = [
				[[0, 0, 0, 0], [0, 0, 0, 0], ['z', 'z', 0, 0], [0, 'z', 'z', 0]],
				[[0, 0, 0, 0], [0, 'z', 0, 0], ['z', 'z', 0, 0], ['z', 0, 0, 0]]
			]
			return this.selectPosition(positions)
		}
	},
	methods: {
		buildBoard() {
			for (let i = 0; i < this.board.length; i++) {
				if (i < 4) continue
				const row = document.createElement('div')
				row.setAttribute('id', `row-${i - 4}`)
				for (let x = 0; x < this.board[i].length; x++) {
					if (x > 9) continue
					const square = document.createElement('div')
					square.setAttribute('id', `col-${x}`)
					this.setColorClass(i, x, square)
					row.appendChild(square)
				}
				this.$refs.grid.appendChild(row)
			}
		},
		selectPosition(positions) {
			return positions[Math.floor(Math.random() * positions.length)]
		},
		nextPiece() {
			console.log(`this.piece.pieces`, this.piece.pieces)
			console.log(`this.piece.current`, this.piece.current)
			this.piece.piece = this.piece.pieces[this.piece.current]
			this.piece.current++
			if (this.piece.piece === 'i') this.piece.shape = this.initializeI
			if (this.piece.piece === 'j') this.piece.shape = this.initializeJ
			if (this.piece.piece === 'l') this.piece.shape = this.initializeL
			if (this.piece.piece === 'o') this.piece.shape = this.initializeO
			if (this.piece.piece === 's') this.piece.shape = this.initializeS
			if (this.piece.piece === 't') this.piece.shape = this.initializeT
			if (this.piece.piece === 'z') this.piece.shape = this.initializeZ
			this.placePiece()
		},
		placePiece() {
			const shape = this.piece.shape
			let board = this.board
			let y = -1
			while (shape[++y]) {
				let x = -1
				while (++x < 4)
					if (shape[y][x] === this.piece.piece)
						board[y][x] = this.piece.piece
			}
			this.board = board
		},
		randomPiece() {
			const pieces = ['i', 'j', 'l', 'o', 's', 't', 'z']
			return pieces[Math.floor(Math.random() * pieces.length)]
		},
		pieceOrder() {
			const pieces = []
			for (let i = 0; i < 100; i++) pieces.push(this.randomPiece())
			this.piece.pieces = pieces
			this.nextPiece()
		},
		setColorClass(i, x, square) {
			if (this.board[i][x] === 'i') square.setAttribute('class', 'cyan')
			if (this.board[i][x] === 'j') square.setAttribute('class', 'blue')
			if (this.board[i][x] === 'l') square.setAttribute('class', 'orange')
			if (this.board[i][x] === 'o') square.setAttribute('class', 'yellow')
			if (this.board[i][x] === 's') square.setAttribute('class', 'green')
			if (this.board[i][x] === 't') square.setAttribute('class', 'purple')
			if (this.board[i][x] === 'z') square.setAttribute('class', 'red')
		}
	},
	mounted() {
		console.log(`happening`)
		this.pieceOrder()
		this.buildBoard()
		console.log(`this.pieces`, this.piece)
	}
}
</script>

<style scoped>

</style>
