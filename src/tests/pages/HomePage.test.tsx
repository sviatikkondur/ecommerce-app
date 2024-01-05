import { render, screen } from '@testing-library/react'
import {HomePage} from '../../pages/HomePage'

test('renders hello world message', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    render(<HomePage />)
    const greetings = screen.getByText(/Hello world/i)
    expect(greetings).toBeInTheDocument()
})
