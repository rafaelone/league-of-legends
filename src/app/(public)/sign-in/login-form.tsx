'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

import RiotLogo from '@/assets/logo.png'
import { Input } from '@/components/input'

import { SocialButton } from './social-buttons'

export function LoginForm() {
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
        className="mx-auto flex w-full max-w-[300px] flex-col items-center justify-center"
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
        <strong className="font-league mb-8 block text-center text-2xl font-semibold text-blue-700">
          Sign In
        </strong>
        <div className="flex w-full flex-col space-y-6">
          <Input
            id="username"
            placeholder=" "
            type="text"
            labelText="username"
            htmlFor="username"
          />
          <Input
            id="password"
            placeholder=" "
            type="password"
            labelText="password"
            htmlFor="password"
          />
        </div>
        <div className="mt-6 flex w-full items-center justify-center gap-4">
          <SocialButton type="Facebook" />
          <SocialButton type="Google" />
          <SocialButton type="Apple" />
          <SocialButton type="Xbox" />
          <SocialButton type="PSN" />
        </div>
        <label
          className="font-league mt-5 flex w-full items-center justify-start gap-2 text-lg font-semibold text-blue-700"
          htmlFor="save"
        >
          <input type="checkbox" id="save" name="save" className="h-4 w-4" />
          keep logged in
        </label>
        <button
          disabled
          className="group mt-[70px] flex h-[65px] w-[65px] items-center justify-center rounded-lg bg-red-200 disabled:bg-white-200"
        >
          <FaArrowRight
            size={24}
            className="text-white-100 group-disabled:text-[#979797]"
          />
        </button>
      </motion.form>
      <footer className="mt-auto flex flex-col items-center justify-center space-x-2">
        <strong className="text-shadow-sign-in font-league block text-center text-md font-bold uppercase text-blue-700">
          Can't log in?
        </strong>

        <Link
          href="/sign-up"
          className="text-shadow-sign-in font-league mb-4 w-full px-4 text-center text-md font-bold uppercase text-blue-700 hover:underline"
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
