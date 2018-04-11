import { expect } from 'chai'
import { mutations } from '../../../src/store/mutations'

// destructure assign `mutations`
const { setUsername } = mutations

describe('Mutations', () => {
	describe('setUsername', () => {
		it('sets username', () => {
			const state = { user: { username: '' } }
			setUsername(state, 'pbie')
			expect(state.user.username).to.equal('pbie')
		})
		it('keeps previous state if there is no username given', () => {
			const state = { user: { username: 'pbie' } }
			setUsername(state, '')
			expect(state.user.username).to.equal('pbie')
			setUsername(state, undefined)
			expect(state.user.username).to.equal('pbie')
		})
	})
})
