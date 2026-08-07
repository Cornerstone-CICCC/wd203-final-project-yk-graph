import { ChevronLeft, ChevronRight } from 'lucide-react'

type Props = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className="mt-16 flex items-center justify-center gap-6" aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="text-muted transition-colors hover:text-paper disabled:opacity-30 disabled:hover:text-muted"
      >
        <ChevronLeft size={20} strokeWidth={1.5} />
      </button>

      <div className="flex gap-4">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? 'page' : undefined}
            className={
              page === currentPage
                ? 'text-sm text-paper underline underline-offset-4'
                : 'text-sm text-muted transition-colors hover:text-paper'
            }
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="text-muted transition-colors hover:text-paper disabled:opacity-30 disabled:hover:text-muted"
      >
        <ChevronRight size={20} strokeWidth={1.5} />
      </button>
    </nav>
  )
}
