import{
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import{
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

function Header() {
  return <div>
    {/*LEFT*/}
    <div class="flex items-center bg-green-400">
      <ion-icon name="bug-outline"></ion-icon>
      <div class="flex items-center ml-2 rounded-full p-2">
        <SearchIcon class="h-6 text-black"/>
        <input class="flex items-center ml-2 bg-transparent outline-none placeholder-black text-black" type="text" placeholder="search Phacebook" />
      </div>
    </div>

    {/*Center*/}
    <div class="flex justify-center flex-grow bg-green-500">
      <div class="flex space-x-6 md:space-x-2">
        <HeaderIcon Icon={HomeIcon} />
        <HeaderIcon Icon={FlagIcon} />
        <HeaderIcon Icon={PlayIcon} />
        <HeaderIcon Icon={ShoppingCartIcon} />
        <HeaderIcon Icon={UserGroupIcon} />
      </div>
    </div>

    {/*RIGHT*/}
    <div>

    </div>
    </div>
}

export default Header;
