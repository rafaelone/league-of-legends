import Image from 'next/image'
import { toast as toastSonner } from 'sonner'

import LeonaToast from '@/assets/icons/leona_toast.webp'

type ToastProps = {
  type: 'error' | 'success'
  message: string
}

export function toast({ type, message }: ToastProps) {
  let Icon = null

  switch (type) {
    case 'error':
      Icon = (
        <Image
          src={LeonaToast}
          alt="Leona"
          className="size-11"
          data-testid="toast"
        />
      )
      break
    default:
      Icon = (
        <Image
          src={LeonaToast}
          alt="Leona"
          className="size-11"
          data-testid="toast"
        />
      )
      break
  }

  toastSonner[type](message, {
    position: 'top-right',
    classNames: {
      error: 'bg-red-300',
      title: 'text-white-100',
    },
    icon: Icon,
  })
}
