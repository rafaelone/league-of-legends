import Image from 'next/image'
import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'

import RiotLogo from '@/assets/logo.png'

import { SignUpForm } from './sign-up-form'

export default function SignUp() {
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
      <SignUpForm />
      <Link
        prefetch
        href="/sign-in"
        className="font-league group mt-10 flex items-center gap-2 font-bold text-blue-700 transition-all"
      >
        <FaChevronLeft className="size-4 group-hover:-translate-x-1" />
        Back to Sign In
      </Link>
    </aside>
  )
}
