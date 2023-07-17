import { setTodosAC } from '../../redux/actions/todo-actions'
import todoReducer, { initialStateType } from '../../redux/reducers/todo-reducer'
import { todoItemType } from '../../types'

interface expectedStateType {
    todos: Array<todoItemType>
}

describe('todoReducer tests', () => {
    let state: initialStateType
    let expectedState: expectedStateType

    beforeEach(() => {
        state = {
            todos: [],
        }
    })

    test('SET TODOS', () => {
        expectedState = { ...state, todos: [
            {
                id: 1,
                target: 'test',
                isCompleted: false,
                date: '7/14/2023',
            }
        ] }

        expect(todoReducer(state, setTodosAC([
            {
                id: 1,
                target: 'test',
                isCompleted: false,
                date: '7/14/2023',
            }
        ]))).toEqual(expectedState)
    })

    test('OTHER ACTIONS', () => {
        expect(todoReducer(state, { type: 'SOME OTHER ACTION' })).toEqual(state)
    })
})