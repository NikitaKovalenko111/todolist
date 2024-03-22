import { render, screen } from '@testing-library/react'
import App from '../../App'
import { Provider } from 'react-redux'
import store from '../../redux/redux'

describe('APP COMPONENT TEST', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
    })

    test('APP DIV IS IN THE DOCUMENT', () => {
        const AppDiv = screen.getByTestId('app')

        expect(AppDiv).toBeInTheDocument()
    })
})
