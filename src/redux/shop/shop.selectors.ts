import { createSelector } from "reselect"

interface map {
  [key: string]: number
}

const COLLECTION_ID_MAP: map = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}

const selectShop = (state: any) => state.shop

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollection = (collectionUrlParam: string) =>
  createSelector(
    [selectCollections],
    collections =>
      collections.find(
        (collection: { id: number }) =>
          collection.id === COLLECTION_ID_MAP[collectionUrlParam]
      )
  )
