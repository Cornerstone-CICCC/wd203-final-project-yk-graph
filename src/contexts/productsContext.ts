import { createContext } from 'react'

import type { Product } from '../types/product'

export type ProductsContextValue = {
  products: Product[]
  isLoading: boolean
  error: string | null
}

export const ProductsContext = createContext<ProductsContextValue | null>(null)
