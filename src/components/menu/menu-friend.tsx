import { tv } from 'tailwind-variants'

import { MenuFriendImage } from './menu-friend-image'

type MenuFriendProps = {
  status?: 'inMobile' | 'absent' | 'online' | 'inQueue'
  name: string
}

const MenuFriendStatusVariants = tv({
  base: 'font-league text-xs font-normal capitalize tracking-widest',
  variants: {
    variant: {
      online: ' text-green-100',
      absent: 'text-red-200',
      inQueue: 'text-[#0AC5E1]',
      inMobile: 'text-grey-100',
    },
  },
  defaultVariants: {
    variant: 'absent',
  },
})

export function MenuFriend({ name, status = 'absent' }: MenuFriendProps) {
  return (
    <li>
      <button className="flex items-center gap-3">
        <MenuFriendImage status={status} />
        <div className="flex flex-col items-start">
          <strong
            className={
              'font-league text-md font-bold tracking-widest text-grey-100'
            }
          >
            {name}
          </strong>
          <span
            className={MenuFriendStatusVariants({
              variant: status,
            })}
          >
            {status}
          </span>
        </div>
      </button>
    </li>
  )
}
