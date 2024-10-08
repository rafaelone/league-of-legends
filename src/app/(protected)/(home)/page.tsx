import { Button } from '@/components/button'

import { HomeNews } from './home-news'

export default function Home() {
  return (
    <>
      <div className="mt-2 flex justify-end">
        <Button text="Free Champion Rotation" type="button" variant="lg" />
      </div>
      <main className="mt-[142px] flex flex-col justify-start">
        <h1 className="font-league text-4xl font-bold uppercase tracking-[6px] text-gold-100">
          Steady Job
        </h1>
        <span className="mb-6 mt-8 font-league text-md font-bold text-grey-100">
          message account
        </span>
        <Button text="Buy now" variant="md-brightness" />
        <HomeNews />
      </main>
    </>
  )
}
