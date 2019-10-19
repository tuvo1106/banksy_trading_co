export interface cartItem {
  id: number
  name: string
  imageUrl: string
  price: number
  quantity: number
}

export interface cartAction {
  (item: cartItem): { type: string; payload: cartItem }
}
