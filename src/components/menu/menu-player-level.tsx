import { auth } from '@/auth/auth'

export async function MenuPlayerLevel() {
  const { user } = await auth()
  return (
    <div className="absolute -bottom-[2px] rounded-full border border-[#927243] bg-[#1B2023] px-2 font-league text-sm">
      {user.level}
    </div>
  )
}
