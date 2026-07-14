export function getAuthToken(): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(/(?:^|;\s*)better-auth\.session_token=([^;]*)/)
  return match ? match[1] : null
}
