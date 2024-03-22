import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../../redux/redux"
import Header from "./../../../components/Layout/header"

describe('APP COMPONENT TEST', () => {
    beforeEach(() => {
        render(<Provider store={store}>
            <Header userId="1" />
        </Provider>)
    })

    test('HEADER IS IN THE DOCUMENT', () => {
        const Header = screen.getByTestId('header')

        expect(Header).toBeInTheDocument()
    })
    
    test('CONTAINER IS IN THE DOCUMENT', () => {
        const container = screen.getByTestId('container')

        expect(container).toBeInTheDocument()
    })

    test('LOGO IS IN THE DOCUMENT', () => {
        const logoWrapper = screen.getByTestId('logoWrapper')
        const logo = screen.getByTestId('logo')

        expect(logoWrapper).toBeInTheDocument()
        expect(logoWrapper.contains(logo)).toBeTruthy()
    })
})