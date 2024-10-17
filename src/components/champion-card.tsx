import Image from 'next/image'

import EssenceIcon from '@/assets/images/header-icons/blue-essence.png'
import RpIcon from '@/assets/images/header-icons/riot-points.png'

type ChampionCardProps = {
  imageUrl: string
  name: string
  priceInRp: number
  priceInEssence: number
}

export function ChampionCard({
  imageUrl,
  name,
  priceInRp,
  priceInEssence,
}: ChampionCardProps) {
  return (
    <li className="relative flex h-[236px] w-[236px] flex-col items-center justify-end border border-grey-300">
      <Image
        src={imageUrl}
        alt={name}
        width={236}
        height={236}
        quality={90}
        className="absolute h-full object-cover"
      />
      <span className="z-10 mb-1 font-league text-xl font-bold text-gold-100">
        {name}
      </span>
      <div className="z-10 mb-2 flex w-full items-center justify-center gap-4">
        <span className="flex items-center gap-1 font-league text-sm text-gold-200">
          <Image
            src={EssenceIcon}
            width={14}
            height={14}
            alt="price in essence"
          />{' '}
          {priceInEssence}
        </span>
        <span className="flex items-center gap-1 font-league text-sm text-gold-200">
          <Image src={RpIcon} width={14} height={14} alt="price in rp" />{' '}
          {priceInRp}
        </span>
      </div>
    </li>
  )
}
