import { CircleChevronUp } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { PATHS } from '../../routes/paths'
import SidebarCart from '../cart/SidebarCart'

const NAV_ITEMS = [
  { to: PATHS.items, label: 'MENU' },
  { to: PATHS.locations, label: 'LOCATIONS' },
  { to: PATHS.cart, label: 'CART' },
]

export default function Sidebar() {
  return (
    <aside className="sticky top-0 z-20 hidden h-screen min-w-70 shrink-0 grow-0 basis-[18.75%] flex-col p-12 pt-8 sp:flex">
      <nav className="flex shrink-0 flex-col gap-4 text-xs tracking-wide">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? 'text-paper' : 'text-muted transition-colors hover:text-paper')}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <SidebarCart />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex shrink-0 items-center gap-2 text-xs tracking-wider text-muted transition-colors hover:text-paper"
      >
        BACK TO TOP
        <CircleChevronUp size={18} strokeWidth={1.2} />
      </button>
    </aside>
  )
}
