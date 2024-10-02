import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/auth/auth'
import { Header } from '@/components/header'
import { Menu } from '@/components/menu'
import { NavigationHomeItem } from '@/components/navigation-home'

export default async function LeagueLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (!isAuthenticated()) {
    redirect('/sign-in')
  }

  return (
    <>
      <div className="flex h-full bg-home bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 flex w-full justify-between">
          <div className="flex w-full flex-col">
            <Header />
            <div className="mx-auto my-4 flex h-full w-full max-w-[1440px]">
              <div className="mx-11 w-full">
                <nav>
                  <ul className="flex items-center gap-3">
                    <li>
                      <NavigationHomeItem href="/" prefetch>
                        Geral
                      </NavigationHomeItem>
                    </li>
                    <li>
                      <NavigationHomeItem href="/cblol" prefetch>
                        cblol
                      </NavigationHomeItem>
                    </li>
                    <li>
                      <NavigationHomeItem href="/patch" prefetch>
                        patch notes
                      </NavigationHomeItem>
                    </li>
                  </ul>
                </nav>
                {children}
              </div>
            </div>
          </div>
        </div>
        <Menu />
      </div>
    </>
  )
}
