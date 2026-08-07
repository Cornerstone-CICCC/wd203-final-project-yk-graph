import { Link, useNavigate } from 'react-router-dom'

import { useCart } from '../hooks/useCart'
import { useCartProducts } from '../hooks/useCartProducts'
import { PATHS } from '../routes/paths'

export default function Checkout() {
  const { totalPrice, totalCount, clearCart } = useCart()
  const cartProducts = useCartProducts()
  const navigate = useNavigate()

  const handleConfirm = () => {
    clearCart()
    navigate(PATHS.home)
  }

  if (cartProducts.length === 0) {
    return (
      <div className="px-6 py-20 sp:px-12">
        <h1 className="text-2xl tracking-wide">CHECKOUT</h1>
        <p className="mt-4 text-sm text-muted">Your cart is empty.</p>
        <Link to={PATHS.items} className="mt-8 inline-block text-sm underline">
          Browse the menu
        </Link>
      </div>
    )
  }

  return (
    <div className="px-6 py-12 sp:px-12 sp:py-20">
      <h1 className="mb-12 text-2xl tracking-wide">CHECKOUT</h1>

      <div className="max-w-xl">
        <ul className="space-y-3 border-b border-line pb-6">
          {cartProducts.map(({ product, quantity }) => (
            <li key={product.id} className="flex justify-between text-sm">
              <span className="text-muted">
                {product.name} × {quantity}
              </span>
              <span>${(Number(product.price) * quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex justify-between text-lg">
          <span>TOTAL ({totalCount} items)</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <button
          onClick={handleConfirm}
          className="mt-12 w-full border border-paper py-4 text-xs tracking-widest transition-colors hover:bg-paper hover:text-ink"
        >
          CONFIRM ORDER
        </button>

        <Link to={PATHS.cart} className="mt-6 block text-center text-xs text-muted transition-colors hover:text-paper">
          Back to cart
        </Link>
      </div>
    </div>
  )
}
