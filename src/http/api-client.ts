import { getCookie } from 'cookies-next'
import type { CookiesFn } from 'cookies-next/lib/types'

import { env } from '@/packages/envs'

type ApiResponse<T = unknown> = { data?: T; message?: string; status?: number }

export type ErrorType = {
  message?: string
  status?: number
}

export async function api<T>(
  path: string,
  init: RequestInit,
): Promise<ApiResponse<T>> {
  const baseUrl = env.NEXT_PUBLIC_API_URL ?? ''

  const url = new URL(path, baseUrl)

  let cookieStore: CookiesFn | undefined
  let Authorization = ''

  if (typeof window === 'undefined') {
    const { cookies: serverCookies } = await import('next/headers')
    cookieStore = serverCookies
  }
  const token = getCookie('token', { cookies: cookieStore })

  if (token) {
    Authorization = `Bearer ${token}`
  }

  const response = await fetch(url, {
    ...init,
    headers: {
      ...init.headers,
      Authorization,
    } as Record<string, string>,
  })

  if (response.ok) {
    const data = await response.json()
    return { data }
  }

  const error = await response.json()

  return {
    message: error.message,
    status: response.status,
  }
}
