import { api, type ErrorType } from './api-client'

type GetProfile = ErrorType & {
  user?: {
    id: string
    nickname: string | null
    summonerIcon: string | null
    level: number
    percentage: number
    rp: number
    essence: number
  }
}

export async function getProfile(): Promise<GetProfile> {
  const response = await api<GetProfile>('profile', {
    method: 'GET',
  })

  if (response.data?.user) {
    return response.data
  }

  return {
    message: response.data?.message ?? '',
    status: response.data?.status ?? 400,
  }
}
