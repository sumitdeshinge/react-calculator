import Calculator from "./Calculator";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event"
import { buttonValues } from "./Buttons";

describe('Calculator functional component', () => {
    test('renders correctly', () => {
        render(<Calculator />)
        const resultElement = screen.getByRole('textbox')
        expect(resultElement).toBeInTheDocument()
    })

    test('has a keypad', () => {
        const { container } = render(<Calculator />)
        expect(container.getElementsByClassName('keypad').length).toBe(1)
    })

    test('has buttoons', () => {
        render(<Calculator />)
        const buttonElements = screen.getAllByRole('button')
        expect(buttonElements).toHaveLength(buttonValues.flat().length)
    })

    test('has default result on init', () => {
        render(<Calculator />)
        const resultElements = screen.getByRole('textbox')
        expect(resultElements).toHaveTextContent('') // no result before any user interaction
    })

    test('Addition', async () => {
        user.setup()
        render(<Calculator />)
        const fiveButton = screen.getByRole('button', {
            name: 5
        })
        expect(fiveButton).toBeInTheDocument()
        await user.click(fiveButton)

        const addButton = screen.getByRole('button', {
            name: '+'
        })
        expect(addButton).toBeInTheDocument()
        await user.click(addButton)

        const fourButton = screen.getByRole('button', {
            name: 4
        })
        expect(fourButton).toBeInTheDocument()
        await user.click(fourButton)

        const resultButton = screen.getByRole('button', {
            name: 'Result'
        })
        expect(resultButton).toBeInTheDocument()
        await user.click(resultButton)
        
        const resultElement = screen.getByRole('textbox')
        expect(resultElement).toHaveValue('9')

    })

    test('Subtraction', async () => {
        user.setup()
        render(<Calculator />)
        const fiveButton = screen.getByRole('button', {
            name: 5
        })
        expect(fiveButton).toBeInTheDocument()
        await user.click(fiveButton)

        const subtractButton = screen.getByRole('button', {
            name: '-'
        })
        expect(subtractButton).toBeInTheDocument()
        await user.click(subtractButton)

        const fourButton = screen.getByRole('button', {
            name: 4
        })
        expect(fourButton).toBeInTheDocument()
        await user.click(fourButton)

        const resultButton = screen.getByRole('button', {
            name: 'Result'
        })
        expect(resultButton).toBeInTheDocument()
        await user.click(resultButton)
        
        const resultElement = screen.getByRole('textbox')
        expect(resultElement).toHaveValue('1')

    })

    test('Multiplication', async () => {
        user.setup()
        render(<Calculator />)
        const fiveButton = screen.getByRole('button', {
            name: 5
        })
        expect(fiveButton).toBeInTheDocument()
        await user.click(fiveButton)

        const multiplyButton = screen.getByRole('button', {
            name: '*'
        })
        expect(multiplyButton).toBeInTheDocument()
        await user.click(multiplyButton)

        const fourButton = screen.getByRole('button', {
            name: 4
        })
        expect(fourButton).toBeInTheDocument()
        await user.click(fourButton)

        const resultButton = screen.getByRole('button', {
            name: 'Result'
        })
        expect(resultButton).toBeInTheDocument()
        await user.click(resultButton)
        
        const resultElement = screen.getByRole('textbox')
        expect(resultElement).toHaveValue('20')

    })

    test('Division', async () => {
        user.setup()
        render(<Calculator />)
        const nineButton = screen.getByRole('button', {
            name: 9
        })
        expect(nineButton).toBeInTheDocument()
        await user.click(nineButton)

        const divButton = screen.getByRole('button', {
            name: '/'
        })
        expect(divButton).toBeInTheDocument()
        await user.click(divButton)

        const threeButton = screen.getByRole('button', {
            name: 3
        })
        expect(threeButton).toBeInTheDocument()
        await user.click(threeButton)

        const resultButton = screen.getByRole('button', {
            name: 'Result'
        })
        expect(resultButton).toBeInTheDocument()
        await user.click(resultButton)
        
        const resultElement = screen.getByRole('textbox')
        expect(resultElement).toHaveValue('3')

    })

    test('Clear', async () => {
        user.setup()
        render(<Calculator />)
        const fiveButton = screen.getByRole('button', {
            name: 5
        })
        expect(fiveButton).toBeInTheDocument()
        await user.click(fiveButton)

        const resultElement = screen.getByRole('textbox')
        expect(resultElement).toHaveValue('5')

        const clearButton = screen.getByRole('button', {
            name: 'Clear'
        })
        expect(clearButton).toBeInTheDocument()
        await user.click(clearButton)

        expect(resultElement).toHaveValue('')

    })

    test('Backspace', async () => {
        user.setup()
        render(<Calculator />)
        const fiveButton = screen.getByRole('button', {
            name: 5
        })
        expect(fiveButton).toBeInTheDocument()
        await user.click(fiveButton)

        const fourButton = screen.getByRole('button', {
            name: 4
        })
        expect(fourButton).toBeInTheDocument()
        await user.click(fourButton)

        const resultElement = screen.getByRole('textbox')
        expect(resultElement).toHaveValue('54')

        const backspaceButton = screen.getByRole('button', {
            name: 'C'
        })
        expect(backspaceButton).toBeInTheDocument()
        await user.click(backspaceButton)

        expect(resultElement).toHaveValue('5')

    })
})