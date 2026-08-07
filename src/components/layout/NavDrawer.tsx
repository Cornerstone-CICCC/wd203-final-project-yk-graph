import { X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { PATHS } from '../../routes/paths'
import SidebarCart from '../cart/SidebarCart'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const NAV_ITEMS = [
  { to: PATHS.items, label: 'MENU' },
  { to: PATHS.locations, label: 'LOCATIONS' },
  { to: PATHS.cart, label: 'CART' },
]

export default function NavDrawer({ isOpen, onClose }: Props) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      />

      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-80 flex-col bg-ink px-8 py-6 transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="mb-10 shrink-0 self-end text-muted transition-colors hover:text-paper"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        <nav className="flex shrink-0 flex-col gap-4 text-xs tracking-wide">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) => (isActive ? 'text-paper' : 'text-muted transition-colors hover:text-paper')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <SidebarCart onNavigate={onClose} />
      </aside>
    </>
  )
}
