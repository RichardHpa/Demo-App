import { setMatchMediaMock } from 'tests/matchMediaMock'
import { render, screen } from 'tests/renderHelpers'

import { NavLink } from './NavLink'

describe('NavLink', () => {
  beforeEach(() => {
    setMatchMediaMock()
  })
  test('renders NavLink', () => {
    render(<NavLink to='/'>Test</NavLink>)

    const link = screen.getByRole('link', { name: /test/i })

    expect(link).toBeInTheDocument()

    expect(link).toMatchSnapshot()
  })

  test('renders NavLink with className', () => {
    render(
      <NavLink to='/' className='test'>
        Test
      </NavLink>,
    )

    const link = screen.getByRole('link', { name: /test/i })

    expect(link).toHaveClass('test')
  })
})
