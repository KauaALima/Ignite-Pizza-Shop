import { api } from '@/lib/api'

export async function SignOut() {
  await api.post('/sign-out')
}
