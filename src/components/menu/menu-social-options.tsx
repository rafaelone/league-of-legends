import Image from 'next/image'

import AddFolderIcon from '@/assets/images/aside-icons/add-folder.png'
import AddFriendIcon from '@/assets/images/aside-icons/add-friend.png'
import OptionsIcon from '@/assets/images/aside-icons/options.png'
import SearchIcon from '@/assets/images/aside-icons/search.png'

export function MenuSocialOptions() {
  return (
    <div className="flex items-center justify-between gap-2">
      <strong className="font-league text-sm uppercase text-grey-100">
        Social
      </strong>
      <div className="flex items-center gap-2">
        <button>
          <Image src={AddFriendIcon} width={22} height={22} alt="Add Friend" />
        </button>
        <button>
          <Image src={AddFolderIcon} width={22} height={22} alt="Add Folder" />
        </button>
        <button>
          <Image src={OptionsIcon} width={22} height={22} alt="Options" />
        </button>
        <button>
          <Image src={SearchIcon} width={22} height={22} alt="Search" />
        </button>
      </div>
    </div>
  )
}
