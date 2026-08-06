import { NavLink } from 'react-router-dom'

import { PATHS } from '../../routes/paths'

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
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-72 bg-ink px-8 py-10 transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button onClick={onClose} aria-label="Close menu" className="mb-12 text-sm">
          CLOSE
        </button>

        <nav className="flex flex-col gap-6 text-sm tracking-widest">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={onClose} className="hover:text-muted">
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}
