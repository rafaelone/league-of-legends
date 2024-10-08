import Image from 'next/image'
import Link from 'next/link'

import AmericasChallenger from '@/assets/images/cblol/americas-challenger.webp'
import BehindTheScenes from '@/assets/images/cblol/behind-the-scenes-of-the-title.webp'
import Cblol2024 from '@/assets/images/cblol/cblol-2024.webp'
import IgnisCup from '@/assets/images/cblol/ignis-cup.webp'
import OutsideTheRiftProdelta from '@/assets/images/cblol/outside-the-rift-prodelta.webp'
import OutsideTheRiftWiser from '@/assets/images/cblol/outside-the-rift-wiser.webp'

export default function Cblol() {
  return (
    <div className="mt-5 grid grid-cols-3 grid-rows-2 gap-4">
      <Link
        href="https://lolesports.com/pt-BR/news/os-bastidores-da-pain-tetracampe-do-cblol"
        target="_blank"
        className="relative col-span-2 row-span-2 h-full border-[2px] border-gold-600"
      >
        <Image
          src={BehindTheScenes}
          alt="Behind the scenes of the title"
          className="h-full"
        />
        <div className="absolute bottom-3 left-5">
          <h1 className="font-league text-2xl font-semibold text-gold-200">
            Behind the scenes of the title
          </h1>
          <p className="text-sm font-semibold text-gold-400">
            Transport yourself into the paiN locker room last Saturday
          </p>
        </div>
      </Link>
      <Link
        href="https://lolesports.com/pt-BR/news/2024-americas-challengers-primer"
        target="_blank"
        className="relative border-[2px] border-gold-600"
      >
        <Image
          src={AmericasChallenger}
          alt="Behind de scenes of the title"
          className="h-full"
        />
        <p className="absolute bottom-3 left-5 font-league text-lg font-semibold text-gold-200">
          Americas Challenger
        </p>
      </Link>
      <Link
        href="https://lolesports.com/pt-BR/news/escalaes-oficiais---cblol-2024-segunda-etapa"
        target="_blank"
        className="relative border-[2px] border-gold-600"
      >
        <Image
          src={Cblol2024}
          alt="Behind de scenes of the title"
          className="h-full"
        />

        <p className="absolute bottom-3 left-5 font-league text-lg font-semibold text-gold-200">
          Cblol 2024
        </p>
      </Link>
      <Link
        href="https://lolesports.com/pt-BR/news/fora-do-rift-prodelta"
        target="_blank"
        className="relative border-[2px] border-gold-600"
      >
        <Image
          src={OutsideTheRiftProdelta}
          alt="Behind de scenes of the title"
          className="h-full"
        />

        <p className="text-lf absolute bottom-3 left-5 font-league font-semibold text-gold-200">
          Outside the rift: Prodelta
        </p>
      </Link>
      <Link
        href="https://lolesports.com/pt-BR/news/fora-do-rift-wizer"
        target="_blank"
        className="relative border-[2px] border-gold-600"
      >
        <Image
          src={OutsideTheRiftWiser}
          alt="Behind de scenes of the title"
          className="h-full"
        />

        <p className="absolute bottom-3 left-5 font-league text-lg font-semibold text-gold-200">
          Outside the rift: Wizer
        </p>
      </Link>
      <Link
        href="https://lolesports.com/pt-BR/news/ignis-cup-2024-tudo-sobre-a-segunda-etapa"
        target="_blank"
        className="relative border-[2px] border-gold-600"
      >
        <Image
          src={IgnisCup}
          alt="Behind de scenes of the title"
          className="h-full"
        />

        <p className="absolute bottom-3 left-5 font-league text-lg font-semibold text-gold-200">
          Ignis Cup
        </p>
      </Link>
    </div>
  )
}
