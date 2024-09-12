import { api } from '@/lib/api'

export interface deliverOrderParams {
  orderId: string
}

export async function deliverOrder({ orderId }: deliverOrderParams) {
  await api.patch(`/orders/${orderId}/deliver`)
}
