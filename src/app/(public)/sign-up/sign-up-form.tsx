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
import RiotLogo from '@/assets/logo.png'
import { Modal } from '@/components/modal'

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

  const allFieldsFilled = fields.every(
    (value) => value !== undefined && value !== '',
  )

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
    setIsOpen(true)
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
          <strong className="text-center font-poppins font-bold text-white-100">
            Account created successfully, you will be redirected in 5 seconds,
            good luck summoner.
          </strong>
        </div>
      </Modal>
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
        className="w-full max-w-[360px] space-y-6 backdrop-blur-sm"
        initial={{
          opacity: 0,
          scale: 0.75,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            ease: 'easeOut',
            duration: 0.15,
          },
        }}
        exit={{
          opacity: 0,
          scale: 0.75,
          transition: {
            ease: 'easeIn',
            duration: 0.15,
          },
        }}
      >
        <div className="space-y-4">
          <div>
            <input
              type="text"
              id="floating_standard"
              className="peer block w-full appearance-none rounded-md bg-transparent px-4 py-2.5 font-poppins text-md font-semibold text-white-100 shadow-input focus:outline-none focus:ring-0"
              placeholder="Name"
              {...register('name')}
            />
            {errors.name?.message && (
              <span className="font-poppins text-sm font-bold text-white-100">
                {errors.name.message}
              </span>
            )}
          </div>
          <div>
            <input
              type="text"
              id="floating_standard"
              className="peer block w-full appearance-none rounded-md bg-transparent px-4 py-2.5 font-poppins text-md font-semibold text-white-100 shadow-input focus:outline-none focus:ring-0"
              placeholder="E-mail"
              {...register('email')}
            />
          </div>
          <div>
            <input
              type="text"
              id="floating_standard"
              className="peer block w-full appearance-none rounded-md bg-transparent px-4 py-2.5 font-poppins text-md font-semibold text-white-100 shadow-input focus:outline-none focus:ring-0"
              placeholder="Username"
              {...register('username')}
            />
          </div>
          <div>
            <input
              type="password"
              id="floating_standard"
              className="peer block w-full appearance-none rounded-md bg-transparent px-4 py-2.5 font-poppins text-md font-semibold text-white-100 shadow-input focus:outline-none focus:ring-0"
              placeholder="Password"
              {...register('password')}
            />
          </div>
        </div>
        <button
          disabled={!allFieldsFilled}
          className="flex h-11 w-full items-center justify-center rounded-lg text-white-100 shadow-button transition-colors disabled:shadow-button-hover"
        >
          {isSubmitting ? (
            <LuLoader2 className="size-4 animate-spin" />
          ) : (
            'Sign Up'
          )}
        </button>
      </motion.form>
    </>
  )
}
