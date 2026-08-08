import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useHashScroll() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    const element = document.getElementById(hash.slice(1))
    element?.scrollIntoView({ behavior: 'smooth' })
  }, [hash])
}
