import Image from 'next/image'

import SummonerIcon from '@/assets/images/aside-icons/summoner-icon.webp'
import { auth } from '@/auth/auth'

import { MenuPlayerLevel } from './menu-player-level'
import { MenuStatus } from './menu-status'

export async function MenuPlayer() {
  const { user } = await auth()

  return (
    <div className="flex h-[90px] w-full items-center gap-2 border-b border-b-gray-500 px-3 pb-1">
      <button type="button" className="relative h-20 w-20 hover:brightness-125">
        <svg className="absolute inset-0" viewBox="0 0 36 36">
          <circle
            className="text-gold-200"
            stroke="currentColor"
            strokeWidth="1"
            fill="transparent"
            r="16"
            cx="18"
            cy="18"
          />
        </svg>

        <svg className="absolute inset-0" viewBox="0 0 36 36">
          <circle
            className="text-[#168892]"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            r="14"
            cx="18"
            cy="18"
          />
        </svg>

        <svg
          className="absolute inset-0 rotate-[130deg] transform"
          viewBox="0 0 36 36"
        >
          <circle
            className="text-[#0C323D]"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray="100"
            strokeDashoffset={user.percentage}
            r="14"
            cx="18"
            cy="18"
          />
        </svg>

        <svg className="absolute inset-0" viewBox="0 0 36 36">
          <circle
            className="text-gold-500"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            r="12"
            cx="18"
            cy="18"
          />
        </svg>

        <div className="absolute inset-0 z-20 flex items-center justify-center text-lg font-semibold text-white-100">
          <Image
            src={SummonerIcon}
            alt="Summoner Icon"
            width={60}
            height={60}
            className="rounded-full"
          />
          <MenuPlayerLevel />
        </div>
      </button>

      <div className="flex flex-col items-start justify-center">
        <strong className="font-league text-md text-white-100">
          {user.nickname ?? 'unknown'}
        </strong>
        <MenuStatus />
      </div>
    </div>
  )
}
