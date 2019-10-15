import { createSelector } from "reselect"

const selectShop = (state: any) => state.shop

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollection = (urlParam: string) =>
  createSelector(
    [selectCollections],
    collections => collections[urlParam]
  )
