import { useCart } from './useCart'
import { useProducts } from './useProducts'

export function useCartProducts() {
  const { items } = useCart()
  const { products } = useProducts()

  return items.flatMap((item) => {
    const product = products.find((p) => p.id === item.id)
    return product ? [{ product, quantity: item.quantity }] : []
  })
}
