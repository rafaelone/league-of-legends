import { ChampionsList } from './champions-list'
import { ChampionsSide } from './champions-side'

export default function Champions() {
  return (
    <div className="mt-12 flex">
      <ChampionsSide />
      <ChampionsList />
    </div>
  )
}
