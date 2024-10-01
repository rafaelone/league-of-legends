import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const ButtonVariants = tv({
  base: 'font-league text-md h-10 transition-all hover:text-gold-200 hover:border-gold-200 text-center bg-grey-400 font-medium text-grey-100  border-2 border-grey-100',
  variants: {
    variant: {
      lg: 'max-w-[257px] w-full',
      md: 'max-w-[200px] w-full',
      'md-brightness':
        'max-w-[200px] w-full uppercase text-gold-200 border-gold-200',
    },
  },
  defaultVariants: {
    variant: 'lg',
  },
})

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof ButtonVariants> & {
    text: string
  }

export function Button({ text, variant, ...rest }: ButtonProps) {
  return (
    <button className={ButtonVariants({ variant })} {...rest}>
      <span className="flex h-full w-full items-center justify-center border-[3px] border-dark-100">
        {text}
      </span>
    </button>
  )
}
