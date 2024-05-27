export interface Bookmark {
  id: string
  link: string
  title?: string
  desc?: string
  tags: string[]
  time?: number
}

export interface Fields {
  title: {
    text: string
  }[]
  desc: {
    text: string
  }[]
  link: {
    link: string
  }
  tags: string[]
  time: number
}
