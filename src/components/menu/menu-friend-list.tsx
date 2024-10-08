import { MenuFriend } from './menu-friend'

export function MenuFriendList() {
  return (
    <ul className="mt-6 flex h-[calc(100vh-200px)] flex-col items-start justify-start gap-6 overflow-auto">
      <MenuFriend name="Friend 1" status="online" />
      <MenuFriend name="Friend 2" status="online" />
      <MenuFriend name="Friend 3" status="absent" />
      <MenuFriend name="Friend 4" status="inMobile" />
      <MenuFriend name="Friend 5" status="inQueue" />
      <MenuFriend name="Friend 6" status="inQueue" />
      <MenuFriend name="Friend 7" status="inMobile" />
      <MenuFriend name="Friend 8" status="online" />
      <MenuFriend name="Friend 8" status="online" />
      <MenuFriend name="Friend 8" status="online" />
      <MenuFriend name="Friend 8" status="online" />
      <MenuFriend name="Friend 8" status="online" />
      <MenuFriend name="Friend 8" status="online" />
      <MenuFriend name="Friend 8" status="online" />
    </ul>
  )
}
