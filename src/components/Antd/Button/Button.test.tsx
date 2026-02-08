/* eslint-env jest */
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '@/test/testUtils'
import Button from './Button'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('handles click events', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()

    render(
      <Button onClick={handleClick} data-testid="btn">
        Click Me
      </Button>
    )

    await user.click(screen.getByTestId('btn'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not fire click when disabled', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()

    render(
      <Button onClick={handleClick} disabled data-testid="btn">
        Disabled
      </Button>
    )

    await user.click(screen.getByTestId('btn'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('applies custom className', () => {
    render(
      <Button className="my-class" data-testid="btn">
        Styled
      </Button>
    )

    expect(screen.getByTestId('btn')).toHaveClass('my-class')
  })

  it('supports htmlType prop', () => {
    render(
      <Button htmlType="submit" data-testid="btn">
        Submit
      </Button>
    )

    expect(screen.getByTestId('btn')).toHaveAttribute('type', 'submit')
  })

  it('is keyboard accessible', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()

    render(
      <Button onClick={handleClick} data-testid="btn">
        Accessible
      </Button>
    )

    const button = screen.getByTestId('btn')

    button.focus()
    expect(button).toHaveFocus()

    await user.keyboard('{Enter}')
    expect(handleClick).toHaveBeenCalled()
  })
})
