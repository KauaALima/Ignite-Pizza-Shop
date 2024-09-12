import { http, HttpResponse } from 'msw'

import { getPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  getPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 1', amount: 2 },
    { product: 'Pizza 2', amount: 5 },
    { product: 'Pizza 3', amount: 3 },
    { product: 'Pizza 4', amount: 10 },
    { product: 'Pizza 5', amount: 8 },
    { product: 'Pizza 6', amount: 7 },
    { product: 'Pizza 7', amount: 9 },
  ])
})
