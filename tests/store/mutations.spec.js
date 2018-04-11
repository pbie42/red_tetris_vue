import { expect } from 'chai'
import { mutations } from '../../src/store'

// destructure assign `mutations`
const { setUsername } = mutations

describe('mutations', () => {
	it('sets username', () => {
		// mock state
		const state = { user: { username: '' } }
		// apply mutation
		setUsername(state, 'pbie')
		// assert result
		expect(state.user.username).to.equal('pbie')
	})
})
