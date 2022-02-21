import{
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from "@heroicons/react/outline";
import{
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from "@heroicons/react/solid";

import SidebarRow from './SidebarRow.js'

function Sidebar() {
  return <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow Icon={ChevronDownIcon} title="See More"/>
      <SidebarRow Icon={UsersIcon} title="Friends"/>
      <SidebarRow Icon={ShoppingBagIcon} title="Bagpipes"/>
      <SidebarRow Icon={DesktopComputerIcon} title="Computer"/>
      <SidebarRow Icon={CalendarIcon} title="Calendar"/>
      <SidebarRow Icon={ClockIcon} title="Time"/>
      <SidebarRow Icon={UserGroupIcon} title="Buddies"/>
  </div>;
}

export default Sidebar;
