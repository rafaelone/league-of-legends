'use server'

import { httpSignUp, type HttpSignUpParams } from '@/http/sign-up'

type signUpActionParams = HttpSignUpParams

type signUpActionResponse = void | { message: string; status: number }

export async function signUpAction(
  data: signUpActionParams,
): Promise<signUpActionResponse> {
  'use server'
  const response = await httpSignUp(data)
  return response
}
