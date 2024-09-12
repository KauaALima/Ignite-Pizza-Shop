import { api } from '@/lib/api'

export interface getDayOrdersAmountResponse {
  amount: number
  diffFromYesterday: number
}

export async function getDayOrdersAmount() {
  const response = await api.get<getDayOrdersAmountResponse>(
    '/metrics/day-orders-amount',
  )

  return response.data
}
