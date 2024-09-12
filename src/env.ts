import { z } from 'zod'

const envShema = z.object({
  MODE: z.enum(['production', 'development', 'test']),
  VITE_API_URL: z.string(),
  VITE_API_DELAY: z.string().transform((value) => value === 'true'),
})

export const env = envShema.parse(import.meta.env)
