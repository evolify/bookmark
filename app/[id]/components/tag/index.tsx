import { use, update } from "../../store"
import { cls } from "common/utils"
import "./style.scss"

interface Props {
  text: string
}
export default function Tag({ text }: Props) {
  const { tag } = use()
  const active = tag === text
  function onClick() {
    update({
      tag: active ? "" : text,
    })
  }
  return (
    <div className={cls("tag", active && "active")} onClick={onClick}>
      {text}
    </div>
  )
}

export function Tags({ data }: { data: string[] }) {
  return (
    <div className="tags">
      {data.map(t => (
        <Tag key={t} text={t} />
      ))}
    </div>
  )
}
