import { ThemeToggler } from 'components/ThemeToggler'
import { NavLink } from 'components/NavLink'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 '>
      <div className='container flex flex-wrap justify-between items-center mx-auto border-b py-2'>
        <div className='flex'>
          <Link
            className='mr-8 flex p-0 text-2xl tracking-tighter no-underline text-gray-700 dark:text-white'
            to='/'
          >
            <span className='inline-block font-medium'>Site Logo</span>
          </Link>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
        </div>
        <ThemeToggler />
      </div>
    </nav>
  )
}