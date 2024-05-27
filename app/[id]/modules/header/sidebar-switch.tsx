import {use, update} from "../../store"
import { IconButton } from "common/components/button";
import { Sidebar } from "common/components/icon";
import { cls } from "common/utils";

export default function SidebarSwitch(){
  const {sidebarOpen} = use()
  function toggle(){
    update({sidebarOpen: !sidebarOpen})
  }
  return (
    <IconButton className={cls("sidebar-switch", sidebarOpen && "open")} icon={<Sidebar />} onClick={toggle} />
  )
}
