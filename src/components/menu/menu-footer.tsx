import Image from 'next/image'

import BugIcon from '@/assets/images/aside-icons/bug.png'
import ChatIcon from '@/assets/images/aside-icons/chat.png'
import MissionsIcon from '@/assets/images/aside-icons/missions.png'

export function MenuFooter() {
  return (
    <footer className="flex h-11 items-center">
      <div className="flex h-full gap-2">
        <button className="flex h-full w-11 items-center justify-center border border-gold-200 brightness-95">
          <Image src={ChatIcon} width={22} height={22} alt="chat" />
        </button>
        <button className="flex h-full w-11 items-center justify-center border border-gold-200">
          <Image src={MissionsIcon} width={22} height={22} alt="mission" />
        </button>
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <span className="flex-1 text-center text-xs font-bold tracking-wider text-grey-100">
          V14.18
        </span>
        <button className="flex h-full w-11 items-center justify-center border border-gold-200">
          <Image src={BugIcon} width={22} height={22} alt="bug" />
        </button>
      </div>
    </footer>
  )
}
