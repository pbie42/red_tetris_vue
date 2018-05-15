export function calcPieceEnd(shape, piece) {
	let end = 0
	let x = -1
	while (++x < 4) {
		let y = -1
		while (++y < 4) if (shape[y][x] === piece) end = x
	}
	return 4 - end
}
export function calcPieceStart(shape, piece) {
	let x = -1
	while (++x < 4) {
		let y = -1
		while (++y < 4) if (shape[y][x] === piece) return x
	}
}
export function calcPieceBottom(shape, piece) {
	let bottom = 0
	let y = -1
	while (++y < 4) {
		let x = -1
		while (++x < 4) if (shape[y][x] === piece) bottom = y
	}
	return 3 - bottom
}
