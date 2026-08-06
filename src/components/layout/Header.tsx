import { Menu, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo_white.webp'
import { useCart } from '../../hooks/useCart'
import { PATHS } from '../../routes/paths'
import NavDrawer from './NavDrawer'

export default function Header() {
  const { totalCount } = useCart()
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      <header className="hidden items-center justify-between px-10 py-6 sp:flex">
        <Link to={PATHS.home}>
          <img src={logo} alt="Cafe" className="h-8 w-auto" />
        </Link>

        <Link to={PATHS.cart} className="flex items-center gap-2" aria-label="Cart">
          <ShoppingCart size={22} strokeWidth={1.5} />
          <span className="text-xs text-muted">{totalCount}</span>
        </Link>
      </header>

      <header className="fixed top-0 z-40 flex w-full items-center justify-between bg-ink/90 px-5 py-4 backdrop-blur-sm sp:hidden">
        <Link to={PATHS.home}>
          <img src={logo} alt="Cafe" className="h-6 w-auto" />
        </Link>

        <div className="flex items-center gap-5">
          <Link to={PATHS.cart} className="flex items-center gap-1.5" aria-label="Cart">
            <ShoppingCart size={20} strokeWidth={1.5} />
            <span className="text-xs text-muted">0</span>
          </Link>

          <button onClick={() => setIsNavOpen(true)} aria-label="Open menu">
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <NavDrawer isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
    </>
  )
}
