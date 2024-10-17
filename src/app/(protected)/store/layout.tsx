import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/auth/auth'
import { Header } from '@/components/header'
import { Menu } from '@/components/menu'
import { NavigationItem } from '@/components/navigation-item'

export default async function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (!isAuthenticated()) {
    redirect('/sign-in')
  }

  return (
    <div className="flex h-screen bg-gradient-to-b from-blue-700 from-95% to-blue-500">
      <div className="z-10 flex w-full justify-between">
        <div className="flex w-full flex-col">
          <Header />
          <div className="no-scrollbar mx-auto my-4 flex h-[calc(100vh-122px)] w-full max-w-[1440px] overflow-auto">
            <div className="mx-11 w-full">
              <nav>
                <ul className="flex items-center gap-3">
                  <li>
                    <NavigationItem href="/store" prefetch>
                      Destaques
                    </NavigationItem>
                  </li>
                  <li>
                    <NavigationItem href="/store/champions" prefetch>
                      Champions
                    </NavigationItem>
                  </li>
                  <li>
                    <NavigationItem href="/store/skins" prefetch>
                      Skins
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
  )
}
