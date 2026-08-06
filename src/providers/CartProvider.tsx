import { useEffect, useState, type ReactNode } from 'react'

import { CartContext, type CartItem } from '../contexts/cartContext'
import { useProducts } from '../hooks/useProducts'
import type { Product } from '../types/product'

const STORAGE_KEY = 'cart'

function loadFromStorage(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as CartItem[]) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadFromStorage)
  const { products } = useProducts()

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addToCart = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)

      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }

      return [...prev, { id: product.id, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => setItems([])

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0)

  const totalPrice = items.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id)
    return product ? sum + Number(product.price) * item.quantity : sum
  }, 0)

  return (
    <CartContext value={{ items, totalCount, totalPrice, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext>
  )
}
