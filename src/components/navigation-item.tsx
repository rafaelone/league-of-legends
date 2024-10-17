'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ComponentProps } from 'react'

type NavigationItemProps = ComponentProps<typeof Link>

export function NavigationItem(props: NavigationItemProps) {
  const pathname = usePathname()

  const isCurrent = pathname === props.href.toString()

  return (
    <Link
      data-current={isCurrent}
      className="relative flex h-full items-center font-league text-sm font-bold uppercase tracking-[2px] text-gold-200 group-hover:text-gold-100 group-hover:brightness-105 data-[current=true]:text-gold-100 data-[current=true]:after:absolute data-[current=true]:after:-bottom-1 data-[current=true]:after:h-[1px] data-[current=true]:after:w-full data-[current=true]:after:bg-gradient-to-r data-[current=true]:after:from-dark-100 data-[current=true]:after:via-gold-100 data-[current=true]:after:to-dark-100"
      {...props}
    />
  )
}

;<div className="h-[40px] w-[2px] bg-gradient-to-b from-dark-100 from-[10%] via-yellow-500 to-dark-100" />
