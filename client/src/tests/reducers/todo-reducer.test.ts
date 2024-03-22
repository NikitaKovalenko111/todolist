import { setTodosAC } from '../../redux/actions/todo-actions'
import todoReducer, {
    initialStateType,
} from '../../redux/reducers/todo-reducer'
import { todoItemType } from '../../types'

interface IExpectedStateType {
    todos: Array<todoItemType>
}

describe('todoReducer tests', () => {
    let state: initialStateType
    let expectedState: IExpectedStateType

    beforeEach(() => {
        state = {
            todos: [],
        }
    })

    test('SET TODOS', () => {
        expectedState = {
            ...state,
            todos: [
                {
                    _id: '1',
                    target: 'test',
                    isCompleted: false,
                    date: '7/14/2023',
                    authorId: '1',
                },
            ],
        }

        expect(
            todoReducer(
                state,
                setTodosAC([
                    {
                        _id: '1',
                        target: 'test',
                        isCompleted: false,
                        date: '7/14/2023',
                        authorId: '1',
                    },
                ])
            )
        ).toEqual(expectedState)
    })

    test('OTHER ACTIONS', () => {
        //@ts-ignore
        expect(todoReducer(state, { type: 'SOME OTHER ACTION' })).toEqual(state)
    })
})
