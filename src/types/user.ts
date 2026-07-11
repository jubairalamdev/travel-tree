export interface User {
  id: string
  name: string
  email: string
  avatar: string
  role: 'user' | 'admin' | 'guide'
  createdAt: string
  updatedAt: string
}

export interface AuthCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  user: User
  token: string
  refreshToken: string
}

export interface AuthError {
  message: string
  code?: string
  field?: string
}

export interface LoginFormData {
  email: string
  password: string
}

export interface RegisterFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}
