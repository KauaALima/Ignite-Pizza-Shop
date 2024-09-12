import { api } from '@/lib/api'

export interface dispatchOrderParams {
  orderId: string
}

export async function dispatchOrder({ orderId }: dispatchOrderParams) {
  await api.patch(`/orders/${orderId}/dispatch`)
}
