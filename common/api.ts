import { Client } from "@larksuiteoapi/node-sdk"
import { Bookmark, Fields } from "./types"

const { APP_ID, APP_SECRET, APP_TOKEN } = process.env

const lark = new Client({
  appId: APP_ID,
  appSecret: APP_SECRET,
})

function fromFields(fields: Fields) {
  const { link, title = [], tags = [], time, desc = [] } = fields
  return {
    link: link?.link,
    title: title[0]?.text || "",
    desc: desc[0]?.text || "",
    tags,
    time,
  }
}

function toFields(bookmark: Bookmark){
  return {
    link: {
      link: bookmark.link,
      text: bookmark.link,
    },
    title: bookmark.title,
    desc: bookmark.desc,
    tags: bookmark.tags,
  }

}

export async function getData(table_id: string) {
  const list: Bookmark[] = []
  const tagList: string[] = []
  for await (const item of await lark.bitable.appTableRecord.searchWithIterator(
    {
      path: {
        app_token: APP_TOKEN,
        table_id,
      },
      data: {
        sort: [{
          field_name: "time",
          desc: true,
        }]
      }
    }
  )) {
    if (item.items) {
      item.items.forEach(t => {
        const { title, link, tags, time, desc } = fromFields(
          t.fields as unknown as Fields
        )
        if (link) {
          list.push({
            id: t.record_id,
            link,
            title,
            desc,
            tags,
            time,
          })
          tags.forEach(tag => !tagList.includes(tag) && tagList.push(tag))
        }
      })
    }
  }
  return {
    list,
    tags: tagList
  }
}

export async function insert(table_id: string, bookmarks: Bookmark[]) {
  return await lark.bitable.appTableRecord
    .batchCreate({
      path: {
        app_token: APP_TOKEN,
        table_id,
      },
      data: {
        records: bookmarks.map(t => ({
          fields: toFields(t)
        })),
      },
    })
}

export async function update(table_id: string, bookmark: Bookmark){
  const res = await lark.bitable.appTableRecord.update({
    path: {
      app_token: APP_TOKEN,
      table_id,
      record_id: bookmark.id,
    },
    data: {
      fields: toFields(bookmark)
    }
  })
  return res.code === 0
}

export async function remove(table_id: string, id: string){
  const res = await lark.bitable.appTableRecord.delete({
    path: {
      app_token: APP_TOKEN,
      table_id,
      record_id: id,
    }
  })
  return res.code === 0
}
