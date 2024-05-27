import {useHotkeys} from "react-hotkeys-hook"
import { IconButton } from "common/components/button"
import {confirm} from "common/components/modal"
import { use, update, save, remove } from "../../store"
import { ArrowTopRight, Check, Close, Copy, Delete, Edit } from "common/components/icon"
import { Bookmark } from "common/types"
import dayjs from "dayjs"
import React, { useEffect, useState } from "react"
import TagSelect from "./tag-select"

interface Props {
  data: Bookmark
  index?: number
}

function EditCard({ data }: Props) {
  const { tags: tagList } = use()
  const [link, setLink] = useState(data.link)
  const [title, setTitle] = useState(data.title)
  const [tags, setTags] = useState(data.tags)

  function reset() {
    if (data.link !== link) {
      setLink(data.link)
    }
    if (data.title !== title) {
      setTitle(data.title)
    }
    if (data.tags !== tags) {
      setTags(data.tags)
    }
  }

  function cancel() {
    update({
      selected: null,
    })
  }

  function submit() {
    save({ id: data.id, link, title, tags })
    update({
      selected: "",
    })
  }

  useEffect(() => {
    reset()
  }, [data])

  return (
    <div className="card editing">
      <div className="card-content">
        <div className="input-item">
          <div className="label">url</div>
          <input className="input" type="text" defaultValue={link} />
        </div>
        <div className="input-item">
          <div className="label">title</div>
          <input className="input" type="text" defaultValue={title} />
        </div>
        <div className="input-item">
          <div className="label">tags</div>
          <TagSelect value={tags} data={tagList} onChange={setTags} />
        </div>
      </div>

      <div className="card-footer mt-auto flex items-center justify-between">
        <div className="time">{dayjs(data.time).format("YYYY-MM-DD")}</div>
        <div className="action">
          <IconButton icon={<Close />} onClick={cancel} tabIndex={-1} />
          <IconButton icon={<Check />} onClick={submit} tabIndex={-1} />
        </div>
      </div>
    </div>
  )
}

export default function Card({ data, index }: Props) {
  const ref = useHotkeys<HTMLDivElement>("mod+k", ()=>{
    console.log("kkkk", data.title)
  })
  const { selected } = use()
  const editing = selected === data.id

  function to(e: React.MouseEvent) {
    e.stopPropagation()
    window.open(data.link)
  }

  function copy(e: React.MouseEvent){
    e.stopPropagation()
    navigator.clipboard.writeText(data.link)
  }

  function edit(e: React.MouseEvent) {
    e.stopPropagation()
    update({
      selected: data.id,
    })
  }

  function toDelete(e: React.MouseEvent){
    e.stopPropagation()
    confirm({
      title: "确认删除？",
      onOk: ()=>{
        remove(data.id)
      }
    })
  }

  return (
    <div className="card-wrapper" tabIndex={0} ref={ref}>
      <div className="card" onClick={to}>
        <div className="card-content">
          <div className="title">{data.title}</div>
          <div className="link">{data.link}</div>
          <div className="tags">
            {data.tags.map(t => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="card-footer mt-auto flex items-center justify-between">
          <div className="time">{dayjs(data.time).format("YYYY-MM-DD")}</div>
          <div className="action">
            <IconButton icon={<Copy />} onClick={copy} tabIndex={-1} />
            <IconButton icon={<Delete />} onClick={toDelete} tabIndex={-1} />
            <IconButton icon={<Edit />} onClick={edit} tabIndex={-1}/>
          </div>
        </div>
        <ArrowTopRight />
      </div>
      {editing && <EditCard data={data} />}
    </div>
  )
}
