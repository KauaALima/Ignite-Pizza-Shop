import { api } from '@/lib/api'

export interface SingInBody {
  email: string
}

export async function singIn({ email }: SingInBody) {
  await api.post('/authenticate', { email })
}
