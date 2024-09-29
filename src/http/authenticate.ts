import { api } from './api-client'
import { httpErrorHandler } from './http-error-handler'

export type AuthenticateParams = {
  username: string
  password: string
}

type AuthenticateResponse = {
  token?: string
  message?: string
  status?: number
}

export async function authenticate({
  username,
  password,
}: AuthenticateParams): Promise<AuthenticateResponse> {
  try {
    const response = await api
      .post('authenticate', {
        json: {
          username,
          password,
        },
      })
      .json<AuthenticateResponse>()

    return response
  } catch (error: unknown) {
    return await httpErrorHandler(error)
  }
}
