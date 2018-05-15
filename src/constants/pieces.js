export const positionsO = [
	{
		position: 0,
		shape: [[0, 0, 0, 0], [0, 'o', 'o', 0], [0, 'o', 'o', 0], [0, 0, 0, 0]]
	},
	{
		position: 1,
		shape: [[0, 0, 0, 0], [0, 'o', 'o', 0], [0, 'o', 'o', 0], [0, 0, 0, 0]]
	},
	{
		position: 2,
		shape: [[0, 0, 0, 0], [0, 'o', 'o', 0], [0, 'o', 'o', 0], [0, 0, 0, 0]]
	},
	{
		position: 3,
		shape: [[0, 0, 0, 0], [0, 'o', 'o', 0], [0, 'o', 'o', 0], [0, 0, 0, 0]]
	}
]

export const positionsL = [
	{
		position: 0,
		shape: [[0, 0, 0, 0], [0, 0, 'l', 0], ['l', 'l', 'l', 0], [0, 0, 0, 0]]
	},
	{
		position: 1,
		shape: [[0, 0, 0, 0], [0, 'l', 0, 0], [0, 'l', 0, 0], [0, 'l', 'l', 0]]
	},
	{
		position: 2,
		shape: [[0, 0, 0, 0], [0, 0, 0, 0], ['l', 'l', 'l', 0], ['l', 0, 0, 0]]
	},
	{
		position: 3,
		shape: [[0, 0, 0, 0], ['l', 'l', 0, 0], [0, 'l', 0, 0], [0, 'l', 0, 0]]
	}
]

export const positionsJ = [
	{
		position: 0,
		shape: [[0, 0, 0, 0], ['j', 0, 0, 0], ['j', 'j', 'j', 0], [0, 0, 0, 0]]
	},
	{
		position: 1,
		shape: [[0, 0, 0, 0], [0, 'j', 'j', 0], [0, 'j', 0, 0], [0, 'j', 0, 0]]
	},
	{
		position: 2,
		shape: [[0, 0, 0, 0], [0, 0, 0, 0], ['j', 'j', 'j', 0], [0, 0, 'j', 0]]
	},
	{
		position: 3,
		shape: [[0, 0, 0, 0], [0, 'j', 0, 0], [0, 'j', 0, 0], ['j', 'j', 0, 0]]
	}
]

export const positionsI = [
	{
		position: 0,
		shape: [[0, 0, 0, 0], ['i', 'i', 'i', 'i'], [0, 0, 0, 0], [0, 0, 0, 0]]
	},
	{
		position: 1,
		shape: [[0, 0, 'i', 0], [0, 0, 'i', 0], [0, 0, 'i', 0], [0, 0, 'i', 0]]
	},
	{
		position: 2,
		shape: [[0, 0, 0, 0], [0, 0, 0, 0], ['i', 'i', 'i', 'i'], [0, 0, 0, 0]]
	},
	{
		position: 3,
		shape: [[0, 'i', 0, 0], [0, 'i', 0, 0], [0, 'i', 0, 0], [0, 'i', 0, 0]]
	}
]

export const positionsS = [
	{
		position: 0,
		shape: [[0, 0, 0, 0], [0, 's', 's', 0], ['s', 's', 0, 0], [0, 0, 0, 0]]
	},
	{
		position: 1,
		shape: [[0, 0, 0, 0], [0, 's', 0, 0], [0, 's', 's', 0], [0, 0, 's', 0]]
	},
	{
		position: 2,
		shape: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 's', 's', 0], ['s', 's', 0, 0]]
	},
	{
		position: 3,
		shape: [[0, 0, 0, 0], ['s', 0, 0, 0], ['s', 's', 0, 0], [0, 's', 0, 0]]
	}
]

export const positionsT = [
	{
		position: 0,
		shape: [[0, 0, 0, 0], [0, 't', 0, 0], ['t', 't', 't', 0], [0, 0, 0, 0]]
	},
	{
		position: 1,
		shape: [[0, 0, 0, 0], [0, 't', 0, 0], [0, 't', 't', 0], [0, 't', 0, 0]]
	},
	{
		position: 2,
		shape: [[0, 0, 0, 0], [0, 0, 0, 0], ['t', 't', 't', 0], [0, 't', 0, 0]]
	},
	{
		position: 3,
		shape: [[0, 0, 0, 0], [0, 't', 0, 0], ['t', 't', 0, 0], [0, 't', 0, 0]]
	}
]

export const positionsZ = [
	{
		position: 0,
		shape: [[0, 0, 0, 0], ['z', 'z', 0, 0], [0, 'z', 'z', 0], [0, 0, 0, 0]]
	},
	{
		position: 1,
		shape: [[0, 0, 0, 0], [0, 0, 'z', 0], [0, 'z', 'z', 0], [0, 'z', 0, 0]]
	},
	{
		position: 2,
		shape: [[0, 0, 0, 0], [0, 0, 0, 0], ['z', 'z', 0, 0], [0, 'z', 'z', 0]]
	},
	{
		position: 3,
		shape: [[0, 0, 0, 0], [0, 'z', 0, 0], ['z', 'z', 0, 0], ['z', 0, 0, 0]]
	}
]
export function getI(piece) {
	const i = initializeI()
	piece.shape = i.shape
	piece.position = i.position
}
export function getJ(piece) {
	const j = initializeJ()
	piece.shape = j.shape
	piece.position = j.position
}
export function getL(piece) {
	const l = initializeL()
	piece.shape = l.shape
	piece.position = l.position
}
export function getO(piece) {
	const o = initializeO()
	piece.shape = o.shape
	piece.position = o.position
}
export function getS(piece) {
	const s = initializeS()
	piece.shape = s.shape
	piece.position = s.position
}
export function getT(piece) {
	const t = initializeT()
	piece.shape = t.shape
	piece.position = t.position
}
export function getZ(piece) {
	const z = initializeZ()
	piece.shape = z.shape
	piece.position = z.position
}

export function initializeI() {
	return selectPosition(positionsI)
}
export function initializeJ() {
	return selectPosition(positionsJ)
}
export function initializeL() {
	return selectPosition(positionsL)
}
export function initializeO() {
	return selectPosition(positionsO)
}
export function initializeS() {
	return selectPosition(positionsS)
}
export function initializeT() {
	return selectPosition(positionsT)
}
export function initializeZ() {
	return selectPosition(positionsZ)
}

export function selectPosition(positions) {
	return positions[Math.floor(Math.random() * positions.length)]
}

export function randomPiece() {
	const pieces = ['i', 'j', 'l', 'o', 's', 't', 'z']
	return pieces[Math.floor(Math.random() * pieces.length)]
}
