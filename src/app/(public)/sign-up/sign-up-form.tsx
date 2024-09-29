'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { LuLoader2 } from 'react-icons/lu'
import { toast } from 'sonner'
import { z } from 'zod'

import LeeSin from '@/assets/icons/lee_sin.webp'
import LeonaIcon from '@/assets/icons/leona_toast.webp'
import { Input } from '@/components/input'
import { Modal } from '@/components/modal'
import { validateFormFieldsFilled } from '@/utils/validateFormFieldsFilled'

import { signUpAction } from './actions'

const SignUpFormSchema = z.object({
  name: z
    .string({ message: 'Please, provide a valid name.' })
    .min(3, { message: 'Please, name must contain at least 3 characters.' }),
  email: z.string().email({ message: 'Please, provide a valid e-mail.' }),
  username: z
    .string({ message: 'Please, provide a valid name.' })
    .min(6, { message: 'Please, username must contain at least 6 characters' }),
  password: z
    .string({ message: 'Please, provide a valid name.' })
    .min(6, { message: 'Please, password must contain at least 6 characters' }),
})

type SignUp = z.infer<typeof SignUpFormSchema>

export function SignUpForm() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,

    formState: { isSubmitting, errors },
    watch,
  } = useForm<SignUp>({
    resolver: zodResolver(SignUpFormSchema),
  })

  const fields = watch(['name', 'email', 'username', 'password'])

  const fieldsFilled = validateFormFieldsFilled(fields)

  async function submit(data: SignUp) {
    const response: void | { message: string; status: number } =
      await signUpAction(data)

    setIsOpen(true)
    setTimeout(() => {
      router.replace('/sign-in')
    }, 5000)
    if (response) {
      toast.error(response.message, {
        position: 'top-right',
        classNames: {
          error: 'bg-red-300',
          title: 'text-white-100',
        },
        icon: (
          <Image src={LeonaIcon} alt="Leona" className="h-11 w-11 max-w-fit" />
        ),
      })
    }
  }

  const onToggle = useCallback(() => {
    setIsOpen((state) => !state)
  }, [])

  return (
    <>
      <Modal
        isOpen={isOpen}
        handleClose={onToggle}
        className="h-[420px] w-full max-w-[720px] rounded-lg bg-black/65 shadow-lg"
      >
        <div className="flex h-full flex-col items-center justify-center px-4">
          <Image src={LeeSin} alt="Lee-sin" />
          <strong className="text-center font-league font-bold text-white-100">
            Account created successfully, you will be redirected in 5 seconds,
            good luck summoner.
          </strong>
        </div>
      </Modal>

      <motion.form
        onSubmit={handleSubmit(submit)}
        className="w-full max-w-[360px] space-y-6 bg-white-100/90 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        exit={{
          opacity: 0,
          transition: {
            ease: 'easeIn',
            duration: 0.15,
          },
        }}
      >
        <strong className="mb-8 block text-center font-league text-2xl font-semibold text-blue-700">
          Sign Up
        </strong>
        <div className="space-y-4">
          <div>
            <Input
              type="text"
              id="name"
              placeholder=" "
              htmlFor="name"
              labelText="Name"
              dataTestId="name"
              {...register('name')}
            />

            {errors.name?.message && (
              <span className="font-league text-sm font-bold text-red-200">
                {errors.name.message}
              </span>
            )}
          </div>
          <div>
            <Input
              type="email"
              id="email"
              placeholder=" "
              htmlFor="email"
              labelText="E-mail"
              dataTestId="email"
              {...register('email')}
            />
            {errors.email?.message && (
              <span className="font-league text-sm font-bold text-red-200">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <Input
              type="text"
              id="text"
              placeholder=" "
              htmlFor="username"
              labelText="username"
              dataTestId="username"
              {...register('username')}
            />
            {errors.username?.message && (
              <span className="font-league text-sm font-bold text-red-200">
                {errors.username.message}
              </span>
            )}
          </div>
          <div>
            <Input
              type="password"
              id="password"
              placeholder=" "
              htmlFor="password"
              dataTestId="password"
              labelText="Password"
              {...register('password')}
            />
            {errors.password?.message && (
              <span className="font-league text-sm font-bold text-red-200">
                {errors.password.message}
              </span>
            )}
          </div>
        </div>

        <button
          disabled={!fieldsFilled}
          className="group mt-[70px] flex h-[44px] w-full items-center justify-center rounded-lg bg-red-200 font-league text-sm font-bold uppercase text-white-100 disabled:bg-white-200"
        >
          {isSubmitting ? (
            <LuLoader2 className="size-4 animate-spin" />
          ) : (
            'create account'
          )}
        </button>
      </motion.form>
    </>
  )
}
