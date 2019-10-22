import ShopActionTypes from './shop.types'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient, gql } from 'apollo-boost'
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils'

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
    console.log(
      'Starting my game----------------------------------------------------------------'
    )
    /* const collectionRef = firestore.collection("collections")
    dispatch(fetchCollectionsStart())

    collectionRef
      .get()
      .then((snapshot: any) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        dispatch(fetchCollectionsSuccess(collectionsMap))
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message))) */

    const http = createHttpLink({
      uri: 'https://banksyco.tk/'
    })

    const cache = new InMemoryCache()

    const client = new ApolloClient({
      link: http,
      cache
    })

    dispatch(fetchCollectionsStart())

    client
      .query({
        query: gql`
          {
            all {
              id
              title
              routeName
              items {
                id
                imageUrl
                price
              }
            }
          }
        `
      })
      .then((res: any) => {
        const collectionsMap = res.data
        console.log('*********************************************')
        console.log(collectionsMap)
        dispatch(fetchCollectionsSuccess(collectionsMap))
      })
      .catch((error: Error) => dispatch(fetchCollectionsFailure(error.message)))
  }
}
