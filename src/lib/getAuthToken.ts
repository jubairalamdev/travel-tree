import { authClient } from './auth-client'

export async function getAuthToken(): Promise<string | null> {
  try {
    const { data } = await authClient.getSession()
    return data?.session?.token || null
  } catch {
    return null
  }
}
