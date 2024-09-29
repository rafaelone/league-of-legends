'use server'

import { cookies } from 'next/headers'

import { authenticate, type AuthenticateParams } from '@/http/authenticate'

type signInActionParams = AuthenticateParams

type signInActionResponse = void | { message: string; status: number }

export async function signInAction(
  data: signInActionParams,
): Promise<signInActionResponse> {
  'use server'

  const response = await authenticate(data)

  console.log(response)

  if (response.token) {
    cookies().set('token', response.token, {
      maxAge: 60 * 60 * 24 * 7, // 7 dias
      path: '/',
    })
    return
  }

  return {
    message: response.message ?? '',
    status: response.status ?? 400,
  }
}
