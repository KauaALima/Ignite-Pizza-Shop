import { http, HttpResponse } from 'msw'

import { dispatchOrderParams } from '../disparch-order'

export const dispatchOrderMock = http.patch<dispatchOrderParams, never, never>(
  '/orders/:orderId/dispatch',
  async ({ params }) => {
    if (params.orderId === 'error-order-id') {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, { status: 204 })
  },
)
