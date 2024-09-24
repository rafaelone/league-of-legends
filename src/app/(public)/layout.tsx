export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative h-screen w-screen bg-sign-in bg-cover bg-top bg-no-repeat">
      {children}
      <div id="modal-portal"></div>
    </div>
  )
}
