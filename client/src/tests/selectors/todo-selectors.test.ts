import { RootState } from '../../types'
import { todosSelector } from '../../selectors/todo-selectors'
import store from '../../redux/redux'

describe('TODO SELECTORS TESTS', () => {
    let state: RootState

    beforeAll(() => {
        state = store.getState()
    })

    test('TODOS SELECTOR TEST', () => {
        expect(todosSelector(state)).toEqual(state.todos.todos)
    })
})
