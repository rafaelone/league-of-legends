import Image from 'next/image'

import SummonerIcon from '@/assets/icons/summoner-icon.webp'

import { MenuPlayerLevel } from './menu-player-level'
import { MenuStatus } from './menu-status'

export function MenuPlayer() {
  return (
    <div className="flex h-[100px] w-full items-center gap-2 border-b border-b-gray-500 px-3">
      <button type="button" className="relative h-20 w-20 hover:brightness-125">
        <svg className="absolute inset-0" viewBox="0 0 36 36">
          <circle
            className="text-yellow-500"
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
            stroke-width="2"
            fill="transparent"
            strokeDasharray="100"
            // stroke-dashoffset="20"  -> barra de progresso
            strokeDashoffset="20"
            r="14"
            cx="18"
            cy="18"
          />
        </svg>

        <svg className="absolute inset-0" viewBox="0 0 36 36">
          <circle
            className="text-yellow-500"
            stroke="currentColor"
            strokeWidth="2"
            // stroke-width="2"  <!-- Largura da borda interna -->
            fill="transparent"
            // r="12"  <!-- Raio menor para a borda interna -->
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

      <div className="flex flex-col items-center justify-center">
        <strong className="font-poppins text-md text-white-100">OhKiDó</strong>
        <MenuStatus />
      </div>
    </div>
  )
}
