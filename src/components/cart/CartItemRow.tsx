import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

import { useCart } from '../../hooks/useCart'
import { PATHS } from '../../routes/paths'
import type { Product } from '../../types/product'

type Props = {
  product: Product
  quantity: number
  onNavigate?: () => void
}

export default function CartItemRow({ product, quantity, onNavigate }: Props) {
  const { removeFromCart } = useCart()
  const subtotal = Number(product.price) * quantity

  return (
    <li className="flex items-center gap-3">
      <Link to={PATHS.itemDetail(product.id)} onClick={onNavigate} className="shrink-0">
        <img
          src={product.photo}
          alt={product.name}
          onError={(e) => {
            e.currentTarget.src = '/placeholder.jpg'
          }}
          className="h-12 w-12 object-cover"
        />
      </Link>

      <div className="min-w-0 flex-1">
        <Link
          to={PATHS.itemDetail(product.id)}
          onClick={onNavigate}
          className="block truncate text-xs hover:opacity-60"
        >
          {product.name}
        </Link>
        <p className="text-[10px] text-muted">
          ${Number(product.price).toFixed(2)} × {quantity}
        </p>
      </div>

      <p className="shrink-0 text-xs">${subtotal.toFixed(2)}</p>

      <button
        onClick={() => removeFromCart(product.id)}
        aria-label={`Remove ${product.name}`}
        className="shrink-0 text-muted transition-colors hover:text-paper"
      >
        <X size={12} strokeWidth={1.5} />
      </button>
    </li>
  )
}
