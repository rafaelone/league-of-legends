import Image from 'next/image'
import Link from 'next/link'

import CollectionIcon from '@/assets/icons/collection.png'
import CraftIcon from '@/assets/icons/craft.png'
import EssenceIcon from '@/assets/icons/essence.png'
import RpIcon from '@/assets/icons/rp.png'
import StoreIcon from '@/assets/icons/store.png'

import { PlayButton } from './play-button'

export function Header() {
  return (
    <header className="flex h-[100px] w-full items-center border-b border-b-gray-500">
      <div className="flex h-full w-full items-center gap-5 pr-11">
        <PlayButton />
        <div className="z-10 flex flex-1 items-center justify-between">
          <nav className="flex items-center">
            <ul className="flex gap-8">
              <li className="h-full cursor-pointer font-poppins text-md font-bold uppercase text-yellow-500 transition-all hover:text-yellow-300 hover:brightness-105 hover:brightness-150">
                <Link href="/" prefetch>
                  Início
                </Link>
              </li>
              <li className="h-full cursor-pointer font-poppins text-md font-bold uppercase text-yellow-500 transition-all hover:text-yellow-300 hover:brightness-150">
                <Link href="tft" prefetch>
                  TFT
                </Link>
              </li>
            </ul>
          </nav>
          <div className="relative flex h-full items-center gap-6">
            <button className="h-full cursor-pointer font-poppins text-md font-bold uppercase transition-all hover:brightness-150">
              <Image
                src={CollectionIcon}
                alt="Collection"
                className="h-5 w-6"
                quality={80}
              />
            </button>
            <div className="h-[40px] w-[2px] bg-gradient-to-b from-dark-100 from-[10%] via-yellow-500 to-dark-100" />
            <button className="h-full cursor-pointer font-poppins text-md font-bold uppercase transition-all hover:brightness-150">
              <Image
                src={CraftIcon}
                alt="Craft"
                className="h-5 w-6"
                quality={80}
              />
            </button>
            <button className="h-full cursor-pointer font-poppins text-md font-bold uppercase transition-all hover:brightness-150">
              <Image
                src={StoreIcon}
                alt="Store"
                className="h-5 w-6"
                quality={80}
              />
            </button>
            <div className="h-[40px] w-[2px] -translate-y-1 bg-gradient-to-b from-dark-100 from-[10%] via-yellow-500 to-dark-100" />
            <div className="flex h-full flex-col items-center gap-1">
              <button
                type="button"
                className="flex w-[70px] items-center gap-2 transition-all hover:brightness-110"
              >
                <Image
                  src={RpIcon}
                  alt="rp"
                  quality={80}
                  height={20}
                  width={20}
                />
                <strong className="font-poppins text-sm font-bold text-white-100">
                  4230
                </strong>
              </button>
              <button
                type="button"
                className="flex w-[70px] items-center gap-2 transition-all hover:brightness-110"
              >
                <Image
                  src={EssenceIcon}
                  alt="Essence"
                  quality={80}
                  height={20}
                  width={20}
                />
                <strong className="font-poppins text-sm font-bold text-white-100">
                  100 Mil
                </strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
