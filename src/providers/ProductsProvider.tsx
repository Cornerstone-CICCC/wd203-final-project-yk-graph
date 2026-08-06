import { useEffect, useState, type ReactNode } from 'react'

import { ProductsContext } from '../contexts/productsContext'
import type { Product } from '../types/product'

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetch('/products.json')

        if (!res.ok) {
          throw new Error(`Failed to fetch products: ${res.status}`)
        }

        const data = await res.json()
        setProducts(data.products)
      } catch (error: unknown) {
        setError(error instanceof Error ? error.message : 'Unknown error')
      } finally {
        setIsLoading(false)
      }
    }

    loadProducts()
  }, [])

  return <ProductsContext value={{ products, isLoading, error }}>{children}</ProductsContext>
}
