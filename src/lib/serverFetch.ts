import { getAuthToken } from './getAuthToken'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function serverFetch<T = any>(endpoint: string): Promise<T> {
  const headers: Record<string, string> = {}
  const token = getAuthToken()
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    cache: 'no-store',
    headers,
  });

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message || 'Something went wrong');
  }

  return json.data as T;
}
