import { authClient } from './auth-client'

let cachedToken: string | null = null
let cachedAt = 0
const CACHE_TTL = 60_000

export async function getAuthToken(): Promise<string | null> {
  if (typeof document === 'undefined') return null

  if (cachedToken && Date.now() - cachedAt < CACHE_TTL) {
    return cachedToken
  }

  try {
    const { data } = await authClient.getSession()
    if (data?.session?.token) {
      cachedToken = data.session.token
      cachedAt = Date.now()
      return cachedToken
    }
  } catch {}

  return null
}
