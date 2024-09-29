import { api } from './api-client'

type GetProfile = {
  user: {
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
  const result = await api.get('profile').json<GetProfile>()

  return result
}
