import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import Search from './../../../components/Search/search'
import { MemoryRouter } from "react-router-dom"
import store from "../../../redux/redux"
import { Provider } from "react-redux"
import userEvent from "@testing-library/user-event"

describe('RENDER TESTS', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Provider store={store}>
                    <Search userId="1" />
                </Provider>
            </MemoryRouter>
        )
    })

    afterEach(() => {
        cleanup()
    })

    test('INPUT IS IN THE DOCUMENT', () => {
        const input = screen.getByTestId('search/input')

        expect(input).toBeInTheDocument()
    })
})

describe('FUNCTIONAL TESTS', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Provider store={store}>
                    <Search userId="1" />
                </Provider>
            </MemoryRouter>
        )
    })

    afterEach(() => {
        cleanup()
    })

    test('ON CHANGE INPUT TEST', () => {
        const input = screen.getByTestId('search/input')

        expect(input).toHaveValue('')

        userEvent.type(input, 'test')

        expect(input).toHaveValue('test')
    })
})