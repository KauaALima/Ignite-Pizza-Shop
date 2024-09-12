import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { approveOrderMock } from './approve-order-mock'
import { cancelOrderMock } from './cancel-order-mock'
import { deliverOrderMock } from './deliver-order-mock'
import { dispatchOrderMock } from './dispatch-order-mock'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period'
import { getDayOrdersAmountMock } from './get-days-orders-amount-mock'
import { getManagedRestaurantMock } from './get-managed-resturant-mock'
import { getMonthOrdersAmountMock } from './get-month-orders-amount'
import { getMonthCaceledOrdersAmountMock } from './get-month-orders-cancelel-amount'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { getOrdersDetailsMock } from './get-orders-details-mock'
import { getOrdersMock } from './get-orders-mock'
import { getPopularProductsMock } from './get-popular-prodocts'
import { getProfileMock } from './get-profile-mock'
import { resgisterRestaurantMock } from './register-restaurants-mock'
import { signInMock } from './sign-in-mock'
import { updateProfileMock } from './update-profile-mock'

export const worker = setupWorker(
  signInMock,
  resgisterRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCaceledOrdersAmountMock,
  getMonthRevenueMock,
  getPopularProductsMock,
  getDailyRevenueInPeriodMock,
  getOrdersMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
