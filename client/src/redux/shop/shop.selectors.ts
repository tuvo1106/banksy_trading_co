import { createSelector } from "reselect"

const selectShop = (state: any) => state.shop

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

// convert obj -> array
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = (urlParam: string) =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[urlParam] : null)
  )

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
)
