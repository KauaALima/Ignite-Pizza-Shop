import { http, HttpResponse } from 'msw'

import type { getMonthCanceledOrdersAmountResponse } from '../get-month-canceled-orders-amount'

export const getMonthCaceledOrdersAmountMock = http.get<
  never,
  never,
  getMonthCanceledOrdersAmountResponse
>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 5,
    diffFromLastMonth: -5,
  })
})
