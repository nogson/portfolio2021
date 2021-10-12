export interface IContentItem {
  id: number
  title: string
  body: object
  description: string
  createdAt: string
  updatedAt: string
  thumbnail: string
  category: string
  extension: string
  slug: string
  dir: string
}

export interface IContentEmptyItem {
  slug: string
}
