import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/auth/auth'

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (isAuthenticated()) {
    redirect('/')
  }

  return (
    <div className="relative h-screen w-screen bg-sign-in bg-cover bg-top bg-no-repeat">
      {children}
      <div id="modal-portal"></div>
    </div>
  )
}
