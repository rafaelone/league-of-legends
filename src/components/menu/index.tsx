import { MenuFooter } from './menu-footer'
import { MenuFriendList } from './menu-friend-list'
import { MenuPlayer } from './menu-player'
import { MenuSocialOptions } from './menu-social-options'

export function Menu() {
  return (
    <aside className="z-10 min-h-screen w-[280px] bg-grey-600">
      <MenuPlayer />
      <div className="m-3">
        <MenuSocialOptions />
        <MenuFriendList />
      </div>
      <MenuFooter />
    </aside>
  )
}
