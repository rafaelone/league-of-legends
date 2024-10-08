'use client'
import Image from 'next/image'
import { FaCircle } from 'react-icons/fa'
import { tv } from 'tailwind-variants'

import ChatIcon from '@/assets/images/aside-icons/chat.png'
import SummonerIcon from '@/assets/images/aside-icons/summoner-icon.webp'

const CircleVariants = tv({
  base: 'rounded-full border-2 transition-colors absolute bottom-0 right-0 ',
  variants: {
    variant: {
      online: 'border-green-100 text-green-200',
      absent: 'text-red-300 border-red-200',
      inQueue: 'border-[#0AC5E1] text-blue-500',
    },
  },
  defaultVariants: {
    variant: 'online',
  },
})

type MenuFriendImageProps = {
  status?: 'inMobile' | 'absent' | 'online' | 'inQueue'
}

export function MenuFriendImage({ status = 'absent' }: MenuFriendImageProps) {
  let icon = null

  switch (status) {
    case 'inMobile':
      icon = (
        <Image
          src={ChatIcon}
          alt="icon chat"
          width={12}
          height={12}
          className="absolute bottom-0 right-0 brightness-90"
        />
      )
      break
    case 'absent':
      icon = (
        <FaCircle size={12} className={CircleVariants({ variant: 'absent' })} />
      )
      break
    case 'online':
      icon = (
        <FaCircle size={12} className={CircleVariants({ variant: 'online' })} />
      )
      break
    case 'inQueue':
      icon = (
        <FaCircle
          size={12}
          className={CircleVariants({ variant: 'inQueue' })}
        />
      )
      break
    default:
      icon = null
      break
  }

  return (
    <div className="relative">
      <Image
        src={SummonerIcon}
        alt="Summoner Icon"
        width={40}
        height={40}
        className={'size-10 rounded-full border-2 border-gold-200'}
      />
      {icon}
    </div>
  )
}
