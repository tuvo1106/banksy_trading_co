export interface subcategory {
  id: number
  name: string
  imageUrl: string
  price: number
}

export interface category {
  id: number
  title: string
  routeName: string
  items: subcategory[]
}
