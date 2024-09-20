import { FaApple, FaFacebook, FaPlaystation, FaXbox } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { tv } from 'tailwind-variants'

type SocialButtonProps = {
  type: 'Facebook' | 'Google' | 'Apple' | 'Xbox' | 'PSN'
}

const SocialButtonVariants = tv({
  base: 'flex h-8 flex-1 items-center justify-center rounded-lg bg-white-200 grayscale group hover:grayscale-0 transition-all duration-150 ',
  variants: {
    variant: {
      Facebook: 'hover:bg-blue-300',
      Google: 'hover:bg-white-100',
      Apple: 'hover:bg-dark-100',
      Xbox: 'hover:bg-green-100',
      PSN: 'hover:bg-blue-400',
    },
  },
})

export function SocialButton({ type }: SocialButtonProps) {
  let icon = null

  switch (type) {
    case 'Facebook':
      icon = <FaFacebook size={24} className="group-hover:text-white-100" />
      break
    case 'Google':
      icon = <FcGoogle size={24} />
      break
    case 'Apple':
      icon = <FaApple size={24} className="group-hover:text-white-100" />
      break
    case 'Xbox':
      icon = <FaXbox size={24} className="group-hover:text-white-100" />
      break
    case 'PSN':
      icon = <FaPlaystation size={24} className="group-hover:text-white-100" />
      break
    default:
      icon = null
      break
  }

  return (
    <button className={SocialButtonVariants({ variant: type })}>{icon}</button>
  )
}
