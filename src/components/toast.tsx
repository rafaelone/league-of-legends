import Image from 'next/image'
import type { ReactNode } from 'react'

import LeonaToast from '@/assets/icons/leona_toast.webp'

type ToastProps = {
  type: 'fail' | 'success'
  children: ReactNode
}

export function Toast({ type, children }: ToastProps) {
  let Icon = null

  switch (type) {
    case 'fail':
      Icon = <Image src={LeonaToast} alt="Leona" className="size-11" />
      break
    case 'success':
      Icon = <Image src={LeonaToast} alt="Leona" className="size-11" />
      break
  }

  return (
    <div>
      {Icon}
      {children}
    </div>
  )
}
