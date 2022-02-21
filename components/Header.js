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
  return <div className="sticky top-0 z-50 bg-green-400 flex items-center p-2 lg:px-5 shadow-md">
    {/*LEFT*/}
    <div className="flex items-center bg-green-400">
      <ion-icon name="bug-outline"></ion-icon>
      <div className="flex items-center ml-2 rounded-full p-2">
        <SearchIcon className="h-6 text-black"/>
        <input className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-black text-black" type="text" placeholder="search Phacebook"/>
      </div>
    </div>

    {/*Center*/}
    <div className="flex justify-center flex-grow bg-green-500 rounded-lg">
      <div className="flex space-x-6 md:space-x-2">
        <HeaderIcon active Icon={HomeIcon} />
        <HeaderIcon Icon={FlagIcon} />
        <HeaderIcon Icon={PlayIcon} />
        <HeaderIcon Icon={ShoppingCartIcon} />
        <HeaderIcon Icon={UserGroupIcon} />
      </div>
    </div>

    {/*RIGHT*/}
    <div className="flex items-center sm:space-x-2 justify-end">
        <p className="whitespace-nowrap font-semibold p-3">hello</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />

    </div>
    </div>
}

export default Header;
