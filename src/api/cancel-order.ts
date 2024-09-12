import { api } from '@/lib/api'

export interface cancelOrdersParams {
  orderId: string
}

export async function cancelOrder({ orderId }: cancelOrdersParams) {
  await api.patch(`/orders/${orderId}/cancel`)
}
