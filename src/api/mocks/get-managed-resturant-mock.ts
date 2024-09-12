import { http, HttpResponse } from 'msw'

import { getRestaurantResponse } from '../get-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  getRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'Pizza Shop',
    description: 'Custom restaurant description',
    managerId: 'custom-user-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
