import { api, type ErrorType } from './api-client'

export type AuthenticateParams = {
  username: string
  password: string
}

type AuthenticateResponse = ErrorType & {
  token?: string
}

export async function authenticate({
  username,
  password,
}: AuthenticateParams): Promise<AuthenticateResponse> {
  const response = await api<{
    token: string
    message?: string
    status?: number
  }>('/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })

  if (response.data?.token) {
    return {
      token: response.data.token,
    }
  }

  return {
    message: response.data?.message ?? '',
    status: response.data?.status ?? 400,
  }
}
