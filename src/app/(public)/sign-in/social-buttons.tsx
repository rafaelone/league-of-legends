import { FaApple, FaFacebook, FaPlaystation, FaXbox } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { tv } from 'tailwind-variants'

type SocialButtonProps = {
  type: 'Facebook' | 'Google' | 'Apple' | 'Xbox' | 'PSN'
}

const SocialButtonVariants = tv({
  base: 'flex h-8 flex-1 items-center justify-center rounded-lg   group  transition-all duration-150 ',
  variants: {
    variant: {
      Facebook: 'bg-[#1A78F2]',
      Google: 'bg-white-100 border-[2px]',
      Apple: 'bg-dark-100',
      Xbox: 'bg-[#0F7C0F]',
      PSN: 'bg-[#00449C]',
    },
  },
})

export function SocialButton({ type }: SocialButtonProps) {
  let icon = null

  switch (type) {
    case 'Facebook':
      icon = <FaFacebook size={24} className="text-white-100" />
      break
    case 'Google':
      icon = <FcGoogle size={24} />
      break
    case 'Apple':
      icon = <FaApple size={24} className="text-white-100" />
      break
    case 'Xbox':
      icon = <FaXbox size={24} className="text-white-100" />
      break
    case 'PSN':
      icon = <FaPlaystation size={24} className="text-white-100" />
      break
    default:
      icon = null
      break
  }

  return (
    <button className={SocialButtonVariants({ variant: type })}>{icon}</button>
  )
}
