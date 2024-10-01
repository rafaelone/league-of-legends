import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

type HomeNewsCardProps = ComponentProps<typeof Link> & {
  children: ReactNode
  description: string
}

export function HomeNewsCard({
  children,
  description,
  ...rest
}: HomeNewsCardProps) {
  return (
    <li className="max-w-[300px] flex-1">
      <Link {...rest}>
        <div className="overflow-hidden border border-grey-300">{children}</div>
        <span className="mt-2 font-league text-xs font-bold text-gold-200">
          {description}
        </span>
      </Link>
    </li>
  )
}
