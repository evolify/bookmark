import { use } from "../../store"
import { Tags } from "../../components/tag"
import "./style.scss"
import { cls } from "common/utils"

export default function Sidebar() {
  const { tags, sidebarOpen } = use()
  return (
    <div className={cls(sidebarOpen && "visible", "nav-placeholder")}>
      <nav>
        <Tags data={tags} />
      </nav>
    </div>
  )
}
