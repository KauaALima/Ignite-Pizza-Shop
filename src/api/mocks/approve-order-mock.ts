import { http, HttpResponse } from 'msw'

import { approveOrderParams } from '../approve-order'

export const approveOrderMock = http.patch<approveOrderParams, never, never>(
  '/orders/:orderId/approve',
  async ({ params }) => {
    if (params.orderId === 'error-order-id') {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, { status: 204 })
  },
)
