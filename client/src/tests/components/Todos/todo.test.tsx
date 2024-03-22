import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import Todo from '../../../components/Todos/todo'
import { Provider } from 'react-redux'
import store from '../../../redux/redux'
import todoAPI from '../../../api/todo-api'

describe('RENDER TESTS', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Todo
                    target="test"
                    id={'1'}
                    date="test date"
                    isCompleted={false}
                />
            </Provider>
        )
    })

    afterEach(() => {
        cleanup()
    })

    test('ARTICLE TODO IS IN THE DOCUMENT', () => {
        const article = screen.getByTestId('todo/article')

        expect(article).toBeInTheDocument()
    })

    test('TODO BLOCK IS IN THE DOCUMENT AND INTO THE ARTICLE', () => {
        const article = screen.getByTestId('todo/article')
        const block = screen.getByTestId('todo/block')

        expect(block).toBeInTheDocument()
        expect(article.contains(block)).toBeTruthy()
    })

    test('TODO TARGET IS A PROPS TARGET', () => {
        const target = screen.getByTestId('todo/target')

        expect(target).toHaveTextContent('test')
    })

    test('TODO CHECKBOX IS IN THE DOCUMENT', () => {
        const checkbox = screen.getByTestId('todo/checkbox')

        expect(checkbox).toBeInTheDocument()
        expect(checkbox).not.toBeChecked()
        expect(checkbox.id).toBe('isCompleted1')
    })

    test('TODO DATE IS IN THE DOCUMENT', () => {
        const date = screen.getByTestId('todo/date')

        expect(date).toBeInTheDocument()
    })
})

describe('FUNCTIONAL TESTS', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Todo
                    target="test"
                    id={'1'}
                    date="test date"
                    isCompleted={false}
                />
            </Provider>
        )
    })

    afterEach(() => {
        cleanup()
    })

    test('TODO CHECKBOX ONCLICK EVENT TEST', () => {
        const checkbox = screen.getByTestId('todo/checkbox')

        expect(checkbox).not.toBeChecked()
        fireEvent.click(checkbox)
        expect(checkbox).toBeChecked()
        fireEvent.click(checkbox)
        expect(checkbox).not.toBeChecked()
    })

    test('DELETE API FUNCTION WORKS', () => {
        const deleteAPIFunction = jest.spyOn(todoAPI, 'deleteTodo')
        const deleteButton = screen.getByTestId('todo/close')

        expect(deleteAPIFunction).not.toHaveBeenCalled()
        fireEvent.click(deleteButton)
        expect(deleteAPIFunction).toHaveBeenCalledTimes(1)
    })
})
