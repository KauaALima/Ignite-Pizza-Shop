import { api } from '@/lib/api'

export interface approveOrderParams {
  orderId: string
}

export async function approveOrder({ orderId }: approveOrderParams) {
  await api.patch(`/orders/${orderId}/approve`)
}
