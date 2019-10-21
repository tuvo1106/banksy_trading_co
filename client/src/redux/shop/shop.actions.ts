import ShopActionTypes from "./shop.types"

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils"

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (collectionsMap: any) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFailure = (errorMessage: string) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
  return (dispatch: Function) => {
    const collectionRef = firestore.collection("collections")
    dispatch(fetchCollectionsStart())

    collectionRef
      .get()
      .then((snapshot: any) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        dispatch(fetchCollectionsSuccess(collectionsMap))
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)))
  }
}
