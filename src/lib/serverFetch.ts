const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function serverFetch<T = any>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    cache: 'no-store',
  });

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message || 'Something went wrong');
  }

  return json.data as T;
}
