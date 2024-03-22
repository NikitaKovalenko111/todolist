import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import CreateTodo from "../../../components/CreateTodo/create-todo"
import { Provider } from "react-redux"
import store from "../../../redux/redux"
import React from "react"

describe('RENDER TESTS', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <CreateTodo authorId="1" />
            </Provider>
        )
    })

    afterEach(() => {
        cleanup()
    })

    test('WRAPPER IS IN THE DOCUMENT', () => {
        const wrapper = screen.getByTestId('create-todo/wrapper')

        expect(wrapper).toBeInTheDocument()
    })

    test('INPUT IS IN THE DOCUMENT AND INTO THE WRAPPER', () => {
        const input = screen.getByTestId('create-todo/input')
        const wrapper = screen.getByTestId('create-todo/wrapper')

        expect(input).toBeInTheDocument()
        expect(wrapper.contains(input)).toBeTruthy()
    })

    test('BUTTON IS IN THE DOCUMENT AND INTO THE WRAPPER', () => {
        const button = screen.getByTestId('create-todo/button')
        const wrapper = screen.getByTestId('create-todo/wrapper')

        expect(button).toBeInTheDocument()
        expect(wrapper.contains(button)).toBeTruthy()
    })
})