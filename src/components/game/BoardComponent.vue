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

import { calcPieceEnd, calcPieceStart, calcPieceBottom } from '../../utils/game'

export default {
	props: ['id'],
	data() {
		return {
			board: [],
			savedBoard: [],
			piece: {
				location: { x: 0, y: 0 },
				shape: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
				piece: '',
				current: 0,
				pieces: [],
				set: false
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
		placePieces(board) {
			let y = -1
			while (board[++y]) {
				let x = -1
				while (++x < 11)
					if (this.savedBoard[y][x] !== 0)
						board[y][x] = this.savedBoard[y][x]
			}
		},
		placePiece() {
			const prevBoard = this.board
			const shape = this.piece.shape
			let board = this.newBoard()
			let location = this.piece.location
			let boardY = location.y
			if (this.savedBoard.length > 0) this.placePieces(board)
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
		verifyPlacement(location) {
			if (this.savedBoard.length === 0) return true
			let y = 0
			let boardY = location.y
			while (this.piece.shape[y] && this.savedBoard[y]) {
				let x = 0
				let boardX = location.x
				while (x < 4) {
					if (
						this.piece.shape[y][x] === this.piece.piece &&
						this.savedBoard[boardY][boardX] !== 0
					)
						return false
					x++
					boardX++
				}
				y++
				boardY++
			}
			return true
		},
		movePieceDown() {
			let offset = calcPieceBottom(this.piece.shape, this.piece.piece)
			let location = this.piece.location
			const shape = this.piece.shape
			let board = this.board
			if (location.y - offset <= 19 && !this.piece.set) {
				if (this.verifyPlacement({ x: location.x, y: location.y + 1 }))
					location = { ...location, y: (location.y += 1) }
				else this.piece.set = true
			} else {
				this.piece.set = false
				this.savedBoard = this.board.slice(0)
				this.nextPiece()
			}
			this.placePiece()
		},
		movePieceRight() {
			let offset = calcPieceEnd(this.piece.shape, this.piece.piece)
			const shape = this.piece.shape
			let location = this.piece.location
			let board = this.board
			if (location.x + 6 - offset <= 10) {
				if (this.verifyPlacement({ x: location.x + 1, y: location.y }))
					location = { ...location, x: (location.x += 1) }
			}
			this.placePiece()
		},
		movePieceLeft() {
			let offset = calcPieceStart(this.piece.shape, this.piece.piece)
			const shape = this.piece.shape
			let location = this.piece.location
			let board = this.board
			if (location.x - 1 + offset >= 0) {
				if (this.verifyPlacement({ x: location.x - 1, y: location.y }))
					location = { ...location, x: (location.x -= 1) }
			}
			this.placePiece()
		},
		handleKeydown(event) {
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
