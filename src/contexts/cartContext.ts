import { createContext } from 'react'

import type { Product } from '../types/product'

export type CartItem = {
  id: number
  quantity: number
}

export type CartContextValue = {
  items: CartItem[]
  totalCount: number
  totalPrice: number
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)
