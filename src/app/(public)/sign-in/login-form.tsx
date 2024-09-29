'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { FaArrowRight } from 'react-icons/fa'
import { LuLoader2 } from 'react-icons/lu'
import { z } from 'zod'

import RiotLogo from '@/assets/logo.png'
import { Input } from '@/components/input'
import { toast } from '@/components/toast'
import { validateFormFieldsFilled } from '@/utils/validateFormFieldsFilled'

import { signInAction } from './actions'
import { SocialButton } from './social-buttons'

const SignInFormSchema = z.object({
  username: z
    .string({ message: 'Please, provide a valid name.' })
    .min(6, { message: 'Please, username must contain at least 6 characters' }),
  password: z
    .string({ message: 'Please, provide a valid name.' })
    .min(6, { message: 'Please, password must contain at least 6 characters' }),
})

type SignIn = z.infer<typeof SignInFormSchema>

export function LoginForm() {
  const {
    register,
    handleSubmit,

    formState: { isSubmitting, errors },
    watch,
  } = useForm<SignIn>({
    resolver: zodResolver(SignInFormSchema),
  })

  const fields = watch(['username', 'password'])

  const fieldsFilled = validateFormFieldsFilled(fields)

  async function submit(data: SignIn) {
    const response: void | { message: string; status: number } =
      await signInAction(data)

    if (response) {
      toast({ type: 'error', message: response.message })
    }
  }

  return (
    <aside className="flex h-full w-[400px] flex-col items-center border-r border-gray-100 bg-white-100 py-6">
      <Image
        src={RiotLogo}
        width={150}
        height={150}
        priority
        alt="Riot Games"
        className="mx-auto my-[80px] block"
      />
      <motion.form
        onSubmit={handleSubmit(submit)}
        className="mx-auto flex w-full max-w-[300px] flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{
          opacity: 0,
          transition: {
            ease: 'easeIn',
            duration: 0.15,
          },
        }}
      >
        <strong className="mb-8 block text-center font-league text-2xl font-semibold text-blue-700">
          Sign In
        </strong>
        <div className="flex w-full flex-col space-y-6">
          <div>
            <Input
              id="username"
              placeholder=" "
              type="text"
              labelText="username"
              htmlFor="username"
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
              id="password"
              placeholder=" "
              type="password"
              labelText="password"
              htmlFor="password"
              {...register('password')}
            />
            {errors.password?.message && (
              <span className="font-league text-sm font-bold text-red-200">
                {errors.password.message}
              </span>
            )}
          </div>
        </div>
        <div className="mt-6 flex w-full items-center justify-center gap-4">
          <SocialButton type="Facebook" />
          <SocialButton type="Google" />
          <SocialButton type="Apple" />
          <SocialButton type="Xbox" />
          <SocialButton type="PSN" />
        </div>
        <label
          className="mt-5 flex w-full items-center justify-start gap-2 font-league text-lg font-semibold text-blue-700"
          htmlFor="save"
        >
          <input type="checkbox" id="save" name="save" className="h-4 w-4" />
          keep logged in
        </label>
        <button
          disabled={!fieldsFilled}
          className="group mt-[70px] flex h-[65px] w-[65px] items-center justify-center rounded-lg bg-red-200 disabled:bg-white-200"
        >
          {isSubmitting ? (
            <LuLoader2
              className="size-4 animate-spin text-white-100"
              size={24}
            />
          ) : (
            <FaArrowRight
              size={24}
              className="text-white-100 group-disabled:text-[#979797]"
            />
          )}
        </button>
      </motion.form>
      <footer className="mt-auto flex flex-col items-center justify-center space-x-2">
        <strong className="text-shadow-sign-in block text-center font-league text-md font-bold uppercase text-blue-700">
          Can't log in?
        </strong>

        <Link
          href="/sign-up"
          className="text-shadow-sign-in mb-4 w-full px-4 text-center font-league text-md font-bold uppercase text-blue-700 hover:underline"
        >
          Create account
        </Link>

        <span className="text-shadow-sign-in font-league text-sm font-bold text-blue-700">
          v94.0.0
        </span>
      </footer>
    </aside>
  )
}
