<template>
	<div :id="id" ref="grid" />
</template>

<script>
import {
	getI,
	getJ,
	getL,
	getO,
	getS,
	getT,
	getZ,
	initializeI,
	initializeJ,
	initializeL,
	initializeO,
	initializeS,
	initializeT,
	initializeZ,
	positionsI,
	positionsJ,
	positionsL,
	positionsO,
	positionsS,
	positionsT,
	positionsZ,
	randomPiece
} from '../../constants/pieces'

import {
	calcPieceEnd,
	calcPieceStart,
	calcPieceBottom,
	newBoard
} from '../../utils/game'

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
				position: 0,
				set: false
			}
		}
	},
	computed: {},
	methods: {
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
			return positions[Math.floor(Math.random() * positions.length)]
		},
		nextPiece() {
			let piece = this.piece
			piece.piece = piece.pieces[piece.current]
			piece.current++
			piece.location = { x: 0, y: 0 }
			if (piece.piece === 'i') getI(piece)
			if (piece.piece === 'j') getJ(piece)
			if (piece.piece === 'l') getL(piece)
			if (piece.piece === 'o') getO(piece)
			if (piece.piece === 's') getS(piece)
			if (piece.piece === 't') getT(piece)
			if (piece.piece === 'z') getZ(piece)
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
			let { location, shape } = this.piece
			// console.log(`shape`, JSON.stringify(shape))
			// console.log(`piece`, JSON.stringify(this.piece.piece))
			let board = newBoard()
			let boardY = location.y
			if (this.savedBoard.length > 0) this.placePieces(board)
			if (boardY + 4 > 26) this.board = prevBoard
			else {
				let y = 0
				while (shape[y] && board[y]) {
					let boardX = location.x
					let x = 0
					while (x < 4) {
						// console.log(`x`, x)
						if (shape[y][x] === this.piece.piece) {
							// console.log(`found a match!`)
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
			// console.log(`this.board`, JSON.stringify(this.board))
			this.buildBoard()
		},
		pieceOrder() {
			const pieces = []
			for (let i = 0; i < 100; i++) pieces.push(randomPiece())
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
		verifyPlacement(location, shape) {
			if (this.savedBoard.length === 0) return true
			let y = 0
			let boardY = location.y
			while (shape[y] && this.savedBoard[y]) {
				let x = 0
				let boardX = location.x
				while (x < 4) {
					console.log(`boardX`, boardX)
					if (
						shape[y][x] === this.piece.piece &&
						this.savedBoard[boardY][boardX] !== 0
					) {
						console.log(`not valid`)
						return false
					}
					x++
					boardX++
				}
				y++
				boardY++
			}
			return true
		},
		rotatePiece() {
			let index, position
			switch (this.piece.piece) {
				// case 'i':
				// case 'j':
				// case 'l':
				// case 'o':
				// case 's':
				// case 't':
				case 'i':
					if ((index = this.piece.position + 1) > 3) index = 0
					position = positionsI[index]
					console.log(`this.piece.shape`, JSON.stringify(this.piece.shape))
					console.log(`shape`, JSON.stringify(position))
					console.log(
						`this.piece.location`,
						JSON.stringify(this.piece.location)
					)
					let offsetStart = calcPieceStart(
						position.shape,
						this.piece.piece
					)
					let offsetEnd = calcPieceEnd(position.shape, this.piece.piece)
					if (
						this.verifyPlacement(this.piece.location, position.shape) &&
						this.piece.location.x + 6 - offsetEnd <= 11 &&
						this.piece.location.x - 1 + offsetStart >= -1
					) {
						console.log(`valid rotation`)
						this.piece.shape = position.shape
						this.piece.position = index
						this.placePiece()
					}
					console.log(`this.piece.shape`, JSON.stringify(this.piece.shape))
					console.log(`shape`, JSON.stringify(position.shape))
					break

				default:
					break
			}
		},
		movePieceDown() {
			let { shape, location, piece, set } = this.piece
			let offset = calcPieceBottom(shape, piece)
			let board = this.board
			if (location.y - offset <= 19 && !this.piece.set) {
				if (
					this.verifyPlacement({ x: location.x, y: location.y + 1 }, shape)
				)
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
			let { shape, location, piece } = this.piece
			let offset = calcPieceEnd(shape, piece)
			let board = this.board
			if (location.x + 6 - offset <= 10 && !this.piece.set) {
				if (
					this.verifyPlacement({ x: location.x + 1, y: location.y }, shape)
				)
					location = { ...location, x: (location.x += 1) }
			}
			this.placePiece()
		},
		movePieceLeft() {
			let { shape, location, piece } = this.piece
			let offset = calcPieceStart(shape, piece)
			let board = this.board
			if (location.x - 1 + offset >= 0 && !this.piece.set) {
				if (
					this.verifyPlacement({ x: location.x - 1, y: location.y }, shape)
				)
					location = { ...location, x: (location.x -= 1) }
			}
			this.placePiece()
		},
		handleKeydown(event) {
			if (event.keyCode === 37) this.movePieceLeft()
			if (event.keyCode === 38) this.rotatePiece()
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
