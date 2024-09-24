import { api } from './api-client'
import { httpErrorHandler } from './http-error-handler'

export type HttpSignUpParams = {
  name: string
  email: string
  username: string
  password: string
}

type HttpSignUpResponse = void | { message: string; status: number }

export async function httpSignUp({
  name,
  email,
  username,
  password,
}: HttpSignUpParams): Promise<HttpSignUpResponse> {
  try {
    await api
      .post('create-account', {
        json: {
          name,
          email,
          username,
          password,
        },
      })
      .json()
  } catch (error: unknown) {
    return await httpErrorHandler(error)
  }
}
