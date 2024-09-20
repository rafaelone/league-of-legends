import { Header } from '@/components/header'
import { Menu } from '@/components/menu'

export default async function LeagueLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="absolute -z-10 min-h-screen w-full bg-home bg-cover bg-top bg-no-repeat px-4 brightness-50" />
      <div className="flex min-h-screen bg-cover bg-top bg-no-repeat pl-4">
        <div className="mx-auto flex w-full max-w-[1440px] justify-between">
          <div className="flex w-full flex-col">
            <Header />
            {children}
          </div>
        </div>
        <Menu />
      </div>
    </>
  )
}
