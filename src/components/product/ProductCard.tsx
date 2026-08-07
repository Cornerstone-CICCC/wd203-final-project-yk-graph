import { Link } from 'react-router-dom'

import { PATHS } from '../../routes/paths'
import type { Product } from '../../types/product'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={PATHS.itemDetail(product.id)} className="group block">
      <div className="aspect-3/4 overflow-hidden bg-line">
        <img
          src={product.photo}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.jpg'
          }}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <p className="mt-4 text-sm">{product.name}</p>
      <p className="mt-1 text-sm text-muted">${Number(product.price).toFixed(2)}</p>
    </Link>
  )
}
