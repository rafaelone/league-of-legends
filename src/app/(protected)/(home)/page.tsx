import { Button } from '@/components/button'

import { HomeNews } from './home-news'

export default function Home() {
  return (
    <>
      <div className="mt-2 flex justify-end">
        <Button text="Rotação de Campeões Gratís" type="button" variant="lg" />
      </div>
      <main className="mt-[142px] flex flex-col justify-start">
        <h1 className="font-league text-4xl font-bold uppercase tracking-[6px] text-gold-100">
          Emprego fixo
        </h1>
        <span className="mb-6 mt-8 font-league text-md font-bold text-grey-100">
          Dê conta do recado.
        </span>
        <Button text="Compre agora" variant="md-brightness" />
        <HomeNews />
      </main>
    </>
  )
}
