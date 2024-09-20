'use client'

import { useState } from 'react'
import { FaCircle } from 'react-icons/fa'
import { tv } from 'tailwind-variants'

const StatusVariants = tv({
  base: 'flex items-center gap-2 font-poppins text-sm font-medium transition-colors',
  variants: {
    variant: {
      online: 'text-green-300',
      offline: 'text-yellow-600',
    },
  },
  defaultVariants: {
    variant: 'online',
  },
})

const CircleVariants = tv({
  base: 'rounded-full border-2 transition-colors',
  variants: {
    variant: {
      online: 'border-green-100 text-green-200',
      offline: 'text-red-300 border-red-200',
    },
  },
  defaultVariants: {
    variant: 'online',
  },
})

export function MenuStatus() {
  const [status, setStatus] = useState<'online' | 'offline'>('online')

  function handleChangeStatus() {
    setStatus((state) => (state === 'online' ? 'offline' : 'online'))
  }

  return (
    <button
      onClick={handleChangeStatus}
      className={StatusVariants({ variant: status })}
    >
      <FaCircle size={16} className={CircleVariants({ variant: status })} />
      Online
    </button>
  )
}
