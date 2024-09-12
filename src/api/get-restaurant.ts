import { api } from '@/lib/api'

export interface getRestaurantResponse {
  name: string
  id: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getRestaurant() {
  const response = await api.get<getRestaurantResponse>('/managed-restaurant')

  return response.data
}
