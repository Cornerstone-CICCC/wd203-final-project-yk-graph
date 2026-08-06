import { Link, NavLink } from 'react-router-dom'

import { PATHS } from '../../routes/paths'

export default function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'font-bold underline' : 'hover:underline')

  return (
    <header className="flex items-center justify-between border-b px-6 py-4">
      <Link to={PATHS.home} className="text-xl font-bold">
        Cafe App
      </Link>
      <nav className="flex gap-6">
        <NavLink to={PATHS.items} className={linkClass}>
          MENU
        </NavLink>
        <NavLink to={PATHS.cart} className={linkClass}>
          CART
        </NavLink>
      </nav>
    </header>
  )
}
