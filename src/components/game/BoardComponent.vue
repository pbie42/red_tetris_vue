<template>
	<div :id="id" ref="grid" />
</template>

<script>
import {
	positionsO,
	positionsL,
	positionsJ,
	positionsZ,
	positionsT,
	positionsS,
	positionsI
} from '../../constants/pieces'

export default {
	props: ['id'],
	data() {
		return {
			board: [],
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
			return this.selectPosition(positionsI)
		},
		initializeJ() {
			return this.selectPosition(positionsJ)
		},
		initializeL() {
			return this.selectPosition(positionsL)
		},
		initializeO() {
			return this.selectPosition(positionsO)
		},
		initializeS() {
			return this.selectPosition(positionsS)
		},
		initializeT() {
			return this.selectPosition(positionsT)
		},
		initializeZ() {
			return this.selectPosition(positionsZ)
		}
	},
	methods: {
		newBoard() {
			return [
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
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			]
		},
		buildBoard() {
			this.$refs.grid.innerHTML = ''
			for (let i = 0; i < this.board.length; i++) {
				if (i < 4) continue
				if (i > 23) continue
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
			return positions[Math.floor(Math.random() * positions.length)].shape
		},
		nextPiece() {
			this.piece.piece = this.piece.pieces[this.piece.current]
			this.piece.current++
			this.piece.location = { x: 0, y: 0 }
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
			const prevBoard = this.board
			const shape = this.piece.shape
			let board = this.newBoard()
			console.log(`board before`, JSON.stringify(board))
			let location = this.piece.location
			console.log(`location`, JSON.stringify(location))
			let boardY = location.y
			if (boardY + 4 > 26) this.board = prevBoard
			else {
				let y = 0
				while (shape[y] && board[y]) {
					let boardX = location.x
					let x = 0
					while (x < 4) {
						if (shape[y][x] === this.piece.piece) {
							board[boardY][boardX] = this.piece.piece
						}
						x++
						boardX++
					}
					y++
					boardY++
				}
				console.log(`board after`, JSON.stringify(board))
				this.board = board
			}
			this.buildBoard()
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
		},
		calcPieceEnd() {
			let end = 0
			let x = 0
			while (x < 4) {
				let y = 0
				while (y < 4) {
					console.log(`x`, x)
					if (this.piece.shape[y][x] === this.piece.piece) end = x
					y++
				}
				x++
			}
			return 4 - end
		},
		calcPieceStart() {
			let x = 0
			while (x < 4) {
				let y = 0
				while (y < 4) {
					console.log(`x`, x)
					if (this.piece.shape[y][x] === this.piece.piece) return x
					y++
				}
				x++
			}
		},
		calcPieceBottom() {
			let bottom = 0
			let y = 0
			while (y < 4) {
				let x = 0
				while (x < 4) {
					console.log(`x`, x)
					if (this.piece.shape[y][x] === this.piece.piece) bottom = y
					x++
				}
				y++
			}
			return 3 - bottom
		},
		movePieceDown() {
			let bottom = this.calcPieceBottom()
			console.log(`bottom`, bottom)
			console.log(
				`this.piece.location before`,
				JSON.stringify(this.piece.location)
			)
			const shape = this.piece.shape
			let board = this.board
			if (this.piece.location.y - bottom <= 19) {
				this.piece.location = {
					...this.piece.location,
					y: (this.piece.location.y += 1)
				}
			} else this.nextPiece()
			console.log(
				`this.piece.location after`,
				JSON.stringify(this.piece.location)
			)
			this.placePiece()
		},
		movePieceRight() {
			let plus = this.calcPieceEnd()
			console.log(`plus`, plus)
			const shape = this.piece.shape
			let board = this.board
			if (this.piece.location.x + 6 - plus <= 10) {
				this.piece.location = {
					...this.piece.location,
					x: (this.piece.location.x += 1)
				}
			}
			console.log(`this.piece.location`, JSON.stringify(this.piece.location))
			this.placePiece()
		},
		movePieceLeft() {
			let minus = this.calcPieceStart()
			const shape = this.piece.shape
			let board = this.board
			if (this.piece.location.x - 1 + minus >= 0) {
				this.piece.location = {
					...this.piece.location,
					x: (this.piece.location.x -= 1)
				}
			}
			console.log(`this.piece.location`, JSON.stringify(this.piece.location))
			this.placePiece()
		},
		handleKeydown(event) {
			console.log(`KeyDown`)
			if (event.keyCode === 37) this.movePieceLeft()
			if (event.keyCode === 38) console.log(`up`)
			if (event.keyCode === 39) this.movePieceRight()
			if (event.keyCode === 40) this.movePieceDown()
		}
	},
	mounted() {
		this.pieceOrder()
		this.buildBoard()
		window.addEventListener('keydown', e => this.handleKeydown(e))
	},
	beforeDestroy() {
		window.removeEventListener('keydown', e => this.handleKeydown(e))
	}
}
</script>

<style scoped>
</style>
