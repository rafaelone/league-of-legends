'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

import RiotLogo from '@/assets/logo.png'

import { SocialButton } from './social-buttons'

export function LoginForm() {
  return (
    <motion.aside
      className="flex h-full w-[400px] flex-col items-center rounded-3xl border-r border-gray-100 py-6 backdrop-blur-sm"
      initial={{ translateX: -999 }}
      animate={{ translateX: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={RiotLogo}
        width={150}
        height={150}
        priority
        alt="Riot Games"
        className="mx-auto my-[80px] block"
      />
      <motion.form
        className="mx-auto flex max-w-[300px] flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <strong className="mb-8 font-poppins text-2xl font-semibold text-white-100 text-shadow-sign-in">
          Fazer login
        </strong>
        <div className="flex flex-col space-y-6">
          <div className="relative z-0">
            <input
              type="text"
              id="floating_standard"
              className="peer block w-full appearance-none bg-transparent px-4 py-2.5 font-poppins text-md font-semibold text-white-100 shadow-input focus:outline-none focus:ring-0"
              placeholder="Username"
            />
          </div>
          <div className="relative z-0">
            <input
              type="password"
              id="password"
              name="password"
              className="peer block w-full appearance-none bg-transparent px-4 py-2.5 font-poppins text-md font-semibold text-white-100 shadow-input focus:outline-none focus:ring-0"
              placeholder="Password"
            />
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
          className="mt-5 flex w-full items-center justify-start gap-2 text-xl font-semibold text-white-100 text-shadow-sign-in"
          htmlFor="save"
        >
          <input
            type="checkbox"
            id="save"
            name="save"
            className="h-4 w-4 accent-pink-500 active:bg-black"
          />
          manter login
        </label>
        <button
          disabled
          className="group mt-[70px] flex h-[65px] w-[65px] items-center justify-center rounded-lg shadow-button disabled:shadow-button-hover"
        >
          <FaArrowRight size={24} color="#fff" />
        </button>
      </motion.form>
      <footer className="mt-auto flex flex-col items-center justify-center space-x-2">
        <strong className="font-poppins text-md font-bold text-white-100 text-shadow-sign-in">
          Não consegue fazer login?
        </strong>

        <Link
          href="/"
          className="w-full px-4 text-center font-poppins text-md font-bold text-white-100 text-shadow-sign-in hover:underline"
        >
          Criar Conta
        </Link>

        <p className="w-full px-4 text-center font-poppins text-xs font-semibold text-white-100 text-shadow-sign-in">
          Esse aplicativo é protegido por hchaptcha. A{' '}
          <span className="font-bold underline">pólitica de privacidade</span> e
          os <span className="font-bold underline">termos de serviço</span> são
          aplicáveis
        </p>
        <span className="font-poppins text-sm font-bold text-white-100 text-shadow-sign-in">
          v94.0.0
        </span>
      </footer>
    </motion.aside>
  )
}
