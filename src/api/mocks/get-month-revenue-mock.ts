import { http, HttpResponse } from 'msw'

import { getMonthRevenueResponse } from '../get-month-avenue'

export const getMonthRevenueMock = http.get<
  never,
  never,
  getMonthRevenueResponse
>('/metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 20000,
    diffFromLastMonth: 10,
  })
})
