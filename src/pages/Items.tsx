import { useEffect, useState } from 'react'

import type { Product } from '../types/product'

export default function Items() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetch('/products.json')
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`)
        const data = await res.json()
        setProducts(data.products)
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Unknown error')
      } finally {
        setIsLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (isLoading) return <p className="p-8">Loading...</p>
  if (error) return <p className="p-8 text-red-600">{error}</p>

  return (
    <div className="p-8">
      <h1 className="mb-6 text-3xl font-bold">Menu</h1>
      <p className="mb-4 text-sm text-gray-500">{products.length} items</p>
      <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4">
            <p className="font-bold">{product.name}</p>
            <p>${Number(product.price).toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
