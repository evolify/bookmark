import Store from "common/utils/store"
import { Bookmark } from "common/types"

async function _getData() {
  if (typeof window === "undefined") return []
  const res = await fetch("/api/tbls1ULA5yhOwDOJ")
  const data = await res.json()
  return data
}

async function _save(data: Partial<Bookmark>) {
  const res = await fetch("/api/tbls1ULA5yhOwDOJ", {
    method: data.id ? "PUT" : "POST",
    body: JSON.stringify(data),
  })
  return res.json()
}

async function _remove(id: string) {
  const res = await fetch(`/api/tbls1ULA5yhOwDOJ?id=${id}`, {
    method: "DELETE",
  })
  return res.json()
}

export const { state, update, use } = new Store({
  list: [] as Bookmark[],
  tags: [] as string[],
  loading: true,
  keywords: "",
  tag: "",
  sidebarOpen: true,
  selected: "",
})

export async function load(loading = true) {
  update({ loading })
  const { list, tags } = await _getData()
  update({
    list,
    tags,
    loading: false,
  })
}

load()

export async function add(link: string) {
  const res = await _save({ link })
  if (res) {
    update(({list}) => ({
      list: [
        { link, title: link, tags: [], desc: "", id: link, time: Date.now() },
        ...list,
      ],
    }))
    load(false)
  }
}

export async function save(bookmark: Bookmark) {
  const res = await _save(bookmark)
  if (res) {
    update(({ list }) => ({
      list: list.map(t =>
        t.id === bookmark.id
          ? {
              ...t,
              ...bookmark,
            }
          : t
      ),
    }))
  }
}

export async function remove(id: string) {
  const res = await _remove(id)
  if (res) {
    update(({ list }) => ({ list: list.filter(t => t.id !== id) }))
  }
}
