import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useCart } from '../hooks/useCart'
import { useProducts } from '../hooks/useProducts'
import { PATHS } from '../routes/paths'

export default function ItemDetail() {
  const { id } = useParams()
  const { products, isLoading, error } = useProducts()
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  if (isLoading) return <p className="p-8 text-sm text-muted">Loading...</p>
  if (error) return <p className="p-8 text-sm text-red-500">{error}</p>

  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return (
      <div className="px-6 py-20 sp:px-12">
        <h1 className="text-2xl">Item not found</h1>
        <Link to={PATHS.items} className="mt-6 inline-block text-sm text-muted hover:text-paper">
          Back to menu
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="px-6 py-12 sp:px-12">
      <Link
        to={PATHS.items}
        className="mb-10 inline-flex items-center gap-1 text-xs tracking-wide text-muted transition-colors hover:text-paper"
      >
        <ChevronLeft size={16} strokeWidth={1.5} />
        BACK TO MENU
      </Link>

      <div className="grid gap-10 sp:grid-cols-2 sp:gap-16">
        <div className="aspect-3/4 overflow-hidden bg-line">
          <img
            src={product.photo}
            alt={product.name}
            onError={(e) => {
              e.currentTarget.src = '/placeholder.jpg'
            }}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl">{product.name}</h1>
          <p className="mt-4 text-xl text-muted">${Number(product.price).toFixed(2)}</p>
          <p className="mt-8 text-sm leading-relaxed text-muted">{product.desc}</p>

          <button
            onClick={handleAddToCart}
            className="mt-12 border border-paper py-4 text-xs tracking-widest transition-colors hover:bg-paper hover:text-ink"
          >
            {isAdded ? 'ADDED TO CART' : 'ADD TO CART'}
          </button>
        </div>
      </div>
    </div>
  )
}
