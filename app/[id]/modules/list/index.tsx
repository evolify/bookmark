import { cls } from "common/utils"
import { use } from "../../store"
import Card from "./card"
import "./style.scss"
import { useMemo } from "react"

export default function List() {
  const { list, keywords, tag, selected } = use()


  const data = useMemo(() => {
    let res = list
    if (tag) {
      res = res.filter(t => t.tags.includes(tag))
    }
    if (!keywords) {
      return res
    }
    return res.filter(
      t =>
        t.title.includes(keywords) ||
        t.desc.includes(keywords) ||
        t.link.includes(keywords) ||
        t.tags.some(u => u.includes(keywords))
    )
  }, [list, keywords, tag])

  return (
    <div className={cls("list", Boolean(selected) && "editing")}>
      {data.map((t, i) => (
        <Card data={t} index={i} key={t.id} />
      ))}
    </div>
  )
}
