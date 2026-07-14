import { getAuthToken } from './getAuthToken'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function serverMutation<T = any>(
  endpoint: string,
  data: Record<string, any>,
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'POST'
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }
  const token = getAuthToken()
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers,
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message || 'Something went wrong');
  }

  return json.data as T;
}
