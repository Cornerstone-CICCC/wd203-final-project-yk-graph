import { Link } from 'react-router-dom'

import CartItemRow from '../components/cart/CartItemRow'
import { useCart } from '../hooks/useCart'
import { useCartProducts } from '../hooks/useCartProducts'
import { PATHS } from '../routes/paths'

export default function Cart() {
  const { totalPrice } = useCart()
  const cartProducts = useCartProducts()

  if (cartProducts.length === 0) {
    return (
      <div className="p-8">
        <h1 className="mb-4 text-3xl">Your Cart</h1>
        <p className="text-muted">Your cart is empty.</p>
        <Link to={PATHS.items} className="mt-6 inline-block underline">
          Browse the menu
        </Link>
      </div>
    )
  }

  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl">Your Cart</h1>

      <ul className="max-w-2xl space-y-6">
        {cartProducts.map(({ product, quantity }) => (
          <CartItemRow key={product.id} product={product} quantity={quantity} />
        ))}
      </ul>

      <div className="mt-10 max-w-2xl border-t border-line pt-6">
        <div className="mb-6 flex justify-between text-lg">
          <span>TOTAL</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <Link
          to={PATHS.checkout}
          className="inline-block border border-paper px-10 py-3 text-xs tracking-widest transition-colors hover:bg-paper hover:text-ink"
        >
          CHECKOUT
        </Link>
      </div>
    </div>
  )
}
