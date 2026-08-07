import { useSearchParams } from 'react-router-dom'

import Pagination from '../components/product/Pagination'
import ProductCard from '../components/product/ProductCard'
import { useProducts } from '../hooks/useProducts'

const ITEMS_PER_PAGE = 8

export default function Items() {
  const { products, isLoading, error } = useProducts()
  const [searchParams, setSearchParams] = useSearchParams()

  if (isLoading) return <p className="p-8 text-sm text-muted">Loading...</p>
  if (error) return <p className="p-8 text-sm text-red-500">{error}</p>

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE)

  const rawPage = Number(searchParams.get('page'))
  const currentPage = Number.isInteger(rawPage) && rawPage >= 1 && rawPage <= totalPages ? rawPage : 1

  const start = (currentPage - 1) * ITEMS_PER_PAGE
  const visibleProducts = products.slice(start, start + ITEMS_PER_PAGE)

  const handlePageChange = (page: number) => {
    setSearchParams({ page: String(page) })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="px-6 py-12 sp:px-12 sp:py-20">
      <header className="mb-12">
        <h1 className="text-2xl tracking-wide">MENU</h1>
        <p className="mt-2 text-xs text-muted">{products.length} items</p>
      </header>

      <ul className="grid grid-cols-2 gap-x-6 gap-y-12 sp:grid-cols-4 sp:gap-x-8">
        {visibleProducts.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  )
}
