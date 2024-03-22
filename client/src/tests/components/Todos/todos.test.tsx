import { Provider } from 'react-redux'
import Todos from '../../../components/Todos/todos'
import store from '../../../redux/redux'
import { cleanup, render, screen } from '@testing-library/react'
import { todoItemType } from '../../../types'
import { useSelector } from 'react-redux'

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}))

const todos: Array<todoItemType> = [
    {
        target: 'test',
        _id: '1',
        date: 'date',
        dateIsCompleted: 'date',
        isCompleted: true,
        authorId: '1',
    },
    {
        target: 'test2',
        _id: '1',
        date: 'date',
        dateIsCompleted: 'date',
        isCompleted: true,
        authorId: '1',
    },
    {
        target: 'test3',
        _id: '1',
        date: 'date',
        dateIsCompleted: 'date',
        isCompleted: true,
        authorId: '1',
    },
]

const state = {
    todos: {
        todos: todos,
    },
}

describe('ELEMENTS ARE IN THE DOCUMENT TEST', () => {
    beforeEach(() => {
        const useSelectorMock = useSelector
        //@ts-ignore
        useSelectorMock.mockImplementation((selector) => selector(state))
        render(
            <Provider store={store}>
                <Todos userId="1" />
            </Provider>
        )
    })

    afterEach(() => {
        cleanup()
    })

    test('TODOS WRAPPER IS IN THE DOCUMENT', () => {
        const todosWrapper = screen.getByTestId('todos')

        expect(todosWrapper).toBeInTheDocument()
    })

    test('CONTAINER IS IN THE DOCUMENT AND INTO THE WRAPPER', () => {
        const todosWrapper = screen.getByTestId('todos')
        const container = screen.getByTestId('container')

        expect(container).toBeInTheDocument()
        expect(todosWrapper.contains(container)).toBeTruthy()
    })

    test('TODOS RENDER TEST', async () => {
        const todosScreen = await screen.findAllByTestId('todo/article')

        expect(todosScreen).toHaveLength(3)
    })
})
