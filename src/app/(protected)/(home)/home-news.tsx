import Image from 'next/image'

import News1 from '@/assets/images/news/news-1.webp'
import News2 from '@/assets/images/news/news-2.webp'

import { HomeNewsCard } from './home-news-card'

export function HomeNews() {
  return (
    <nav className="mt-[150px]">
      <ul className="flex w-full flex-wrap gap-3">
        <HomeNewsCard
          description="Heavy Is The Crown ft. Linkin Park"
          href="/"
          target="_blank"
        >
          <Image
            src={News1}
            alt="Heavy Is The Crown ft. Linkin Park"
            className="h-full w-full border border-dark-100 object-cover transition-all hover:scale-[1.1]"
          />
        </HomeNewsCard>
        <HomeNewsCard description="Dev Diary Global" href="/" target="_blank">
          <Image
            src={News2}
            alt="Dev Diary Global"
            className="h-full w-full border border-dark-100 object-cover transition-all hover:scale-[1.1]"
          />
        </HomeNewsCard>
      </ul>
    </nav>
  )
}
