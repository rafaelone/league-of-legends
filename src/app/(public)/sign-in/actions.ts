'use server'

import { cookies } from 'next/headers'

import type { ErrorType } from '@/http/api-client'
import { authenticate, type AuthenticateParams } from '@/http/authenticate'

type signInActionParams = AuthenticateParams

type signInActionResponse = void | ErrorType

export async function signInAction(
  data: signInActionParams,
): Promise<signInActionResponse> {
  'use server'

  const response = await authenticate(data)

  if (response.token) {
    cookies().set('token', response.token, {
      maxAge: 60 * 60 * 24 * 7, // 7 dias
      path: '/',
    })
  }

  return {
    message: response.message ?? '',
    status: response.status ?? 400,
  }
}
