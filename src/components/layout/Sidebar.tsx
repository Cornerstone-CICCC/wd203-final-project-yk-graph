import { CircleChevronUp } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { PATHS } from '../../routes/paths'

const NAV_ITEMS = [
  { to: PATHS.items, label: 'MENU' },
  { to: PATHS.locations, label: 'LOCATIONS' },
  { to: PATHS.cart, label: 'CART' },
]

export default function Sidebar() {
  return (
    <aside className="sticky top-0 z-20 min-w-70 hidden h-screen shrink-0 grow-0 basis-[18.75%] flex-col justify-between p-12 pt-8 sp:flex">
      <nav className="flex flex-col gap-4 text-xs tracking-wide">
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

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center gap-2 text-xs tracking-wider text-muted hover:text-paper"
      >
        BACK TO TOP
        <CircleChevronUp size={18} strokeWidth={1.2} />
      </button>
    </aside>
  )
}
