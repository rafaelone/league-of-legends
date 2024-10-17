import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/auth/auth'
import { Header } from '@/components/header'
import { Menu } from '@/components/menu'
import { NavigationItem } from '@/components/navigation-item'

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
            <div className="no-scrollbar mx-auto my-4 flex h-[calc(100vh-122px)] w-full max-w-[1440px] overflow-auto">
              <div className="mx-11 w-full">
                <nav>
                  <ul className="flex items-center gap-3">
                    <li>
                      <NavigationItem href="/" prefetch>
                        Geral
                      </NavigationItem>
                    </li>
                    <li>
                      <NavigationItem href="/cblol" prefetch>
                        cblol
                      </NavigationItem>
                    </li>
                    <li>
                      <NavigationItem href="/patch-notes" prefetch>
                        patch notes
                      </NavigationItem>
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
