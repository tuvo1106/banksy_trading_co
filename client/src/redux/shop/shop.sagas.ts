import { takeEvery, call, put, all } from 'redux-saga/effects'
import ShopActionTypes from './shop.types'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient, gql } from 'apollo-boost'

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions'

export function* fetchCollectionsAsync() {
  try {
    const http = yield createHttpLink({
      uri: 'https://banksyco.tk/'
    })
    const cache = new InMemoryCache()
    const client = new ApolloClient({
      link: http,
      cache
    })
    const queryArg: any = {
      query: gql`
        {
          all {
            title
            routeName
            items {
              id
              name
              imageUrl
              price
            }
          }
        }
      `
    }
    const res = yield call(client.query, queryArg)
    const collections = res.data.all
    const collectionsMap: any = {}
    collections.forEach((element: any) => {
      collectionsMap[element.routeName] = element
    })
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}
