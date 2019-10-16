import ShopActionTypes from "./shop.types"

const INITITAL_STATE: any = {
  collections: null
}

const shopReducer = (state = INITITAL_STATE, action: any): any => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state
  }
}

export default shopReducer
