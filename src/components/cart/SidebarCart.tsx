import { Link } from 'react-router-dom'

import { useCart } from '../../hooks/useCart'
import { useCartProducts } from '../../hooks/useCartProducts'
import { PATHS } from '../../routes/paths'
import CartItemRow from './CartItemRow'

export default function SidebarCart() {
  const { totalPrice, totalCount } = useCart()
  const cartProducts = useCartProducts()

  return (
    <section className="my-10 flex min-h-0 flex-1 flex-col border-t border-line pt-6">
      <h2 className="mb-4 shrink-0 text-xs tracking-widest">CART ({totalCount})</h2>

      {cartProducts.length === 0 ? (
        <p className="text-xs text-muted">Your cart is empty.</p>
      ) : (
        <ul className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
          {cartProducts.map(({ product, quantity }) => (
            <CartItemRow key={product.id} product={product} quantity={quantity} />
          ))}
        </ul>
      )}

      <div className="mt-4 shrink-0 border-t border-line pt-4">
        <div className="mb-3 flex justify-between text-xs">
          <span>TOTAL</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <Link
          to={PATHS.cart}
          className="block border border-paper py-2 text-center text-[10px] tracking-widest transition-colors hover:bg-paper hover:text-ink"
        >
          VIEW CART
        </Link>
      </div>
    </section>
  )
}
