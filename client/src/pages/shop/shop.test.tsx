/* modules */
import React from "react"
import { mount, configure, ReactWrapper } from "enzyme"
import { combineReducers, createStore } from "redux"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import Adapter from "enzyme-adapter-react-16"

/* components */
import { ShopPage } from "./shop.component"

configure({ adapter: new Adapter() })

export const createMockStore = ({ state, reducers }: any): any => {
  const store = createStore(combineReducers(reducers), state)
  return {
    ...store,
    persistor: {
      persist: () => null
    }
  }
}

describe("ShopPage", () => {
  let wrapper: ReactWrapper
  let mockFetchCollectionsStart: Function
  let store

  beforeEach(() => {
    const mockReducer = (
      state = {
        isFetching: true
      },
      action: Function
    ) => state

    const mockState = {
      shop: {
        isFetching: true
      }
    }

    mockFetchCollectionsStart = jest.fn()

    store = createMockStore({
      state: mockState,
      reducers: { shop: mockReducer }
    })

    const mockMatch = {
      path: ""
    }

    const mockProps = {
      match: mockMatch,
      fetchCollectionsStart: mockFetchCollectionsStart
    }

    wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <ShopPage {...mockProps} />
        </Provider>
      </BrowserRouter>
    )
  })

  it("should render ShopPage component", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should render ShopPage component", () => {
    expect(mockFetchCollectionsStart).toHaveBeenCalled()
  })
})
