import Image from 'next/image'

import EssenceIcon from '@/assets/images/header-icons/blue-essence.png'
import CraftIcon from '@/assets/images/header-icons/booty.png'
import CollectionIcon from '@/assets/images/header-icons/collection.png'
import RpIcon from '@/assets/images/header-icons/riot-points.png'
import StoreIcon from '@/assets/images/header-icons/shop.png'
import { auth } from '@/auth/auth'

import { NavLink } from './nav-link'
import { PlayButton } from './play-button'

export async function Header() {
  const { user } = await auth()

  return (
    <header className="flex h-[90px] w-full items-center border-b border-b-gray-500">
      <div className="mx-auto flex h-[90px] w-full max-w-[1440px] items-center gap-5 pl-1 pr-11">
        <PlayButton />
        <div className="z-10 flex h-full flex-1 items-center justify-between">
          <nav className="flex h-full items-center">
            <ul className="flex h-full gap-8">
              <li className="group flex h-full cursor-pointer items-center transition-all">
                <NavLink
                  href="/"
                  prefetch
                  className="flex h-full items-center font-league text-md font-bold uppercase tracking-[2px] text-gold-200 group-hover:text-gold-100 group-hover:brightness-105 data-[current=true]:bg-navLink data-[current=true]:text-gold-100"
                >
                  Início
                </NavLink>
              </li>
              <li className="group flex h-full cursor-pointer items-center transition-all">
                <NavLink
                  href="/tft"
                  prefetch
                  className="flex h-full items-center font-league text-md font-bold uppercase tracking-[2px] text-gold-200 group-hover:text-gold-100 group-hover:brightness-105 data-[current=true]:bg-navLink data-[current=true]:text-gold-100"
                >
                  TFT
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="relative flex h-full items-center gap-6">
            <button className="h-full cursor-pointer font-league text-md font-bold uppercase transition-all hover:brightness-150">
              <Image
                src={CollectionIcon}
                alt="Collection"
                className="h-5 w-6"
                quality={80}
              />
            </button>
            <div className="h-[40px] w-[2px] bg-gradient-to-b from-dark-100 from-[10%] via-yellow-500 to-dark-100" />
            <button className="h-full cursor-pointer font-league text-md font-bold uppercase transition-all hover:brightness-150">
              <Image
                src={CraftIcon}
                alt="Craft"
                className="h-5 w-6"
                quality={80}
              />
            </button>
            <button className="h-full cursor-pointer font-league text-md font-bold uppercase transition-all hover:brightness-150">
              <Image
                src={StoreIcon}
                alt="Store"
                className="h-5 w-6"
                quality={80}
              />
            </button>
            <div className="h-[40px] w-[2px] -translate-y-1 bg-gradient-to-b from-dark-100 from-[10%] via-yellow-500 to-dark-100" />
            <div className="flex h-full flex-col justify-center gap-1">
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
                <strong className="font-league text-sm font-bold text-white-100">
                  {user.rp}
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
                <strong className="font-league text-sm font-bold text-white-100">
                  {user.essence}
                </strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
