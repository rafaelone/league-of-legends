import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'

import { SignUpForm } from './sign-up-form'

export default function SignUp() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <SignUpForm />
      <Link
        prefetch
        href="/sign-in"
        className="group mt-10 flex items-center gap-2 font-poppins font-bold text-white-100 transition-all"
      >
        <FaChevronLeft className="size-4 group-hover:-translate-x-1" />
        Back to Sign In
      </Link>
    </div>
  )
}
