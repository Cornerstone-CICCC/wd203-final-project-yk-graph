export const PATHS = {
  home: '/',
  items: '/items',
  itemDetail: (id: number | string) => `/items/${id}`,
  cart: '/cart',
  checkout: '/checkout',
  locations: '/locations',
} as const
